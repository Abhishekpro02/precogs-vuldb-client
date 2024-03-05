import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!auth.user) {
      setAuth({
        user: null,
        token: "",
      });
      // Redirect to the login page
      history.push("/login");
    }
  }, [auth, setAuth, history]);

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
