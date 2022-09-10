import Brand from "./Brand"

import "./Navbar.css"

type NavbarProps = {
  open: boolean
  setOpen: Function
}

const Navbar = ({ open, setOpen }: NavbarProps) => {
  return (
    <div id="navbar" className="navbar navbar-dark navbar-md-expand p-3">
      <Brand />
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  )
}

export default Navbar
