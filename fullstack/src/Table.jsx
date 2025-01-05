import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Table() {
  const data = [
    {
      id: 1,
      name: "Moulee",
      age: 19,
      email: "moulee@gmail.com",
      role: "Fullstack Developer",
    },
    {
      id: 2,
      name: "Mithra",
      age: 19,
      email: "mithra@gmail.com",
      role: "Fullstack Developer",
    },
    {
      id: 3,
      name: "Moulee",
      age: 19,
      email: "moulee@gmail.com",
      role: "Fullstack Developer",
    },
    {
      id: 4,
      name: "Mithra",
      age: 19,
      email: "mithra@gmail.com",
      role: "Fullstack Developer",
    },
  ];

  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    if (a[sortColumn] < b[sortColumn]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="w-full overflow-auto p-4">
      <form className="flex items-center w-full mx-auto py-4">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="simple-search"
          className="bg-white border border-gray-300 text-gray-900  focus:ring-red-950 focus:ring-1 outline-none text-sm rounded-lg flex-1 ps-3 p-2.5"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <table className="border border-gray-400 w-full text-left">
        <thead>
          <tr>
            <th
              className="border border-gray-400 cursor-pointer"
              onClick={() => handleSort("id")}
            >
              Id{" "}
              {sortColumn === "id" ? (
                sortOrder === "asc" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )
              ) : (
                ""
              )}
            </th>
            <th
              className="border border-gray-400 cursor-pointer items-center justify-evenly text-wrap"
              onClick={() => handleSort("name")}
            >
              Name{" "}
              {sortColumn === "name" ? (
                sortOrder === "asc" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )
              ) : (
                ""
              )}
            </th>
            <th className="border border-gray-400">Age</th>
            <th className="border border-gray-400">Email</th>
            <th className="border border-gray-400">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-400 px-4">{item.id}</td>
                <td className="border border-gray-400 px-4">{item.name}</td>
                <td className="border border-gray-400 px-4">{item.age}</td>
                <td className="border border-gray-400 px-4">{item.email}</td>
                <td className="border border-gray-400 px-4">{item.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="border border-gray-400 text-center px-4"
                colSpan="5"
              >
                No matching results
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
