import { Routes, Route } from "react-router"
import WelcomePage from "./pages/WelcomePage"
import LogInPage from "./pages/LogInPage"
import SignUpPage from "./pages/SignUpPage"

function App() {
  return (
    <div className="text-base">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  )
}

export default App
