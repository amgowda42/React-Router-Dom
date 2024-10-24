import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <h1>Sidebar</h1>
      <ul>
        <Link to="profile">
          <li>profile</li>
        </Link>
        <Link to="mode">
          <li>mode</li>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
};

export default Sidebar;
