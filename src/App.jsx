import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";
import Register from "./pages/Register";
import Header from "./components/Header";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import { Table } from "./components/Table";
import { useAuth } from "./context/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import VulnDetails from "./pages/VulnDetails";
import { CustomTable } from "./components/CTable";
import Analytics from "./pages/Analytics";

const App = () => {
  const [auth, setAuth] = useAuth();

  const isAuthenticated = auth.user !== null && auth.user !== undefined;
  // const isAuthenticated = !!auth.user;
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route
          path="/about"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <About />
            </ProtectedRoute>
          }
        /> */}

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/about" element={<About />} />
          {/* <Route path="/vulnerablity" element={<Table />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vulnerablity" element={<Table />} />
        <Route path="/ctable" element={<CustomTable />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/vulnerablity/:id" element={<VulnDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
