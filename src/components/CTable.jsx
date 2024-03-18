// import React from "react";
// import axios from "axios";
// import SimplePagination from "./Pagination";

// export function CustomTable() {
//   const [data, setData] = React.useState([]);
//   const [totalPages, setTotalPages] = React.useState(10);

//   const fetchData = async (page) => {
//     try {
//       const Base_URL =
//         "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=2";
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
//       );
//       console.log(response);
//       setData(response.data); // Assuming the API returns results as an array
//       //   setTotalPages(response.data.total_pages);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   React.useEffect(() => {
//     fetchData(1);
//   }, []);

//   const onPageChange = (page) => {
//     fetchData(page);
//   };

//   console.log(data);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Title</th>
//             <th>Body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.title}</td>
//               <td>{item.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <SimplePagination
//         data={data}
//         totalPages={totalPages}
//         onPageChange={onPageChange}
//       />
//     </div>
//   );
// }

import React from "react";
import axios from "axios";
import SimplePagination from "./Pagination";
import Loader from "./Loader";

export function CustomTable() {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(500);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      );
      setData(response.data);
      //   setTotalPages(Math.ceil(response.headers["x-total-count"] / 5));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData(1);
  }, []);

  const onPageChange = (page) => {
    setCurrentPage(page);
    fetchData(page);
  };

  console.log(data.length);

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      {loading ? (
        <Loader />
      ) : (
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
      )}
      <div className="mt-8 ">
        <SimplePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
