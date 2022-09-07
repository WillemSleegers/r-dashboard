import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/Header"
import PageGraphs from "./pages/Graphs"
import PageTables from "./pages/Tables"
import PageMath from "./pages/Math"

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-vh-100 d-flex flex-column flex-md-row">
        <Header />
        <Routes>
          <Route path="/" element={<PageGraphs />} />
          <Route path="/page2" element={<PageTables />} />
          <Route path="/page3" element={<PageMath />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
)
