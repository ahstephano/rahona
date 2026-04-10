import { Routes, Route } from "react-router"
import WelcomePage from "./pages/_welcome/WelcomePage"
import LogInPage from "./pages/_login/LogInPage"
import SignUpPage from "./pages/_signup/SignUpPage"
import NotFound from "./pages/NotFoundPage"
import CreateUserPage from "./pages/_signup/CreateUserPage"

function App() {
  return (
    <div className="text-base">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/createuser" element={<CreateUserPage />} />
        {/* Inexistant page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
