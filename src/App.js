import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/home";
import RegisterStudent from "./pages/registerStudents";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register-student" element={<RegisterStudent />} />
      </Routes>
    </div>
  );
}

export default App;
