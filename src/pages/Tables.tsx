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
    <div className="w-100 p-3">
      <h1 className="mb-3">Tables</h1>
      <div className="w-100">
        <div className="w-100 card p-3">{data && <Table data={data} />}</div>
      </div>
    </div>
  )
}

export default PageTables
