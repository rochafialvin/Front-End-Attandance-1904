import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/home";
import RegisterStudent from "./pages/registerStudents";
import Login from "./pages/login";
import { useDispatch } from "react-redux";

import { keepLoginAction } from './store/actions/index'

function App() {
  const [isStorageChecked, setIsStorageChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const usersLocalStorage = localStorage.getItem("userData");

    if (usersLocalStorage) {
      const userData = JSON.parse(usersLocalStorage)
      const { id, nis } = userData;
      dispatch(keepLoginAction({ id, nis }));
    }

    setIsStorageChecked(true);
  }, []);

  if (isStorageChecked) {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register-student" element={<RegisterStudent />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    )
  } else {
    return <h1>Loading...</h1>
  }
};

export default App;
