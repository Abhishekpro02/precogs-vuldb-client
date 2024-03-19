import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Loader from "../components/Loader";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const base_url = "https://precogs-vuln-db-uvq3.vercel.app/api/v1";
        const res = await axios.get(`${base_url}/profile`, {
          withCredentials: true,
        });
        console.log(res);
        setUser(res.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error.response.data);
        // Handle error if needed
      } finally {
        setLoading(false); // Set loading to false when the request is completed
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  console.log(user);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 flex-col">
      <div className="text-2xl font-bold">
        This is the <span className="text-indigo-500">Profile</span> Page
      </div>
      {loading ? <Loader /> : <pre>{JSON.stringify(user, null, 4)}</pre>}
    </div>
  );
};

export default Profile;
