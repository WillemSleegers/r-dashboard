import dashboard from "../assets/img/dashboard.svg"

const Brand = () => {
  return (
    <div className="brand d-flex align-items-center gap-2">
      <img src={dashboard} alt="Brand logo" />
      Dashboard
    </div>
  )
}

export default Brand
