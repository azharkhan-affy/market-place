/* eslint-disable no-unused-vars */
import { Button } from "../../components/ui/button";
import {
  MapPin,
  UserPen,
  Trash,
  Upload,
  Plus,
  Pen,
  MoveLeft,
  Facebook,
  Mail,
  CheckCircle,
  Tag,
  Globe,
  Calendar,
  Instagram,
  Users,
  UserPlus,
  Loader,
} from "lucide-react";
import { useEffect, useState } from "react";

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
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import axios from "axios";

import { SiInstagram, SiFacebook } from "react-icons/si";
import InfluencerNavbar from "./influencer-navbar";
import { formatDate } from "../../lib/formatDate";
import { Card, CardHeader, CardTitle } from "../../components/ui/card";

const ProfilePage = () => {
  const [profileData, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      const res = await axios.get("/influencer/get-profile/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      console.log(res?.data?.meta);
      console.log(res?.data?.data);
      setProfile(() => (res.data.data ? res.data.data : res.data.meta));
      console;
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="bg-black/60 min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Something went Wrong</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className={`px-4 md:px-0 cursive--font pt-16`}>
      <InfluencerNavbar />
      <div className="max-w-7xl mx-auto">
        <div className="mt-4 border rounded-3xl flex-col gap-4 ">
          <div className="flex justify-between items-center md:p-6 p-4">
            <div>
              <h1 className="md:text-2xl text-xl">Your title</h1>
              <div className="flex">
                {<h2>your something something title</h2>}
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center md:p-6 p-4">
            <div>
              <h1 className="md:text-2xl text-xl">Profile overview</h1>
              <div className="flex">
                {<h2>your something something profile</h2>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="mt-4 border rounded-3xl flex-col gap-4 bg-white shadow">
          <div className="flex justify-between items-center md:p-6 p-4">
            <div>
              <h1 className="md:text-2xl text-xl font-bold text-gray-900">
                Profile Information
              </h1>
              <div className="flex items-center space-x-2 mt-2">
                <h2 className="text-gray-600">{profileData.name}</h2>
                {profileData.verify && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Verified
                  </span>
                )}
              </div>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="md:p-6 p-4">
            <h2 className="md:text-2xl text-xl font-bold text-gray-900 mb-4">
              Profile Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500 flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </p>
                  <p className="mt-1 ml-6">{profileData.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    Category
                  </p>
                  <p className="mt-1 ml-6 capitalize">{profileData.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Domain
                  </p>
                  <p className="mt-1 ml-6">{profileData.domain}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Created
                  </p>
                  <p className="mt-1 ml-6">
                    {formatDate(profileData.createdAt)}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Social Media
                  </p>
                  <div className="mt-1 space-y-1 ml-6">
                    <p className="flex items-center">
                      <Facebook className="w-4 h-4 mr-2 text-blue-600" />@
                      {profileData.facebookHandle}
                    </p>
                    <p className="flex items-center">
                      <Instagram className="w-4 h-4 mr-2 text-pink-600" />@
                      {profileData.instagramHandle}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Stats</p>
                  <div className="mt-1 space-y-1 ml-6">
                    <p className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-500" />
                      Followers: {profileData.followers}
                    </p>
                    <p className="flex items-center">
                      <UserPlus className="w-4 h-4 mr-2 text-green-500" />
                      Friends: {profileData.friends}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
