import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";
import { Input } from "../input";
import { Label } from "../label";
import { Button } from "../button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handlePost = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        `auth/admin/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data.meta.token);
      localStorage.setItem("token", res?.data?.meta?.token);
      if (res.status == 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-primary-600 flex items-center justify-center min-h-screen  ">
      <Card className="md:min-w-[400px] space-y-2">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Admin Login</CardTitle>
          <CardDescription>
            Admin login page all fields required
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <Label>email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-1">
            <Label>password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button onClick={handlePost} className="w-full text-white mt-4">
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
