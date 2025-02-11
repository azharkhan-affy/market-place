import { TrendingDown, TrendingUp } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  return (
    <div className="space-y-4 mx-2">
      <h2 className="text-3xl font-bold text-gray-800 ">
        Good Morning, Admin!
      </h2>
      {/* <div className="shadow-md shadow-primary-400/50 p-6 bg-white rounded-lg shadow-custom-light  border-2 border-custom-green mb-6">
        <div className="bg-gray-50/50  backdrop-blur-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 md:divide-x divide-gray-200">
          <div className="px-4 flex items-start">
            <div>
              <h4 className="text-gray-600 font-bold">
                Total <br />
                Influencers Connected
              </h4>
              <p className="text-2xl font-bold text-secondary-900">600</p>
              <p className="text-gray-400 text-sm">Wed, Jul 20</p>
            </div>
            <span className="text-green-900 text-sm font-medium bg-gray-600/20 px-3 rounded-full flex items-center ">
              <ArrowUp size={18} />
              10.0%
            </span>
          </div>
          <div className="px-4 flex items-start gap-4">
            <div>
              <h4 className="text-gray-600 font-bold">Total Jobs</h4>
              <p className="text-2xl font-bold">500</p>
              <p className="text-gray-400 text-sm">Wed, Jul 20</p>
            </div>
            <span className="text-red-500 bg-red-400/30 px-3 rounded-full text-sm font-medium w-fit flex">
              <ArrowDown size={18} /> 3.0%
            </span>
          </div>
          <div className="px-4">
            <h4 className="text-gray-600 font-bold">Total Businesses</h4>
            <p className="text-2xl font-bold">220</p>
            <p className="text-gray-400 text-sm">Wed, Jul 20</p>
            <span className="text-green-500 text-sm font-medium">↑ 3.2%</span>
          </div>
          <div className="px-4">
            <h4 className="text-gray-600 font-bold">Total Job Postings</h4>
            <p className="text-2xl font-bold">150</p>
            <p className="text-gray-400 text-sm">Wed, Jul 20</p>
            <span className="text-blue-500 text-sm font-medium">↑ 8.2%</span>
          </div>
        </div>
      </div> */}
      <DashboardStats />
      <h1 className="text-center my-8">Dashboard is under construction</h1>
      {/* Chart & Status Section */}

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="shadow-md shadow-primary-400/50  p-4 bg-white rounded-lg shadow-custom-light lg:col-span-2 border-2 border-custom-green">
          <h4 className="mb-4 font-bold text-gray-700">
            Influencers Connected
          </h4>
          <div className="h-64 bg-gray-100 flex items-center justify-center rounded-md">
            <p className="text-gray-400">Chart </p>
          </div>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-custom-light border-2 border-custom-green shadow-md shadow-primary-400/50 ">
          <h4 className="mb-4 font-bold text-gray-700">Job Postings</h4>
          <ul className="space-y-2">
            <li className="flex justify-between text-gray-600">
              <span>
                <img src="/assets/img/Group.png" alt="group" />
              </span>
              <span className="font-medium">Recent</span>
              <span>6.42%</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>
                <img src="/assets/img/Group-1.png" />
              </span>
              <span className="font-medium">New</span>
              <span>2.76%</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>
                <img src="/assets/img/Group-2.png" />
              </span>
              <span className="font-medium">Old</span>
              <span>0.82%</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Status Table */}
      {/* <div className="mt-6 shadow-md shadow-primary-400/50  bg-white rounded-lg shadow-custom-light p-6 border-2 border-custom-green">
        <h4 className="font-bold mb-4 text-gray-700">Status</h4>
        <table className="w-full text-left">
          <thead>
            <tr className="border-gray-200">
              <th className="py-2 text-tertiary-light font-medium">
                Influencer
              </th>
              <th className="py-2 text-tertiary-light  font-medium">
                Businesses
              </th>
              <th className="py-2 text-tertiary-light  font-medium">Jobs</th>
              <th className="py-2 text-tertiary-light  font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-gray-200">
              <td className="py-2">Saima Khan</td>
              <td>Al-Fateh</td>
              <td>20</td>
              <td className="text-red-500">Rejected</td>
            </tr>
            <tr className="border-gray-200">
              <td className="py-2">Umair Farooq</td>
              <td>Tarhaab</td>
              <td>400</td>
              <td className="text-green-500">Completed</td>
            </tr>
            <tr>
              <td className="py-2">Urdudaan</td>
              <td>Eleganza</td>
              <td>50</td>
              <td className="text-yellow-500">Pending</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Dashboard;

const DashboardStats = () => {
  const [countJobs, setCountJobs] = useState(600);
  const [countBusiness, setCountBusiness] = useState(40);
  const [countInfluencer, setCountInfluencer] = useState(232);
  const [countJobPostings, setCountJobPostings] = useState(12);
  const statsData = [
    {
      title: "Total Influencers Connected",
      count: countInfluencer,
      change: "up",
      trend: "up",
    },
    { title: "Total Jobs", count: countJobs, change: -3, trend: "down" },
    {
      title: "Total Businesses",
      count: countBusiness,
      change: 3.2,
      trend: "up",
    },
    {
      title: "Total Jobs Postings",
      count: countJobPostings,
      change: 8.3,
      trend: "up",
    },
  ];

  return (
    <div className="flex flex-wrap bg-white p-6 shadow-md rounded-lg">
      {statsData.map((stat, index) => (
        <div key={index} className="flex-1 p-4 flex items-start gap-3">
          <div>
            <p className="text-gray-600 font-bold text-xl">{stat.title}</p>
            <h2 className="text-2xl font-bold">{stat.count}</h2>
          </div>
          <div className="flex items-center text-sm text-gray-900 bg-blue-400/40 px-3 rounded-full">
            {stat.trend === "up" ? (
              <TrendingUp className="text-green-500 w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="text-red-500 w-4 h-4 mr-1" />
            )}
            <span>{stat.change}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};
