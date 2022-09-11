import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

import PageGraphs from "../pages/Graphs"
import PageTables from "../pages/Tables"
import PageMath from "../pages/Math"
import PageLinks from "../pages/Links"

const Navigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(
    window.innerWidth < 768 ? false : true
  )
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [toggled, setToggled] = useState(false)

  window.onresize = () => {
    if (window.innerWidth < 768 && !toggled) {
      setSidebarOpen(false)
    } else if (window.innerWidth >= 768 && navbarOpen) {
      setSidebarOpen(true)
    } else if (window.innerWidth >= 768 && !toggled) {
      setSidebarOpen(true)
    }

    if (window.innerWidth < 768) setSidebarOpen(false)
    if (window.innerWidth >= 768) setNavbarOpen(false)
  }

  return (
    <BrowserRouter>
      <div className="d-flex flex-row min-vh-100 vw-100 overflow-hidden">
        <Sidebar open={sidebarOpen} />
        <div className="flex-grow-1 d-flex flex-column overflow-scroll">
          <Navbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
            toggled={toggled}
            setToggled={setToggled}
          />
          <Routes>
            <Route path="/" element={<PageGraphs />} />
            <Route path="/page2" element={<PageTables />} />
            <Route path="/page3" element={<PageMath />} />
            <Route path="/page4" element={<PageLinks />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Navigation
