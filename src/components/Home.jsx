import { useNavigate } from "react-router-dom";

useNavigate;

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-slate-500">
      home
      <div className="w-full h-14 ">
        <h1 className="text-lg text-red-900">Hello</h1>
        <h2 className="text-lg text-rose-600">Everyone</h2>
      </div>
      <button
        className="bg-slate-500"
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Click here
      </button>
    </div>
  );
};

export default Home;
