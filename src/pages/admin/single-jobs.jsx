import { formatDate } from "../../lib/formatDate";
import { Card, CardContent } from "../../components/ui/card";
import axios from "axios";
import {
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function JobDetails() {
  const [job, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log("Job Details", id);

  useEffect(() => {
    axios
      .get("/admin/get-job/" + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }) // Replace with your API URL
      .then((response) => {
        setJobData(response.data.meta);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading)
    return <p className="text-center text-gray-500 min-h-screen">Loading...</p>;

  const getStatusColor = (status) => {
    const statusColors = {
      pending: "bg-yellow-100 text-yellow-800",
      active: "bg-green-100 text-green-800",
      completed: "bg-blue-100 text-blue-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return statusColors[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="max-w-7xl mt-4 bg-white shadow-lg">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Header with Title and Status */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {job.job_title || "N/A"}
              </h2>
              <p className="text-gray-600 mt-1">{job.description}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                "pending"
              )}`}
            >
              Pending
            </span>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-3">
                  Campaign Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-600">Start Date</p>
                      <p className="font-medium">
                        {formatDate(job.start_date)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-red-500" />
                    <div>
                      <p className="text-sm text-gray-600">End Date</p>
                      <p className="font-medium">{formatDate(job.end_date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-600">Payment Amount</p>
                      <p className="font-medium">${job.payment_amount}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-3">
                  Platform Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Platform</p>
                      <p className="font-medium">
                        {job.additional_details.platform || "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Target Audience</p>
                      {job.additional_details.audience || "N/A"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-3">
                  Campaign Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Payment Status</p>
                      <p className="font-medium">{!true ? "Unpaid" : "Paid"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-sm text-gray-600">Last Updated</p>
                      <p className="font-medium">{formatDate(job.updatedAt)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold">Bio:</div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            necessitatibus iure libero nesciunt? Perferendis, hic nam modi enim
            eum ratione ipsa fugit fugiat possimus quod, libero est maiores.
            Similique, officiis.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
