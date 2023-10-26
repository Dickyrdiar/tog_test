import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { LandingPage } from "./container"

const AppIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppIndex