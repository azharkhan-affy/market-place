import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import axios from "axios";
import { Textarea } from "../../components/ui/textarea";
import { useToast } from "../../hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Label } from "../../components/ui/label";
import Navbar from "../../components/navbar";

const CreateJobs = () => {
  const [formData, setFormData] = useState({
    job_title: "",
    description: "",
    start_date: "",
    end_date: "",
    additional_details: {
      platform: "",
      audience: "",
    },
    payment_amount: "",
  });
  const { toast } = useToast();
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handling nested object (additional_details)
    if (name.includes("additional_details.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        additional_details: { ...prev.additional_details, [key]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await axios.post("/business/jobs-post", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(res.data.meta);
      toast({
        title: "Job post successfully",
        description: "route to all jobs page",
      });
      navigate("/jobs");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "some fields are mandatory.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-primary-600 flex items-center justify-center">
        <Navbar />
        <Card className="md:w-[600px]">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Create Jobs</CardTitle>
            <CardDescription className=" text-center">
              create jobs where influencers can apply
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                placeholder="Job Title"
              />

              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
              ></Textarea>
              <div className="flex gap-4 flex-col sm:flex-row">
                <div className="flex-1">
                  <Label>Starting date</Label>
                  <Input
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <Label>Ending date</Label>

                  <Input
                    type="date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex gap-4 flex-col sm:flex-row">
                <Input
                  type="text"
                  name="additional_details.platform"
                  value={formData.additional_details.platform}
                  onChange={handleChange}
                  placeholder="Platform (e.g. Instagram)"
                />

                <Input
                  type="text"
                  name="additional_details.audience"
                  value={formData.additional_details.audience}
                  onChange={handleChange}
                  placeholder="Audience (e.g. Young Adults)"
                />
              </div>

              <Input
                type="number"
                name="payment_amount"
                value={formData.payment_amount}
                onChange={handleChange}
                placeholder="Payment Amount"
              />

              <Button type="submit" className="w-full" disabled={loading}>
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CreateJobs;
