import { formatDate } from "../../lib/formatDate";
import Title from "../../components/title";
import { Input } from "../../components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const res = await axios.get("admin/get/jobs", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(res);
      setJobs(res.data.meta);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <Title title={"All Jobs"} />
        <div className="hidden md:flex">
          <Input
            className="bg-white md:w-[280px]"
            placeholder="search jobs here"
          />
        </div>
      </div>

      <div className="p-2 bg-white shadow-md">
        <Table>
          <TableCaption>A list of your recent jobs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="md:w-[200px]"> Job Title</TableHead>
              <TableHead>payment amount</TableHead>{" "}
              <TableHead>start_date</TableHead>
              <TableHead>end_date</TableHead>
              <TableHead>status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs?.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">
                  <Link to={"/admin/all-job/" + invoice._id}>
                    {invoice.job_title || "N/A"}
                  </Link>
                </TableCell>
                <TableCell>{invoice.payment_amount}</TableCell>
                <TableCell> {formatDate(invoice.start_date)}</TableCell>
                <TableCell> {formatDate(invoice.end_date)}</TableCell>
                <TableCell>
                  <div
                    className={`px-2 w-fit py-1 text-white text-sm font-medium rounded-full 
                    ${invoice.status === "pending" ? "bg-yellow-500" : ""} 
                    ${invoice.status === "in_progress" ? "bg-blue-500" : ""} 
                    ${invoice.status === "completed" ? "bg-green-500" : ""}`}
                  >
                    {invoice.status.replace("_", " ")}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllJobs;
