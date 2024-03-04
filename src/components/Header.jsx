import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
          style={({ isActive }) => (isActive ? { color: "blue" } : null)}
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/about"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
          style={({ isActive }) => (isActive ? { color: "blue" } : null)}
        >
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/vulnerablity"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
          style={({ isActive }) => (isActive ? { color: "blue" } : null)}
        >
          vulnerablity
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/dashboard"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
          style={({ isActive }) => (isActive ? { color: "blue" } : null)}
        >
          Dashboard
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/profile"
          className="flex items-center"
          onClick={() => setOpenNav(false)}
          style={({ isActive }) => (isActive ? { color: "blue" } : null)}
        >
          Profile
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-1 lg:px-8 lg:py-1">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          {/* <Typography
            as="h2"
            className="mr-4 cursor-pointer py-1.5 font-bold text-lg lg:mr-0 lg:py-0 lg:text-xl uppercase lg:cursor-auto"
          >
            Technical <span className="text-indigo-600">Abhi</span>
          </Typography> */}
          <h2 className="logo" data-text="Precogs.AI">
            Precogs.AI
          </h2>
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            {auth.user ? (
              <Button
                variant="text"
                size="sm"
                className="rounded-md"
                onClick={() => setAuth(null)}
              >
                <span>Sign Out</span>
              </Button>
            ) : (
              <Link to="/login">
                <Button
                  variant="text"
                  size="sm"
                  className="rounded-md"
                  onClick={() => setOpenNav(!openNav)}
                >
                  <span>Sign In</span>
                </Button>
              </Link>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        <div className="flex items-center gap-x-4 justify-center">
          <Link to="/login">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className="rounded-md"
              onClick={() => setOpenNav(!openNav)}
            >
              <span>Sign In</span>
            </Button>
          </Link>
          <Link to="/register">
            <Button
              fullWidth
              variant="gradient"
              size="md"
              className="rounded-md"
              onClick={() => setOpenNav(!openNav)}
            >
              <span>Sign up</span>
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
