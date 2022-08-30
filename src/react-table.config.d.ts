import {
//  UseColumnOrderInstanceProps,
//  UseColumnOrderState,
//  UseExpandedHooks,
//  UseExpandedInstanceProps,
//  UseExpandedOptions,
//  UseExpandedRowProps,
//  UseExpandedState,
//  UseFiltersColumnOptions,
//  UseFiltersColumnProps,
//  UseFiltersInstanceProps,
//  UseFiltersOptions,
//  UseFiltersState,
//  UseGlobalFiltersColumnOptions,
    UseGlobalFiltersInstanceProps,
//  UseGlobalFiltersOptions,
    UseGlobalFiltersState,
//  UseGroupByCellProps,
//  UseGroupByColumnOptions,
//  UseGroupByColumnProps,
//  UseGroupByHooks,
//  UseGroupByInstanceProps,
//  UseGroupByOptions,
//  UseGroupByRowProps,
//  UseGroupByState,
    UsePaginationInstanceProps,
//  UsePaginationOptions,
    UsePaginationState,
//  UseResizeColumnsColumnOptions,
//  UseResizeColumnsColumnProps,
//  UseResizeColumnsOptions,
//  UseResizeColumnsState,
//  UseRowSelectHooks,
//  UseRowSelectInstanceProps,
//  UseRowSelectOptions,
//  UseRowSelectRowProps,
//  UseRowSelectState,
//  UseRowStateCellProps,
//  UseRowStateInstanceProps,
//  UseRowStateOptions,
//  UseRowStateRowProps,
//  UseRowStateState,
//  UseSortByColumnOptions,
    UseSortByColumnProps,
//  UseSortByHooks,
    UseSortByInstanceProps,
//  UseSortByOptions,
    UseSortByState
} from 'react-table'

declare module 'react-table' {
//   export interface TableOptions<D extends Record<string, unknown>>
//     extends UseExpandedOptions<D>,
//       UseFiltersOptions<D>,
//       UseGlobalFiltersOptions<D>,
//       UseGroupByOptions<D>,
//       UsePaginationOptions<D>,
//       UseResizeColumnsOptions<D>,
//       UseRowSelectOptions<D>,
//       UseRowStateOptions<D>,
//       UseSortByOptions<D>,
//       // note that having Record here allows you to add anything to the options, this matches the spirit of the
//       // underlying js library, but might be cleaner if it's replaced by a more specific type that matches your
//       // feature set, this is a safe default.
//       Record<string, any> {}

//   export interface Hooks<D extends Record<string, unknown> = Record<string, unknown>>
//     extends UseExpandedHooks<D>,
//       UseGroupByHooks<D>,
//       UseRowSelectHooks<D>,
//       UseSortByHooks<D> {}

  export interface TableInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseGlobalFiltersInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseFiltersInstanceProps<D>,
      UseSortByInstanceProps<D> {}
//    UseColumnOrderInstanceProps<D>,
//    UseExpandedInstanceProps<D>,
//    UseGroupByInstanceProps<D>,
//    UseRowSelectInstanceProps<D>,
//    UseRowStateInstanceProps<D>,
      

  export interface TableState<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseGlobalFiltersState<D>,
      UsePaginationState<D>,
      UseSortByState<D> {}
//    UseColumnOrderState<D>,
//    UseExpandedState<D>,
//    UseFiltersState<D>,
//    UseGroupByState<D>,
//    UseResizeColumnsState<D>,
//    UseRowSelectState<D>,
//    UseRowStateState<D>,

//   export interface ColumnInterface<D extends Record<string, unknown> = Record<string, unknown>>
//     extends UseFiltersColumnOptions<D>,
//       UseGlobalFiltersColumnOptions<D>,
//       UseGroupByColumnOptions<D>,
//       UseResizeColumnsColumnOptions<D>,
//       UseSortByColumnOptions<D> {}

  export interface ColumnInstance<D extends Record<string, unknown> = Record<string, unknown>>
    extends UseSortByColumnProps<D> {}
//    UseFiltersColumnProps<D>,
//    UseGroupByColumnProps<D>,
//    UseResizeColumnsColumnProps<D>
      

//   export interface Cell<D extends Record<string, unknown> = Record<string, unknown>, V = any>
//     extends UseGroupByCellProps<D>,
//       UseRowStateCellProps<D> {}

//   export interface Row<D extends Record<string, unknown> = Record<string, unknown>>
//     extends UseExpandedRowProps<D>,
//       UseGroupByRowProps<D>,
//       UseRowSelectRowProps<D>,
//       UseRowStateRowProps<D> {}
}