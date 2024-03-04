import React from "react";
import { useAuth } from "../context/authContext";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-2xl font-bold">
        This is the <span className="text-indigo-500">Dashboard</span> Page
      </div>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  );
};

export default Dashboard;
