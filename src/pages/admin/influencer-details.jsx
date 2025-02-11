import { Card, CardContent, CardHeader } from "../../components/ui/card";
import axios from "axios";
import { Calendar, Check, Facebook, Instagram, Mail, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../lib/formatDate";
import { baseURL } from "../../App";
import { Button } from "../../components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";

export default function InfluencerData() {
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const { id } = useParams();
  console.log("Job Details", id);

  useEffect(() => {
    axios
      .get("/admin/get-influencers/" + id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }) // Replace with your API URL
      .then((response) => {
        setProfileData(response?.data?.meta);
        console.log(response?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, [id]);
  const toggleVerify = async (bool) => {
    const res = await axios.put(
      "/admin/verify-influencer/" + id,
      {
        is_verify: bool,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    console.log(res);
    ("");
  };

  if (loading) {
    return <p className="text-center text-gray-500 min-h-screen">Loading...</p>;
  }

  return (
    // <Card className="max-w-7xl bg-white shadow-lg mt-4">
    //   <CardContent className="p-6 ">
    //     <div className="space-y-6">
    //       {/* Header with Name and Verification Status */}
    //       <div className="flex justify-between items-start">
    //         <div className="flex items-center gap-4">
    //           <img
    //             src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
    //             className="w-40 h-40 rounded-2xl"
    //           />
    //           <h2 className="text-2xl font-bold text-gray-800 capitalize">
    //             {job.name || "N/A"}
    //           </h2>
    //         </div>
    //         <div className="flex items-start gap-2">
    //           <Shield
    //             className={`w-5 h-5 ${
    //               !job.authorize ? "text-red-400" : "text-green-500"
    //             }`}
    //           />
    //           <span className="text-sm text-gray-500">
    //             {!job.is_verify ? "Not Verified" : "Verified"}
    //           </span>
    //         </div>
    //       </div>

    //       {/* Main Content Grid */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //         {/* Left Column - Social Stats */}
    //         <div className="space-y-4">
    //           <div className="bg-gray-50 p-4 rounded-lg">
    //             <h3 className="font-semibold text-gray-700 mb-3">
    //               Social Statistics
    //             </h3>
    //             <div className="space-y-3">
    //               <div className="flex items-center justify-between">
    //                 <div className="flex items-center gap-2">
    //                   <UserCheck className="w-4 h-4 text-blue-500" />
    //                   <span className="text-gray-600">Followers</span>
    //                 </div>
    //                 <span className="font-medium">
    //                   {job?.followers || "N/A"}
    //                 </span>
    //               </div>
    //               <div className="flex items-center justify-between">
    //                 <div className="flex items-center gap-2">
    //                   <UserCheck className="w-4 h-4 text-green-500" />
    //                   <span className="text-gray-600">Friends</span>
    //                 </div>
    //                 <span className="font-medium">{job.riends || "0"}</span>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="bg-gray-50 p-4 rounded-lg">
    //             <h3 className="font-semibold text-gray-700 mb-3">Category</h3>
    //             <div className="space-y-2">
    //               <div className="flex items-center justify-between">
    //                 <span className="text-gray-600">Domain</span>
    //                 <span className="font-medium">{job?.domain || "N/A"}</span>
    //               </div>
    //               <div className="flex items-center justify-between">
    //                 <span className="text-gray-600">Category</span>
    //                 <span className="font-medium">
    //                   {job?.category || "N/A"}
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Right Column - Contact & Social */}
    //         <div className="space-y-4">
    //           <div className="bg-gray-50 p-4 rounded-lg">
    //             <h3 className="font-semibold text-gray-700 mb-3">
    //               Contact Information
    //             </h3>
    //             <div className="space-y-3">
    //               <div className="flex items-center gap-2">
    //                 <Mail className="w-4 h-4 text-gray-600" />
    //                 <span className="text-gray-600 text-sm break-all">
    //                   {job.email}
    //                 </span>
    //               </div>
    //               <div className="flex items-center gap-2">
    //                 <Instagram className="w-4 h-4 text-pink-600" />
    //                 <span className="text-gray-600">
    //                   {job.instagramHandle || "N/A"}
    //                 </span>
    //               </div>
    //               <div className="flex items-center gap-2">
    //                 <Facebook className="w-4 h-4 text-blue-600" />
    //                 <span className="text-gray-600">
    //                   {job.facebookHandle || "N/A"}
    //                 </span>
    //               </div>
    //             </div>
    //           </div>

    //           <div className="bg-gray-50 p-4 rounded-lg">
    //             <h3 className="font-semibold text-gray-700 mb-3">
    //               Account Details
    //             </h3>
    //             <div className="space-y-2">
    //               <div className="flex items-center gap-2">
    //                 <Calendar className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm text-gray-600">
    //                   Created: {new Date(job?.createdAt).toLocaleDateString()}
    //                 </span>
    //               </div>
    //               <div className="flex items-center gap-2">
    //                 <Calendar className="w-4 h-4 text-gray-600" />
    //                 <span className="text-sm text-gray-600">
    //                   Updated: {new Date(job.updatedAt).toLocaleDateString()}
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </CardContent>
    // </Card>
    <div>
      {profileData && (
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary-900 text-white p-6 overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {profileData.dp ? (
                  <img
                    src={profileData.dp}
                    alt={profileData.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl text-gray-700">
                      {profileData?.name?.charAt(0).toUpperCase() || "U"}
                    </span>
                  </div>
                )}
                <div>
                  <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold text-gray-100">
                      {profileData.name || "Unknown"}
                    </h2>
                    {profileData?.verify && (
                      <div className="flex items-center bg-secondary-500 px-3 py-1 rounded-full">
                        <Check className="w-4 h-4 mr-1" />
                        <span className="text-sm">Verified</span>
                      </div>
                    )}
                    {!profileData?.verify && (
                      <div className="flex items-center bg-red-500 px-3 py-1 rounded-full">
                        <X className="w-4 h-4 mr-1" />
                        <span className="text-sm">Not Verified</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-200">{profileData.category}</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-100">
                  {profileData.followers}
                </p>
                <p className="text-sm text-gray-300">Followers</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 ">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    {profileData.email}
                  </a>
                </div>
                <div className="flex gap-4">
                  {profileData.facebookHandle && (
                    <div className="flex items-center space-x-2">
                      <Facebook className="w-5 h-5 text-blue-400" />
                      <a
                        href={`https://facebook.com/${profileData.facebookHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:underline"
                      >
                        {profileData.facebookHandle}
                      </a>
                    </div>
                  )}

                  {profileData.instagramHandle && (
                    <div className="flex items-center space-x-2">
                      <Instagram className="w-5 h-5 text-red-500" />
                      <a
                        href={`https://instagram.com/${profileData.instagramHandle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:underline"
                      >
                        {profileData.instagramHandle}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-8 items-center">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Created</p>
                    <p className="text-gray-700">
                      {formatDate(profileData.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Last Updated</p>
                    <p className="text-gray-700">
                      {formatDate(profileData.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Domain</p>
                  <p className="text-gray-700">{profileData.domain}</p>
                </div>
                {profileData.subcategory && (
                  <div>
                    <p className="text-sm text-gray-500">Subcategory</p>
                    <p className="text-gray-700">{profileData.subcategory}</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">Bio:</div>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                necessitatibus iure libero nesciunt? Perferendis, hic nam modi
                enim eum ratione ipsa fugit fugiat possimus quod, libero est
                maiores. Similique, officiis.
              </p>
            </div>
            <div className="flex items-center justify-between">
              {profileData.id_proof.map((item) => {
                console.log(baseURL + item);
                return (
                  <img
                    src={baseURL + "/" + item}
                    key={item}
                    className="w-60 h-60 object-cover cursor-pointer aspect-square rounded-md"
                  />
                );
              })}
              <div>
                <div className="flex flex-col items-center space-y-4 p-6 ">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700 font-medium">
                      Status:{" "}
                      {profileData.isVerify ? "Verified" : "Not Verified"}
                    </span>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button>
                          {" "}
                          <Button
                            className={`
            px-4 py-2 rounded-md font-medium
            transition-colors duration-200
            ${
              profileData.is_verify
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }
          `}
                          >
                            Toggle Verification
                          </Button>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() =>
                              toggleVerify(
                                profileData.is_verify == true ? false : true
                              )
                            }
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <Button
                      onClick={() =>
                        toggleVerify(
                          profileData.is_verify == true ? false : true
                        )
                      }
                      className={`
            px-4 py-2 rounded-md font-medium
            transition-colors duration-200
            ${
              profileData.is_verify
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }
          `}
                    >
                      Toggle Verification
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div
                      className={`
          w-3 h-3 rounded-full
          ${profileData.is_verify ? "bg-green-500" : "bg-red-500"}
        `}
                    />
                    <span
                      className={`
          text-sm font-medium
          ${profileData.isVerify ? "text-green-500" : "text-red-500"}
        `}
                    >
                      {profileData.is_verify
                        ? "Verification Complete"
                        : "Verification Required"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
