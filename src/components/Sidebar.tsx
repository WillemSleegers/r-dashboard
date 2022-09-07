import { Link } from "react-router-dom"
import Collapse from "react-bootstrap/Collapse"

import Brand from "./Brand"

import "./Sidebar.css"

type SidebarProps = {
  open: boolean
}

const Sidebar = ({ open }: SidebarProps) => {
  return (
    <Collapse in={open}>
      <div id="sidebar" className="d-md-block shadow">
        <div id="sidebar-content">
          <div className="d-none d-md-block">
            <Brand />
          </div>
          <nav className="nav nav-pills flex-column p-2">
            <Link className="nav-link text-white" to="/">
              Graphs
            </Link>
            <Link className="nav-link text-white" to="/page2">
              Tables
            </Link>
            <Link className="nav-link text-white" to="/page3">
              Math
            </Link>
          </nav>
        </div>
      </div>
    </Collapse>
  )
}

export default Sidebar
