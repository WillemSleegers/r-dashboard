import Collapse from "react-bootstrap/Collapse"
import { Link } from "react-router-dom"
import Brand from "./Brand"

import "./Navbar.css"

type NavbarProps = {
  title: string
  logo: string
  links: { name: string; path: string }[]
  sidebarOpen: boolean
  setSidebarOpen: Function
  navbarOpen: boolean
  setNavbarOpen: Function
  toggled: boolean
  setToggled: Function
}

const Navbar = ({
  title,
  logo,
  links,
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
            <Brand title={title} logo={logo} />
          </div>
        </Collapse>
      </div>
      <Collapse in={navbarOpen}>
        <div>
          <nav className="nav nav-pills pb-1">
            {links.map((x) => {
              return (
                <Link className="nav-link" to={x.path}>
                  {x.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </Collapse>
    </div>
  )
}

export default Navbar
