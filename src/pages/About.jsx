import axios from "axios";
import React, { useState } from "react";

const About = () => {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    try {
      const base_url = "https://precogs-vuln-db-uvq3.vercel.app/api/v1";
      const res = await axios.get(`${base_url}/profile`);
      setUser(res.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }, [user]);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className=" text-2xl font-bold">
        This is the <span className="text-indigo-500">About us</span> Page
      </div>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </div>
  );
};

export default About;
