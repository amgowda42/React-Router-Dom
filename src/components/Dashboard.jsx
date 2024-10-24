import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-red">DashBoard</h1>
      <Sidebar />
      <button
        className="text-lg text-violet-400 bg-lime-200 w-auto"
        onClick={() => {
          navigate("/home");
        }}
      >
        Click here to go home
      </button>
    </div>
  );
};

export default Dashboard;
