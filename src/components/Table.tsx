import { useState, useMemo } from "react"
import { useAsyncDebounce } from "react-table"
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  Column,
} from "react-table"

type TableProps<T extends object> = {
  data: T[]
}

const Table = <T extends object>({ data }: TableProps<T>) => {
  const columns: Column[] = useMemo(
    () =>
      Object.keys(data[0]).map((el) => {
        return {
          Header: el,
          accessor: (rowValue: { [key: string]: T[] }) => rowValue[el],
          id: el,
        }
      }),
    [data]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    state: { pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    //pageOptions,
    //gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  return (
    <div className="w-100">
      <div className="d-flex gap-3 flex-column flex-sm-row justify-content-sm-between text-nowrap">
        <TablePageSize pageSize={pageSize} setPageSize={setPageSize} />
        <TableFilter
          rows={preGlobalFilteredRows.length}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <div className="overflow-auto">
        <table {...getTableProps()} className="w-100 table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div className="d-flex align-items-center gap-2 justify-content-between">
                      {column.render("Header")}

                      <div className="d-flex flex-column gap-0">
                        <span
                          className={
                            column.isSorted
                              ? column.isSortedDesc
                                ? "lh-1 text-light"
                                : "lh-1 text-secondary"
                              : "lh-1 text-white"
                          }
                        >
                          ▲
                        </span>
                        <span
                          className={
                            column.isSorted
                              ? column.isSortedDesc
                                ? "lh-1 text-secondary"
                                : "lh-1 text-light"
                              : "lh-1 text-white"
                          }
                        >
                          ▼
                        </span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex gap-3 align-items-sm-center flex-column flex-sm-row justify-content-sm-between text-nowrap">
        <TablePageInfo
          pageSize={pageSize}
          pageIndex={pageIndex}
          rows={rows.length}
        />
        <TablePageButtons
          previousPage={previousPage}
          canPreviousPage={canPreviousPage}
          nextPage={nextPage}
          canNextPage={canNextPage}
        />
        {/* <TableGotoPage
          pages={pageOptions.length}
          pageIndex={pageIndex}
          gotoPage={gotoPage}
        /> */}
      </div>
    </div>
  )
}

type TableFilterProps = {
  rows: number
  globalFilter: string
  setGlobalFilter: Function
}

const TableFilter = ({
  rows,
  globalFilter,
  setGlobalFilter,
}: TableFilterProps) => {
  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <div className="d-flex align-items-center gap-2">
      <span>Search:</span>
      <input
        className="form-control"
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`${rows} rows...`}
      />
    </div>
  )
}

// type TableGotoPageProps = {
//   pages: number
//   pageIndex: number
//   gotoPage: Function
// }

// const TableGotoPage = ({ pages, pageIndex, gotoPage }: TableGotoPageProps) => {
//   return (
//     <div className="d-flex align-items-center gap-2">
//       <span>Go to page:</span>
//       <input
//         className="form-control w-auto"
//         type="number"
//         min={1}
//         max={pages}
//         defaultValue={pageIndex + 1 || 1}
//         onChange={(e) => {
//           const page = e.target.value ? Number(e.target.value) - 1 : 0
//           gotoPage(page)
//         }}
//       />
//     </div>
//   )
// }

type TablePageSizeProps = {
  pageSize: number
  setPageSize: Function
}

const TablePageSize = ({ pageSize, setPageSize }: TablePageSizeProps) => {
  return (
    <div className="d-flex align-items-center gap-2">
      <span>Show</span>
      <select
        className="form-select w-auto"
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
      <span>per page</span>
    </div>
  )
}

type TablePageButtonsProps = {
  previousPage: Function
  canPreviousPage: boolean
  nextPage: Function
  canNextPage: boolean
}

const TablePageButtons = ({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
}: TablePageButtonsProps) => {
  return (
    <div className="btn-group" role="group">
      <button
        className="btn btn-outline-secondary"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        {"<"}
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        {">"}
      </button>
    </div>
  )
}

type TablePageInfoProps = {
  pageSize: number
  pageIndex: number
  rows: number
}

const TablePageInfo = ({ pageSize, pageIndex, rows }: TablePageInfoProps) => {
  return (
    <span>
      Showing {pageSize * pageIndex + 1} to {pageSize * (pageIndex + 1)} of{" "}
      {rows} rows
    </span>
  )
}

export default Table
