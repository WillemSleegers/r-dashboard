import { Link } from "react-router-dom"
import Collapse from "react-bootstrap/Collapse"

import Brand from "./Brand"

import "./Sidebar.css"

type SidebarProps = {
  open: boolean
}

const Sidebar = ({ open }: SidebarProps) => {
  return (
    <Collapse in={open} dimension="width">
      <div id="sidebar" className="shadow">
        <div id="sidebar-content">
          <div className="p-3 fs-3">
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
            <Link className="nav-link text-white" to="/page4">
              Links
            </Link>
          </nav>
        </div>
      </div>
    </Collapse>
  )
}

export default Sidebar
