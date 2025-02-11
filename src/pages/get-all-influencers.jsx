import useFetchData from "../config/useFetchDat";
import LandingNavbar from "../components/landing-navbar";
import {
  Calendar,
  Check,
  Facebook,
  Instagram,
  Mail,
  Phone,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { formatDate } from "../lib/formatDate";
import { Button } from "../components/ui/button";

const GetAllInfluencers = () => {
  const {
    data: influencers,
    loading: loading,
    error: errror,
  } = useFetchData("get-all-influencer");

  return (
    <div className="bg-primary-600 min-h-screen">
      <LandingNavbar />
      <div className="max-w-6xl px-4 mx-auto pt-20 space-y-4 pb-8">
        {influencers?.map((profileData, index) => {
          console.log(profileData);
          return <SingleInfluencers key={index} profileData={profileData} />;
        })}
      </div>
    </div>
  );
};

export default GetAllInfluencers;

export const SingleInfluencers = ({ profileData }) => {
  return (
    <Card className="max-w-6xl mx-auto bg-white shadow-lg overflow-hidden">
      <CardHeader className="bg-primary-900 text-white p-6 overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {profileData.dp ? (
              <img
                src={profileData.dp}
                alt={profileData.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
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
            <div className="flex items-center justify-end gap-3">
              <Button size="icon">
                <Phone />
              </Button>
              <Button>Hire Now</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
