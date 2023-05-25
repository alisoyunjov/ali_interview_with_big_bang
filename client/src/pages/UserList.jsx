import { useState, useEffect } from "react";
import Header from "./Header";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    fetch( import.meta.env.VITE_SERVER_URL + "/api/users/")
      .then((response) => response.json())
      .then((data) => setUsers(data['users']));
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li key={number}>
      <button
        className={currentPage === number ? "font-bold" : ""} 
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </button>
    </li>
  ));

  const handleUsersPerPageChange = (event) => {
    setUsersPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col min-h-screen">

        {/*  Site header */}
        <Header />
        
        <main className="flex-grow">
            <div className="flex flex-col items-center">
                <table className="table-auto border-collapse border border-gray-600 mt-8">
                    <thead>
                    <tr>
                        <th className="border border-gray-600 px-4 py-2">No.</th>
                        <th className="border border-gray-600 px-4 py-2">Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentUsers.map((user, index) => (
                        <tr key={user.id}>
                        <td className="border border-gray-600 px-4 py-2">{indexOfFirstUser + index + 1}</td>
                        <td className="border border-gray-600 px-4 py-2">{user.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            <div className="flex justify-between items-center w-full mt-8 mx-2">
                <div className="ml-6">
                    <p className="text-gray-600">
                        Showing {indexOfFirstUser + 1} to {indexOfLastUser} of {users.length} users
                    </p>
                </div>
                <div>
                    <label htmlFor="users-per-page" className="mr-4 text-gray-600">
                        Users per page:
                    </label>
                    <select
                        id="users-per-page"
                        className="bg-white border border-gray-600py-2 px-4 rounded-md shadow-sm text-sm font-medium text-gray-700 focus:outline-none"
                        value={usersPerPage}
                        onChange={handleUsersPerPageChange}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className="mr-8">
                    <ul className="flex space-x-2">
                        <li>
                        <button
                            className="py-2 px-3 border border-gray-600 rounded-l-md text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none"
                            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        </li>
                        {renderPageNumbers}
                        <li>
                        <button
                            className="py-2 px-3 border border-gray-600 rounded-r-md text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none"
                            onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                            disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                        >
                            Next
                        </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</div>
  );
};

export default UserList;
