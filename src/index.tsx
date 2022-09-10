import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

import App from "./components/App"

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
