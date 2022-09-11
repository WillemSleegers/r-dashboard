import { useState, useEffect, BaseSyntheticEvent } from "react"
import get from "axios"
import debounce from "lodash.debounce"

import Plot from "react-plotly.js"
import { Data } from "plotly.js"

const PageGraphs = () => {
  const [histData, setHistData] = useState<Data[]>()
  const [histBins, setHistBins] = useState("25")
  const [histColor, setHistColor] = useState("#24A9D6")
  const [scatterData, setScatterData] = useState<Data[]>()
  const [faithfulNames, setFaithfulNames] = useState<string[]>()
  const [faithfulName, setFaithfulName] = useState("eruptions")

  // Get the faithful data for the scatter plot and
  // to extract the names in the data frame
  useEffect(() => {
    const fetchFaithfulData = async () => {
      const apiURL = process.env.REACT_APP_PUBLIC_URL
      const response = await get(apiURL + "faithful/data")

      const data = {
        x: response.data.map((x: { waiting: number }) => x.waiting),
        y: response.data.map((x: { eruptions: number }) => x.eruptions),
      }

      setScatterData([
        {
          x: data.x,
          y: data.y,
          mode: "markers",
          marker: { color: "#24A9D6" },
          type: "scatter",
        },
      ])
      setFaithfulNames(Object.keys(response.data[0]))
    }

    fetchFaithfulData()
  }, [])

  useEffect(() => {
    const updateHistData = async (column: string, bins: string) => {
      const apiURL = process.env.REACT_APP_PUBLIC_URL
      const response = await get(apiURL + "faithful/hist", {
        params: {
          column: column,
          bins: bins,
        },
      })

      const data = {
        x: response.data.map((x: { counts: number }) => x.counts),
        y: response.data.map((x: { mids: number }) => x.mids),
      }

      const color = histColor
      setHistData([
        {
          x: data.x,
          y: data.y,
          marker: { color: color },
          type: "bar",
        },
      ])
    }

    updateHistData(faithfulName, histBins)
  }, [faithfulName, histBins, histColor])

  const onSliderChange = async (event: BaseSyntheticEvent) => {
    setHistBins(event.target.value)
  }

  const onKeyChange = (event: BaseSyntheticEvent) => {
    setHistBins(event.target.value)
  }

  const handleColorChange = (event: BaseSyntheticEvent) => {
    setHistColor(event.target.value)
  }

  const onSelectChange = (event: BaseSyntheticEvent) => {
    setFaithfulName(event.target.value)
  }

  return (
    <div className="p-3">
      <h1>Graphs</h1>

      <div className="mb-3">
        <h2>Histogram</h2>
        <div className="d-flex flex-column flex-lg-row gap-3">
          <div className="card flex-grow-1" style={{ height: "480px" }}>
            <div className="card-body overflow-hidden">
              <Plot
                className="w-100"
                data={histData!}
                layout={{
                  title: "Histogram of " + faithfulName,
                  bargap: 0.01,
                  autosize: false,
                  xaxis: {
                    title:
                      faithfulName === "eruptions"
                        ? "Eruption time in mins"
                        : "Waiting time to next eruption (in mins)",
                  },
                  yaxis: {
                    title: "Frequency",
                  },
                }}
                config={{ responsive: true }}
              />
            </div>
          </div>
          <div className="card " style={{ maxWidth: "300px" }}>
            <div className="card-body">
              <h4>Controls</h4>
              <div>
                <label htmlFor="columnInput" className="form-label">
                  Select column:
                </label>
                {faithfulNames && (
                  <select
                    className="form-select"
                    id="columnInput"
                    onChange={onSelectChange}
                  >
                    {faithfulNames.map((name) => {
                      return (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      )
                    })}
                  </select>
                )}
              </div>
              <div className="mt-3">
                <label htmlFor="binsRange" className="form-label">
                  Number of bins:
                </label>
                <input
                  type="range"
                  id="binsRange"
                  className="form-range"
                  min="1"
                  max="100"
                  onChange={debounce(onSliderChange, 100)}
                ></input>
              </div>
              <div className="mt-2">
                <label htmlFor="binsText" className="form-label">
                  Number of bins:
                </label>
                <input
                  type="number"
                  id="binsText"
                  className="form-control"
                  value={histBins}
                  onChange={onKeyChange}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="colorInput" className="form-label">
                  Bar color:
                </label>
                <input
                  type="color"
                  id="colorInput"
                  className="form-control form-control-color"
                  value={histColor}
                  title="Choose your color"
                  onChange={handleColorChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Scatter plot</h2>
        <div className="d-flex flex-column flex-lg-row gap-3">
          <div className="card flex-grow-1" style={{ height: "480px" }}>
            <div className="card-body overflow-hidden">
              <Plot
                className="w-100"
                data={scatterData!}
                layout={{
                  title: "Scatter plot",
                  autosize: false,
                  xaxis: {
                    title: "Waiting time",
                  },
                  yaxis: {
                    title: "Eruption time",
                  },
                }}
                config={{ responsive: true }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageGraphs
