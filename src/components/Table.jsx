import { ClockIcon, EyeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { CSVLink } from "react-csv";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

import {
  //   Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SimplePagination from "./Pagination";

const TABLE_HEAD = [
  "CVE ID",
  "CWE ID",
  "Score",
  "Date",
  "Saverity",
  "Description",
  "Preview",
];

const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "CVE-2022-9013",
    cwe: "CWE-123",
    amount: "7.5",
    date: "Wed 3:00pm",
    saverity: "high",
    account: "This is a description of CVE-2022-9013",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "CVE-2022-9014",
    cwe: "CWE-123",
    amount: "5",
    date: "Wed 1:00pm",
    saverity: "medium",
    account: "This is a description of CVE-2022-9013",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "CVE-2022-9015",
    cwe: "CWE-123",
    amount: "3.5",
    date: "Mon 7:40pm",
    saverity: "low",
    account: "This is a description of CVE-2022-9013",
    accountNumber: "1234",
    expiry: "06/2026",
  },

  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "CVE-2022-9016",
    cwe: "CWE-123",
    amount: "7",
    date: "Wed 5:00pm",
    saverity: "high",
    account: "This is a description of CVE-2022-9013",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "CVE-2022-9017",
    cwe: "CWE-123",
    amount: "9.5",
    date: "Wed 3:30am",
    saverity: "critical",
    account: "This is a description of CVE-2022-9013",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

export function Table() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (name) => {
    setSelected(name);

    setOpen(!open);
  };
  console.log(selected?.name);
  const score = 7.5;

  return (
    <div className="mx-auto max-w-7xl p-4 bg-white rounded-lg shadow-lg ">
      <Card className="h-full w-full rounded-none mt-2 pt-2 shadow-white">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="sm:text-center ">
              <Typography
                variant="span"
                color="blue-gray"
                className="text-purple-500 uppercase text-center"
              >
                All Vulnarablities
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5 pt-5" />}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />
                <CSVLink
                  data={TABLE_ROWS}
                  filename={"vulnarablities.csv"}
                  className="flex items-center gap-3"
                >
                  CSV
                </CSVLink>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0 mx-1 ">
          <table className="w-full min-w-max table-auto text-left ">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  {
                    img,
                    name,
                    cwe,
                    amount,
                    date,
                    saverity,
                    account,
                    accountNumber,
                    expiry,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr
                      key={name}
                      className="cursor-pointer hover:bg-blue-gray-50"
                      onClick={() => {
                        handleOpen({
                          img,
                          name,
                          cwe,
                          amount,
                          date,
                          saverity,
                          account,
                          accountNumber,
                          expiry,
                        });
                      }}
                    >
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          {/* <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        /> */}
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          {/* <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        /> */}
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {cwe}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {amount}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={saverity}
                            color={
                              saverity === "critical"
                                ? "red"
                                : saverity === "high"
                                ? "orange"
                                : saverity === "medium"
                                ? "yellow"
                                : "green"
                            }
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          {/* <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                          <Avatar
                            src={
                              account === "visa"
                                ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                            }
                            size="sm"
                            alt={account}
                            variant="square"
                            className="h-full w-full object-contain p-1"
                          />
                        </div> */}
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {account}
                              {/* {accountNumber} */}
                            </Typography>
                            {/* <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {expiry}
                          </Typography> */}
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        {/* <Tooltip content="View"></Tooltip> */}
                        <IconButton variant="text" onClick={handleOpen}>
                          <EyeIcon className="h-4 w-4" />
                        </IconButton>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          {/* pagination here */}
          <div className="flex justify-center mt-8">
            <SimplePagination />
          </div>
          {/* modal  */}

          <div className="modal">
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader
                size="sm"
                className="flex justify-between items-center border-b-2 border-gray-200 p-4"
              >
                <h1 className="text-2xl font-bold text-blue-gray-900">
                  {selected?.name}
                </h1>
                <IconButton onClick={handleOpen} aria-label="Close">
                  {/* <CloseIcon className="w-6 h-6" /> */}x
                </IconButton>
              </DialogHeader>
              <DialogBody>
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl font-bold text-red-500">{}</h1>
                    <h1 className="text-xl font-bold text-green-500">
                      CWE-202
                    </h1>
                    <p className="text-gray-500">Wed 3:30am</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div style={{ width: 60, height: 60 }}>
                      <CircularProgressbar
                        value={score * 10} // Convert score to percentage
                        text={score.toFixed(1)} // Display score with one decimal point
                        styles={{
                          path: {
                            // Path color
                            stroke: `#f56565`,
                          },
                          trail: {
                            // Trail color
                            stroke: "#f3f3f3",
                          },
                          text: {
                            // Text color
                            fill: "#565656",
                            fontSize: "24px",
                            fontWeight: "bold",
                          },
                        }}
                      />
                    </div>
                    <p className="text-gray-500 text-2xl">critical</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p>This is a description of {selected?.name}</p>
                </div>
              </DialogBody>

              <DialogFooter className="flex justify-center">
                <Link to={`/vulnerablity/${selected?.name}`}>
                  <Button variant="text" color="red" onClick={handleOpen}>
                    <span>Full Details</span>
                  </Button>
                </Link>
              </DialogFooter>
            </Dialog>
          </div>
        </CardBody>

        {/* modal  */}
      </Card>
    </div>
  );
}
