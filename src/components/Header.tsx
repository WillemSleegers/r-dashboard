import { useState } from "react"

import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="d-flex flex-column flex-md-row">
      <Navbar open={open} setOpen={setOpen} />
      <Sidebar open={open} />
    </div>
  )
}

export default Header
