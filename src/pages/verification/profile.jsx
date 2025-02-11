import { Label } from "../../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import axios from "axios";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "../../hooks/use-toast";

const ProfileVerification = () => {
  const type = localStorage.getItem("type");
  return (
    <div className="min-h-screen flex items-center justify-center flex-col dark:bg-primary-900 bg-primary-700">
      {type == "influencer" && <InfluencerProfile />}
      {type == "business" && <BusinessProfile />}
    </div>
  );
};

export default ProfileVerification;

const InfluencerProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [userName, setUserName] = useState("");
  const [instagramHandle, setInstagramhandle] = useState("");
  const [facebookHandle, setFacebookHandle] = useState("");
  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "/influencer/profile-register",
        {
          name,
          domain,
          category,
          subCategory,
          userName,
          instagramHandle,
          facebookHandle,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(res, "created successfully");
      localStorage.setItem("token", res.data.meta.token);
      navigate("/");
      toast({
        title: "Profile successfully Created",
        description: "Profile successfully created",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Card className="sm:w-[350px] -mt-8">
        <CardHeader>
          <CardTitle className="text-2xl">Influencer Verification</CardTitle>
          <CardDescription>you are not verify yet</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div>
              <Label>name</Label>
              <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label>user name</Label>
              <Input
                placeholder="User name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <Label>domain</Label>
              <Input
                placeholder="Domain"
                onChange={(e) => setDomain(e.target.value)}
              />
            </div>
            <div>
              <Label>subcategory</Label>
              <Input
                placeholder="sub category"
                onChange={(e) => setSubCategory(e.target.value)}
              />
            </div>
            <div>
              <Label>Category</Label>
              <Input
                placeholder="Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <Label>Instagram user name</Label>
              <Input
                placeholder="insta@username"
                onChange={(e) => setInstagramhandle(e.target.value)}
              />
            </div>
            <div>
              <Label>Facebook user name</Label>
              <Input
                placeholder="fb@username"
                onChange={(e) => setFacebookHandle(e.target.value)}
              />
            </div>
            <Button onClick={handleSubmit} className="w-full mt-4">
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const BusinessProfile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Form Data:", data);
    try {
      const res = await axios.post("/business/business-register", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(res);
      localStorage.setItem("token", res.data.meta.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <Card className="sm:w-[350px] -mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              Create Your Business Profile
            </CardTitle>
            <CardDescription>you are not verify yet</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <div>
                  <Label className="block text-gray-600">Name</Label>
                  <Input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Name"
                    className="w-full border p-2 rounded"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="block text-gray-600">Business Name</Label>
                  <Input
                    {...register("businessName", {
                      required: "Business Name is required",
                    })}
                    placeholder="Business Name"
                    className="w-full border p-2 rounded"
                  />
                  {errors.businessName && (
                    <p className="text-red-600 text-xs">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="block text-gray-600">Domain</Label>
                  <Input
                    {...register("domain", {
                      required: "Domain is required",
                    })}
                    placeholder="Domain"
                    className="w-full border p-2 rounded"
                  />
                  {errors.domain && (
                    <p className="text-red-600 text-xs">
                      {errors.domain.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="block text-gray-600">Mobile</Label>
                  <Input
                    {...register("mobile", {
                      required: "Mobile is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit mobile number",
                      },
                    })}
                    placeholder="Mobile"
                    className="w-full border p-2 rounded"
                  />
                  {errors.mobile && (
                    <p className="text-red-600 text-xs">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label className="block text-gray-600">Address</Label>
                  <Input
                    {...register("address", {
                      required: "Address is required",
                    })}
                    placeholder="Address"
                    className="w-full border p-2 rounded"
                  />
                  {errors.mobile && (
                    <p className="text-red-600 text-xs">
                      {errors.mobile.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="block text-gray-600">Category</Label>
                  <Input
                    {...register("category", {
                      required: "Category is required",
                    })}
                    placeholder="Category"
                    className="w-full border p-2 rounded"
                  />
                  {errors.category && (
                    <p className="text-red-600 text-xs">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label className="block text-gray-600">sub category</Label>
                  <Input
                    {...register("subCategory", {
                      required: "Category is required",
                    })}
                    placeholder="Category"
                    className="w-full border p-2 rounded"
                  />
                  {errors.category && (
                    <p className="text-red-600 text-xs">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <Button type="submit" disabled={loading} className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
