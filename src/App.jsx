import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Mode from "./components/Mode";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="logout" element={<Logout />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="Profile" element={<Profile />} />
          <Route index element={<Profile />} />
          <Route path="mode" element={<Mode />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
