import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

import PageGraphs from "../pages/Graphs"
import PageTables from "../pages/Tables"
import PageMath from "../pages/Math"
import PageLinks from "../pages/Links"

import dashboard from "../assets/img/dashboard.svg"

const Navigation = () => {
  const title = "Dashboard"
  const links = [
    { name: "Graphs", path: "/", element: <PageGraphs /> },
    { name: "Tables", path: "/page2", element: <PageTables /> },
    { name: "Math", path: "/page3", element: <PageMath /> },
    { name: "Links", path: "/page4", element: <PageLinks /> },
  ]

  const breakpoint = 768

  const [sidebarOpen, setSidebarOpen] = useState(
    window.innerWidth < breakpoint ? false : true
  )
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [toggled, setToggled] = useState(false)

  window.onresize = () => {
    if (window.innerWidth < breakpoint && !toggled) {
      setSidebarOpen(false)
    } else if (window.innerWidth >= breakpoint && navbarOpen) {
      setSidebarOpen(true)
    } else if (window.innerWidth >= breakpoint && !toggled) {
      setSidebarOpen(true)
    }

    if (window.innerWidth < breakpoint) setSidebarOpen(false)
    if (window.innerWidth >= breakpoint) setNavbarOpen(false)
  }

  return (
    <BrowserRouter>
      <div className="d-flex min-vh-100">
        <Sidebar
          title={title}
          logo={dashboard}
          links={links}
          open={sidebarOpen}
        />
        <div className="flex-grow-1 d-flex flex-column overflow-auto">
          <Navbar
            title={title}
            logo={dashboard}
            links={links}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
            toggled={toggled}
            setToggled={setToggled}
          />
          <Routes>
            {links.map((x) => {
              return <Route path={x.path} element={x.element} />
            })}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Navigation
