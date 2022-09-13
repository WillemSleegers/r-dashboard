import { Link } from "react-router-dom"
import Collapse from "react-bootstrap/Collapse"

import Brand from "./Brand"

import "./Sidebar.css"

type SidebarProps = {
  title: string
  logo: string
  links: { name: string; path: string }[]
  open: boolean
}

const Sidebar = ({ title, logo, links, open }: SidebarProps) => {
  return (
    <Collapse in={open} dimension="width">
      <div id="sidebar" className="shadow">
        <div id="sidebar-content">
          <div className="p-3 fs-3">
            <Brand title={title} logo={logo} />
          </div>
          <nav className="nav nav-pills flex-column p-2">
            {links.map((x) => {
              return (
                <Link className="nav-link" to={x.path}>
                  {x.name}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </Collapse>
  )
}

export default Sidebar
