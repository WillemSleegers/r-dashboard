import Collapse from "react-bootstrap/Collapse"
import { Link } from "react-router-dom"
import Brand from "./Brand"

import "./Navbar.css"

type NavbarProps = {
  sidebarOpen: boolean
  setSidebarOpen: Function
  navbarOpen: boolean
  setNavbarOpen: Function
  toggled: boolean
  setToggled: Function
}

const Navbar = ({
  sidebarOpen,
  setSidebarOpen,
  navbarOpen,
  setNavbarOpen,
  toggled,
  setToggled,
}: NavbarProps) => {
  return (
    <div
      id="navbar"
      className="navbar navbar-dark navbar-md-expand flex-column"
    >
      <div className="w-100 p-2 d-flex gap-3 justify-content-start">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            if (window.innerWidth >= 768) {
              setToggled(!toggled)
              setSidebarOpen(!sidebarOpen)
            }
            if (window.innerWidth < 768) {
              setNavbarOpen(!navbarOpen)
            }
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={toggled ? "" : "d-md-none"}>
          <Brand />
        </div>
      </div>
      <Collapse in={navbarOpen}>
        <div>
          <nav className="navbar-nav navbar-collapse nav-pills flex-row gap-3 p-2">
            <Link className="nav-link text-white p-0" to="/">
              Graphs
            </Link>
            <Link className="nav-link text-white p-0" to="/page2">
              Tables
            </Link>
            <Link className="nav-link text-white p-0" to="/page3">
              Math
            </Link>
            <Link className="nav-link text-white p-0" to="/page4">
              Links
            </Link>
          </nav>
        </div>
      </Collapse>
    </div>
  )
}

export default Navbar
