# 🔁 React Router DOM Session Routing Example

This repository demonstrates how to build a **structured, session-based routing system** using **React Router DOM (v6)**. It focuses on practical routing concepts including layouts, nesting, redirects and relative paths.

---

## 🚀 Features Covered

- ✅ React Router DOM (v6)
- ✅ Outlet-based layout structure
- ✅ Nesting Routes and Index Routes
- ✅ `<Navigate />` for redirection
- ✅ `useNavigate()` for programmatic navigation
- ✅ Absolute vs Relative Links
- ✅ Session-based routing and authentication guard pattern
- ✅ Organized and scalable route structure

// File: src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import appRouter from "./router/AppRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);


// File: src/router/AppRouter.jsx
import { createBrowserRouter } from "react-router";
import { routes } from "./routes.config";

const appRouter = createBrowserRouter(routes);
export default appRouter;


// File: src/router/routes.config.js
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";
import GuestRoute from "./GuestRoute";

export const routes = [
  {
    path: "/",
    element: <ProtectedRoute><MainLayout /></ProtectedRoute>,
    children: [
      { path: "/", element: <Dashboard /> },
    ],
  },
  {
    path: "/auth",
    element: <GuestRoute><AuthLayout /></GuestRoute>,
    children: [
      { path: "login", element: <Login /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];


// File: src/router/ProtectedRoute.jsx
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with real auth logic
  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;


// File: src/router/GuestRoute.jsx
import { Navigate } from "react-router";

const GuestRoute = ({ children }) => {
  const isAuthenticated = false; // Replace with real auth logic
  return !isAuthenticated ? children : <Navigate to="/" />;
};

export default GuestRoute;


// File: src/router/NotFound.jsx
const NotFound = () => <div className="text-center p-10">404 - Page Not Found</div>;

export default NotFound;


// File: src/layouts/MainLayout.jsx
import { Outlet } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;


// File: src/layouts/AuthLayout.jsx
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;


// File: src/layouts/components/Header.jsx
const Header = () => {
  return (
    <header className="h-16 shadow bg-white flex items-center justify-between px-4">
      <h1 className="text-xl font-bold">My App</h1>
      <div>User Menu</div>
    </header>
  );
};

export default Header;


// File: src/layouts/components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <nav className="space-y-2">
        <Link to="/" className="block">Dashboard</Link>
        <Link to="/projects" className="block">Projects</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;


// File: src/pages/Dashboard.jsx
const Dashboard = () => {
  return <div className="text-2xl">Welcome to the Dashboard</div>;
};

export default Dashboard;


// File: src/pages/Login.jsx
const Login = () => {
  return (
    <form className="space-y-4">
      <input type="email" placeholder="Email" className="input input-bordered w-full" />
      <input type="password" placeholder="Password" className="input input-bordered w-full" />
      <button type="submit" className="btn btn-primary w-full">Login</button>
    </form>
  );
};

export default Login;


layouts/
├── MainLayout.jsx            # Layout for authenticated user dashboard (sidebar + header + outlet)
├── AuthLayout.jsx            # Layout for login/register pages (centered form view)
├── AdminLayout.jsx           # (Optional) Layout for admin-specific routes
├── PublicLayout.jsx          # (Optional) Layout for public pages (landing, about)
├── index.js                  # Optional: re-exports all layouts for easy import

└── components/               # Shared layout components (used inside layouts)
    ├── Header.jsx            # Top navigation bar
    ├── Sidebar.jsx           # Sidebar navigation
    ├── Footer.jsx            # Page footer (if needed)
    └── Topbar.jsx            # Optional topbar for mobile screens


frontend/
├── public/
│   └── index.html
│
├── src/
│   ├── assets/              # Static files, images
│   ├── components/          # Reusable UI components
│   ├── features/            # RTK Query + Redux logic
│   │   ├── auth/            # Example feature
│   │   │   ├── authSlice.js
│   │   │   ├── authApi.js
│   │   │   └── components/  # Feature-specific UI
│   │   └── ...              # More features
│   │
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Page layouts
│   ├── lib/                 # Utilities (Axios config, etc.)
│   ├── pages/               # Route-level pages
│   ├── router/              # React Router config
│   ├── store/               # Redux store setup
│   │   └── index.js
│   ├── styles/              # Global styles / Tailwind config
│   ├── ui/                  # shadcn/ui components
│   ├── App.jsx
│   └── main.jsx
│
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .env
├── .gitignore
└── package.json

