// import React from "react";
// import axios from "axios";
// import SimplePagination from "./Pagination";
// import Loader from "./Loader";

// export function CustomTable() {
//   const [data, setData] = React.useState([]);
//   const [currentPage, setCurrentPage] = React.useState(1);
//   const [totalPages, setTotalPages] = React.useState(500);
//   const [loading, setLoading] = React.useState(false);
//   const [inputPage, setInputPage] = React.useState("");

//   const fetchData = async (page) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
//       );
//       setData(response.data);
//       // setTotalPages(Math.ceil(response.headers["x-total-count"] / 5));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   React.useEffect(() => {
//     fetchData(1);
//   }, []);

//   const onPageChange = (page) => {
//     setCurrentPage(page);
//     fetchData(page);
//   };

//   const handleInputChange = (e) => {
//     setInputPage(e.target.value);
//   };

//   const handleGoToPage = () => {
//     const page = parseInt(inputPage, 10);
//     if (!isNaN(page) && page >= 1 && page <= totalPages) {
//       setCurrentPage(page); // Update the current page state
//       onPageChange(page); // Trigger the page change
//     }
//   };
//   const handleInputKeyPress = (e) => {
//     console.log("h", e.key);
//     if (e.key === "Enter") {
//       handleGoToPage();
//     }
//   };

//   console.log(currentPage);

//   return (
//     <div className="flex flex-col items-center justify-center mt-8">
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="overflow-x-auto w-full">
//           <table className="table-auto border-collapse w-full">
//             <thead>
//               <tr>
//                 <th className="border p-2">Id</th>
//                 <th className="border p-2">Title</th>
//                 <th className="border p-2">URL</th>
//                 <th className="border p-2">ThumbNail</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr key={item.id}>
//                   <td className="border p-2">{item.id}</td>
//                   <td className="border p-2">{item.title}</td>
//                   <td className="border p-2">{item.url}</td>
//                   <td className="border p-2">{item.thumbnailUrl}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       <div className="mt-8 flex flex-col md:flex-row items-center gap-3 justify-between">
//         <div className="mb-4 md:mb-0">
//           <SimplePagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={onPageChange}
//           />
//         </div>
//         <div className="flex items-center">
//           <input
//             type="number"
//             min="1"
//             max={totalPages}
//             placeholder="Page"
//             className="px-3 py-1 border rounded-md mr-2 border-black"
//             value={inputPage}
//             onChange={handleInputChange}
//             // onKeyPress={handleInputKeyPress}
//             onKeyDown={handleInputKeyPress}
//           />
//           <button
//             className="px-3 py-1 bg-black text-white rounded-md"
//             onClick={handleGoToPage}
//           >
//             Go
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import axios from "axios";
import SimplePagination from "./Pagination";
import Loader from "./Loader";
import debounce from "lodash.debounce";

export function CustomTable() {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(500);
  const [loading, setLoading] = React.useState(false);
  const [inputPage, setInputPage] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");

  const fetchData = async (page, searchTerm = "") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10&title_like=${searchTerm}`
      );
      setData(response.data);
      // setTotalPages(Math.ceil(response.headers["x-total-count"] / 5));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchData = React.useRef(
    debounce((page, searchTerm) => {
      fetchData(page, searchTerm);
    }, 300)
  ).current;

  React.useEffect(() => {
    fetchData(1);
  }, []);

  const onPageChange = (page) => {
    setCurrentPage(page);
    fetchData(page, searchTerm);
  };

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setCurrentPage(1); // Reset current page to 1 when searching
    debouncedFetchData(1, newSearchTerm); // Call debounced fetchData with new search term
  };

  const handleGoToPage = () => {
    const page = parseInt(inputPage, 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setCurrentPage(page); // Update the current page state
      fetchData(page, searchTerm); // Trigger the page change
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleGoToPage();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="w-full md:w-1/2 mb-4">
        <input
          type="text"
          placeholder="Search by title"
          className="px-3 py-1 border rounded-md w-full"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>
      {/* {loading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th className="border p-2">Id</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">URL</th>
                <th className="border p-2">ThumbNail</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.title}</td>
                  <td className="border p-2">{item.url}</td>
                  <td className="border p-2">{item.thumbnailUrl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
      {loading ? (
        <Loader />
      ) : data.length === 0 ? (
        <div
          style={{ width: "600px", height: "400px" }}
          className="flex items-center justify-center"
        >
          {/* Show table with fixed width and height in center */}
          <p
            className="text-gray-500 text-xl font-semibold"
            style={{ textAlign: "center" }}
          >
            Opps! No data Found
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th className="border p-2">Id</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">URL</th>
                <th className="border p-2">ThumbNail</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="border p-2">{item.id}</td>
                  <td className="border p-2">{item.title}</td>
                  <td className="border p-2">{item.url}</td>
                  <td className="border p-2">{item.thumbnailUrl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 flex flex-col md:flex-row items-center gap-3 justify-between">
        <div className="mb-4 md:mb-0">
          <SimplePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
        <div className="flex items-center">
          <input
            type="number"
            min="1"
            max={totalPages}
            placeholder="Page"
            className="px-3 py-1 border rounded-md mr-2 border-black"
            value={inputPage}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyPress}
          />
          <button
            className="px-3 py-1 bg-black text-white rounded-md"
            onClick={handleGoToPage}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
