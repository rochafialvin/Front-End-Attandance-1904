import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/home";
import RegisterStudent from "./pages/registerStudents";
import Attendance from "./pages/attendance";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attendances/:userId" element={<Attendance />} />
          <Route path="register-student" element={<RegisterStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
