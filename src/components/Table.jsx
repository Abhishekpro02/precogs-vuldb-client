import { ClockIcon, EyeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { CSVLink } from "react-csv";

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
    name: "CVE-2022-9013",
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
    name: "CVE-2022-9013",
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
    name: "CVE-2022-9013",
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
    name: "CVE-2022-9013",
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

  const handleOpen = () => setOpen(!open);
  return (
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
      <CardBody className="overflow-scroll px-0 mx-1 border-2 ">
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
                  <tr key={name}>
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
      </CardBody>

      {/* modal  */}
      <div className="modal">
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader
            size="sm"
            className="flex justify-between items-center border-b-2 border-gray-200 p-4"
          >
            <h1 className="text-2xl font-bold text-blue-gray-900">
              This is head
            </h1>
            <IconButton onClick={handleOpen} aria-label="Close">
              {/* <CloseIcon className="w-6 h-6" /> */}x
            </IconButton>
          </DialogHeader>
          <DialogBody>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-red-500">
                  CVE-2022-9013
                </h1>
                <h1 className="text-xl font-bold text-green-500">CWE-202</h1>
                <p className="text-gray-500">Wed 3:30am</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-white mr-4">
                  9.5
                </div>
                <p className="text-gray-500">critical</p>
              </div>
            </div>
            <div className="mt-4">
              <p>This is a description of CVE-2022-9013</p>
            </div>
          </DialogBody>

          <DialogFooter className="flex justify-center">
            <Link to="/">
              <Button variant="text" color="red" onClick={handleOpen}>
                <span>Full Details</span>
              </Button>
            </Link>
          </DialogFooter>
        </Dialog>
      </div>
    </Card>
  );
}
