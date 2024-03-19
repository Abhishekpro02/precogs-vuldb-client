// import React from "react";
// import { IconButton, Typography, Table } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
// import axios from "axios";

// const SimplePagination = ({ data, totalPages, onPageChange }) => {
//   const [active, setActive] = React.useState(1);

//   const next = () => {
//     if (active === totalPages) return;

//     setActive(active + 1);
//     onPageChange(active + 1);
//   };

//   const prev = () => {
//     if (active === 1) return;

//     setActive(active - 1);
//     onPageChange(active - 1);
//   };

//   return (
//     <div className="flex items-center gap-8">
//       <IconButton
//         size="sm"
//         variant="outlined"
//         onClick={prev}
//         disabled={active === 1}
//       >
//         <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
//       </IconButton>
//       <Typography color="gray" className="font-normal">
//         Page <strong className="text-gray-900">{active}</strong> of{" "}
//         <strong className="text-gray-900">{totalPages}</strong>
//       </Typography>
//       <IconButton
//         size="sm"
//         variant="outlined"
//         onClick={next}
//         disabled={active === totalPages}
//       >
//         <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
//       </IconButton>
//     </div>
//   );
// };

// export default SimplePagination;
import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const SimplePagination = ({ currentPage, totalPages, onPageChange }) => {
  const [active, setActive] = React.useState(currentPage);

  React.useEffect(() => {
    setActive(currentPage);
  }, [currentPage]);

  const next = () => {
    if (active === totalPages) return;

    const nextPage = active + 1;
    setActive(nextPage);
    onPageChange(nextPage);
  };

  const prev = () => {
    if (active === 1) return;

    const prevPage = active - 1;
    setActive(prevPage);
    onPageChange(prevPage);
  };

  return (
    <div className="flex items-center gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">{totalPages}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={active === totalPages}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
};

export default SimplePagination;
