const PageLinks = () => {
  return (
    <div className="p-3">
      <h1>Links</h1>
      <p>If you liked what you saw, you can find more information here:</p>
      <ul className="list-group">
        <li className="list-group-item">
          <a className="text-decoration-none" href="https://www.rplumber.io/">
            plumber
          </a>
        </li>
        <li className="list-group-item">
          <a
            className="text-decoration-none"
            href="https://www.rstudio.com/conference/2022/2022-conf-talks/"
          >
            Why Shiny kinds right now
          </a>
        </li>
        <li className="list-group-item">
          <a
            className="text-decoration-none"
            href="https://github.com/WillemSleegers/r-plumbing"
          >
            My R plumber API on GitHub
          </a>
        </li>
        <li className="list-group-item">
          <a
            className="text-decoration-none"
            href="https://github.com/WillemSleegers/r-dashboard"
          >
            My simple React dashboard using the R API
          </a>
        </li>
      </ul>
    </div>
  )
}

export default PageLinks
