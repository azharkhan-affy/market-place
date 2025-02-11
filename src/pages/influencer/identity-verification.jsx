import { useState } from "react";
import InfluencerNavbar from "./influencer-navbar";
import { Button } from "../../components/ui/button";
import axios from "axios";
import { toast } from "../../hooks/use-toast";

export default function KYCForm() {
  const [idFile, setIdFile] = useState(null);
  // const [idFile, setIdFile] = useState(null);

  const handleFileChange = (e, type) => {
    if (type === "id") {
      setIdFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idFile) {
      alert("Please upload both images.");
      return;
    }

    try {
      const res = await axios.post(
        "/influencer/upload-id-proof",
        {
          id_proof: idFile,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      toast({
        title: "KYC Submitted Successfully!",
        description: "this user is now verify!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-600 ">
      <InfluencerNavbar />

      <div className="bg-white p-6 rounded-lg shadow-md w-full  flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* Left Side - File Inputs */}
        <div className="w-full md:w-1/2 p-4 border-r">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            {"Let's "}Verify KYC
          </h2>

          {/* ID Upload */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Take a picture of your valid ID
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "id")}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          {/* Selfie Upload */}
          {/* <div className="mb-4">
            <label className="block text-gray-600 mb-2">
              Take a selfie of yourself
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "selfie")}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div> */}
        </div>

        {/* Right Side - Submission */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Why this is needed?
          </h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <strong>1. Identity Verification:</strong> Ensures users are who
              they claim to be.
            </li>
            <li>
              <strong>2. Regulatory Compliance:</strong> Required by law for
              payments and collaborations.
            </li>
            <li>
              <strong>3. Security and Fraud Prevention:</strong> Protects
              against fraud and identity theft.
            </li>
            <li>
              <strong>4. Building Trust:</strong> Fosters trust between users.
            </li>
            <li>
              <strong>5. Customized Experience:</strong> Improves tailored
              services.
            </li>
          </ul>

          <Button onClick={handleSubmit} className="w-full mt-4">
            Submit KYC
          </Button>
        </div>
      </div>
    </div>
  );
}
