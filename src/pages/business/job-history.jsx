import { useEffect, useState } from "react";

const JobHistory = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch job history
  useEffect(() => {
    const fetchJobHistory = async () => {
      try {
        const response = await fetch("https://api.example.com/job-history"); // Replace with your API URL
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching job history:", error);
      }
    };

    fetchJobHistory();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Job History</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr className="border-b">
              <th className="py-3 px-4 text-left">Job Title</th>
              <th className="py-3 px-4 text-left">Job ID</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Application ID</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{job.job_title}</td>
                <td className="py-2 px-4 text-blue-600">{job.job_id}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-lg 
                      ${
                        job.status === "COMPLETED"
                          ? "text-green-600 bg-green-100"
                          : job.status === "ASSIGNED"
                          ? "text-orange-600 bg-orange-100"
                          : "text-red-600 bg-red-100"
                      }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="py-2 px-4 text-blue-600">
                  {job.application_id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobHistory;
