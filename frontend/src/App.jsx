import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import UserList from "../components/UserList";
import { useState } from "react";

// Componente para manejar la protección de rutas
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route {...rest} element={token ? <Element /> : <Navigate to="/login" />} />
  );
};

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
