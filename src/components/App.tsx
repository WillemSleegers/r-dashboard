import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

import PageGraphs from "../pages/Graphs"
import PageTables from "../pages/Tables"
import PageMath from "../pages/Math"
import PageLinks from "../pages/Links"

const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column flex-md-row">
        <div className="d-flex flex-row vw-100">
          <Sidebar open={open} />
          <div className="flex-grow-1 d-flex flex-column">
            <Navbar open={open} setOpen={setOpen} />
            <Routes>
              <Route path="/" element={<PageGraphs />} />
              <Route path="/page2" element={<PageTables />} />
              <Route path="/page3" element={<PageMath />} />
              <Route path="/page4" element={<PageLinks />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Navigation
