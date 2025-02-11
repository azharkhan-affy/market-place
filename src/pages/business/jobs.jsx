import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import axios from "axios";
import { toast } from "../../hooks/use-toast";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { SingleJobs } from "../get-all-jobs";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy Data (Fallback)

  // Fetch Jobs Function
  const fetchJobs = async () => {
    try {
      const response = await axios.get("business/get-all-jobs", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response);
      setJobs(response?.data?.meta); // Assuming API returns an array
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast({
        variant: "destructive",
        title: "Error fetching jobs",
        description: "Error fetching jobs or network error: " + error.message,
      });
      //   setJobs(dummyJobs); // Use dummy data if API fails
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="bg-primary-600">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 space-y-4">
        {jobs.map((jobData, index) => {
          return <SingleJobs jobData={jobData} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Jobs;

const JobDetailsCard = ({ jobData }) => {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800">
          {jobData.job_title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {" "}
        <div className="space-y-4">
          {" "}
          <div className="grid grid-cols-2 gap-4">
            {" "}
            <div className="text-sm">
              {" "}
              <span className="font-medium text-gray-600">Status:</span>{" "}
              <p className="text-gray-900 capitalize">{jobData.status}</p>{" "}
            </div>{" "}
            <div className="text-sm">
              {" "}
              <span className="font-medium text-gray-600">Paid:</span>{" "}
              <p className="text-gray-900">
                {" "}
                {jobData.is_paid ? "Yes" : "No"}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="text-sm">
            {" "}
            <span className="font-medium text-gray-600">Description:</span>{" "}
            <p className="text-gray-900">{jobData.description}</p>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 gap-4">
            {" "}
            <div className="text-sm">
              {" "}
              <span className="font-medium text-gray-600">
                Start Date:
              </span>{" "}
              <p className="text-gray-900">
                {" "}
                {new Date(jobData.start_date).toLocaleDateString()}{" "}
              </p>{" "}
            </div>{" "}
            <div className="text-sm">
              {" "}
              <span className="font-medium text-gray-600">End Date:</span>{" "}
              <p className="text-gray-900">
                {" "}
                {new Date(jobData.end_date).toLocaleDateString()}{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className="text-sm">
            {" "}
            <span className="font-medium text-gray-600">Payment:</span>{" "}
            <p className="text-gray-900">
              {" "}
              ${jobData.payment_amount.toLocaleString()}{" "}
            </p>{" "}
          </div>{" "}
          <div className="text-sm">
            {" "}
            <span className="font-medium text-gray-600">Created By:</span>{" "}
            <p className="text-gray-900">{jobData.created_by}</p>{" "}
          </div>{" "}
        </div>{" "}
      </CardContent>{" "}
    </Card>
  );
};
