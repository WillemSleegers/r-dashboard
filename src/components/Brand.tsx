import dashboard from "../assets/img/dashboard.svg"

const Brand = () => {
  return (
    <div className="navbar-brand d-flex align-items-center gap-2 text-white">
      <img src={dashboard} alt="Brand logo" />
      Dashboard
    </div>
  )
}

export default Brand
