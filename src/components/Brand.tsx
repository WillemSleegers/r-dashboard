type BrandProps = {
  title: string
  logo: string
}

const Brand = ({ title, logo }: BrandProps) => {
  return (
    <div className="brand d-flex align-items-center gap-2">
      <img src={logo} alt="Brand logo" />
      {title}
    </div>
  )
}

export default Brand
