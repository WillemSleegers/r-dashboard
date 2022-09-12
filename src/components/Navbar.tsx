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
    <div id="navbar" className="navbar navbar-dark flex-column">
      <div className="w-100 p-2 d-flex align-items-center justify-content-start gap-3 ">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            setToggled(!toggled)
            if (window.innerWidth >= 768) {
              setSidebarOpen(!sidebarOpen)
            }
            if (window.innerWidth < 768) {
              setNavbarOpen(!navbarOpen)
            }
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Collapse in={!sidebarOpen} dimension={"width"}>
          <div className="fs-5">
            <Brand />
          </div>
        </Collapse>
      </div>
      <Collapse in={navbarOpen}>
        <div>
          <nav className="nav nav-pills pb-1">
            <Link className="nav-link" to="/">
              Graphs
            </Link>
            <Link className="nav-link" to="/page2">
              Tables
            </Link>
            <Link className="nav-link" to="/page3">
              Math
            </Link>
            <Link className="nav-link" to="/page4">
              Links
            </Link>
          </nav>
        </div>
      </Collapse>
    </div>
  )
}

export default Navbar
