import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/react.svg";

function Header() {
  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <div className="flex flex-wrap justify-between items-center">
              <Link to="/" className="flex items-center">
              <img
                    className="w-20 h-20 rounded-full"
                    src={Logo}
                    alt="Big Bang"
                />
              </Link>
            <ul className="flex flex-col p-4 md:p-10 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Link to="/userlist" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">User List</Link>
                </li>
                <li>
                    <Link to="/counter" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Counter</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>

  );
}

export default Header;
