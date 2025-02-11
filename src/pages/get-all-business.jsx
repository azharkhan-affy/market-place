import LandingNavbar from "../components/landing-navbar";
import useFetchData from "../config/useFetchDat";
import { Building2, Check, Globe, Mail, MapPin, Phone, X } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";

const GetAllBusiness = () => {
  const {
    data: business,
    loading: loading,
    error: errror,
  } = useFetchData("get-all-business");
  return (
    <div className="bg-primary-600 min-h-screen">
      <LandingNavbar />
      <div className="max-w-6xl px-4 mx-auto pt-20 space-y-8">
        {business?.map((item) => {
          return <BusinessDetails key={item.businessName} business={item} />;
        })}
      </div>
    </div>
  );
};

export default GetAllBusiness;

const BusinessDetails = ({ business }) => {
  return (
    <Card className="max-w-6xl mx-auto bg-white shadow-lg overflow-hidden">
      <CardHeader className="bg-primary-900 text-white p-6 overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold capitalize">
              {business.businessName || "Unknown"}
            </h2>
            <p className="text-secondary-100 mt-1">
              {business.name || "Not Filled Yet"}
            </p>
          </div>
          {business?.verify && (
            <div className="flex items-center bg-secondary-500 px-3 py-1 rounded-full">
              <Check className="w-4 h-4 mr-1" />
              <span className="text-sm">Verified</span>
            </div>
          )}
          {!business?.verify && (
            <div className="flex items-center bg-red-500 px-3 py-1 rounded-full">
              <X className="w-4 h-4 mr-1" />
              <span className="text-sm">Not Verified</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="grid gap-6">
          <div className="flex flex-col md:flex-row">
            <div className="flex items-start flex-1 space-x-4">
              <Building2 size={20} />
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium">{business.category || "NA"}</p>
              </div>
            </div>

            <div className="flex items-start flex-1 space-x-4">
              <Mail size={20} />
              <div>
                <p className="text-sm text-gray-700">Email</p>
                <a href={`mailto:${business.email}`} className="font-medium ">
                  {business.email || "NA"}
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex items-start flex-1 space-x-4">
              <Phone size={20} />
              <div>
                <p className="text-sm text-gray-500">Mobile</p>
                <p className="font-medium">{business.mobile || "NA"}</p>
              </div>
            </div>

            <div className="flex items-start flex-1 space-x-4">
              <MapPin size={20} />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">{business.address || "NA"}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Globe size={20} />
            <div>
              <p className="text-sm text-gray-500">Domain</p>
              <p className="font-medium">{business.domain || "NA"}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
