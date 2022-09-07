import { useState } from "react"
import get from "axios"

const PageMath = () => {
  const [number, setNumber] = useState()

  const onePlusOne = async () => {
    const apiURL = process.env.REACT_APP_PUBLIC_URL
    const response = await get(apiURL + "math/two")

    setNumber(response.data[0])
  }

  return (
    <div className="p-3">
      <h1 className="mb-3">Math</h1>
      <p>How much is 1 + 1?</p>
      <button className="btn btn-primary mb-3" onClick={onePlusOne}>
        Let's find out
      </button>
      {number && <p>The answer is: {number}</p>}
    </div>
  )
}

export default PageMath
