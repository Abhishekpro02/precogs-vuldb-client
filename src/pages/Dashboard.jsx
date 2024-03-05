import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useHistory } from "react-router-dom";
import UserCard from "./UserCard";

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
      <UserCard user={auth.user} />
    </div>
  );
};

export default Dashboard;
