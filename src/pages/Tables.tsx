import { useEffect, useState } from "react"
import get from "axios"

import Table from "../components/Table"

const PageTables = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const apiURL = process.env.REACT_APP_PUBLIC_URL
      const response = await get(apiURL + "iris/data")

      setData(response.data)
    }

    fetchData()
  }, [])

  return (
    <div className="p-3 w-100 overflow-auto">
      <h1 className="mb-3">Tables</h1>
      <div className="">
        <div className="card p-2 w-100">{data && <Table data={data} />}</div>
      </div>
    </div>
  )
}

export default PageTables
