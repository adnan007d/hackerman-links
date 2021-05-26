import { SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { useContext, useEffect, useState } from "react";
import LinksContext from "../context/LinksContext";

const Header = ({ handleChange }) => {
  const { user, setUser } = useContext(LinksContext);
  const router = useRouter();

  const handleLogout = () => {
    setUser(null);
    destroyCookie(null, "user");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center p-2 w-full bg-white border-b justify-between">
      <div className="flex items-center bg-gray-200 rounded-full shadow-md px-2 py-1 w-3/4 max-w-lg">
        <SearchIcon className="h-8 mr-2 text-gray-400" />
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      <div>
        {user ? (
          <div className="flex space-x-2 items-center">
            <span className="hidden md:inline-flex font-extrabold">{user}</span>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={handleLogin} className="btn">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
