import LandingNavbar from "../components/landing-navbar";
import useFetchData from "../config/useFetchDat";

import { Card, CardContent, CardHeader } from "../components/ui/card";
import { formatDate } from "../lib/formatDate";
import {
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  IndianRupee,
  Users,
} from "lucide-react";
import { Button } from "../components/ui/button";

const GetAllJobs = () => {
  const {
    data: jobs,
    loading: loading,
    error: errror,
  } = useFetchData("get-all-jobs");
  return (
    <div className="bg-primary-600 min-h-screen">
      <LandingNavbar />
      <div className="max-w-6xl px-4 mx-auto pt-20 pb-8 space-y-4">
        {jobs?.map((jobData, index) => {
          console.log(jobData);
          return <SingleJobs key={index} jobData={jobData} />;
        })}
      </div>
    </div>
  );
};

export default GetAllJobs;

export const SingleJobs = ({ jobData }) => {
  const getStatusColor = (status) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      completed: "bg-green-100 text-green-800",
      active: "bg-blue-100 text-blue-800",
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-t-4 border-primary-600 overflow-hidden">
      <CardHeader className="bg-primary-900 text-white p-6 overflow-hidden">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-200">
              {jobData?.job_title}
            </h2>
            <span
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getStatusColor(
                jobData?.status
              )}`}
            >
              {jobData?.status?.charAt(0).toUpperCase() +
                jobData?.status?.slice(1)}
            </span>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-primary-50 font-medium text-2xl">
              <IndianRupee className="w-5 h-5" />
              <span className="text-xl md:text-2xl font-bold">
                {jobData?.payment_amount.toLocaleString()}
              </span>
            </div>
            {/* <span className="text-sm text-gray-500">
                {jobData?.is_paid ? "Paid" : "Unpaid"}
              </span> */}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2  relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative overflow-hidden py-8">
          <DollarSign
            className="absolute top-0 right-0 rotate-45 opacity-5"
            size={200}
          />
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-primary-600" />
              <div>
                <p className="text-sm text-gray-500">Work Duration</p>
                <p className="text-gray-700">
                  {formatDate(jobData?.start_date)} -{" "}
                  {formatDate(jobData?.end_date)}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-primary-600" />
              <div>
                <p className="text-sm text-gray-500">Platform</p>
                <p className="text-gray-700">
                  {jobData?.additional_details.platform}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-primary-600" />
              <div>
                <p className="text-sm text-gray-500">Target Audience</p>
                <p className="text-gray-700">
                  {jobData?.additional_details.audience}
                </p>
              </div>
            </div>
          </div>
          <IndianRupee
            className="absolute top-10 left-80 rotate-45 opacity-5"
            size={100}
          />
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-primary-600" />
              <div>
                <p className="text-sm text-gray-500">Applied Influencers</p>
                <p className="text-gray-700 ">
                  {jobData?.applied_influencers.length || 0}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-primary-600" />
              <div>
                <p className="text-sm text-gray-500">Created At</p>
                <p className="text-gray-700">
                  {formatDate(jobData?.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Description
          </h3>
          <p className="text-gray-600">{jobData?.description}</p>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <Button variant="outline">View Details</Button>
          <Button>Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};
