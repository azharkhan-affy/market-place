/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { TypeSelectButton } from "../components/ui/login/select-type";
import {
  ChevronLeft,
  HandshakeIcon,
  Loader,
  UserRoundSearch,
} from "lucide-react";
import { useContext, useState } from "react";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import AnimatePresenceComponent from "../components/ui/animate/animate-presence";
import { Input } from "../components/ui/input";
import axios from "axios";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../components/ui/input-otp";
import { useNavigate } from "react-router-dom";
import { useToast } from "../hooks/use-toast";
import { VerficationContext } from "../context/Verfication";
import { routeToVerification } from "../lib/utils";

const Login = () => {
  const verification = useContext(VerficationContext);
  console.log(verification);
  const [loginType, setLoginType] = useState("");
  const [step, setStep] = useState(0);
  const [otp, setOtp] = useState("");
  const { toast } = useToast();

  //
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSelectType = (type) => {
    setLoginType(() => type);
    verification.setType(() => type);
    localStorage.setItem("type", type);
  };
  const handleNext = () => {
    console.log(loginType);
    setStep(() => 1);
  };

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "/auth/send-otp",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);
      toast({
        variant: "default",
        title: "Check your email address",
        description: "we sent otp to your email address",
      });

      setStep(() => 2);
    } catch (error) {
      console.log(error.message);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "/auth/verify-otp",
        {
          email,
          type: loginType,
          otp: otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", response?.data?.meta?.token);
      // navigate("/");
      console.log(response?.data?.meta, "token successfully");
      toast({
        variant: "default",
        title: "Otp verified Successfully",
        description: "thank you for register",
      });

      if (response?.data?.meta?.authorize) {
        console.log("res");
        return navigate("/");
      } else {
        routeToVerification(verification, navigate);
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col dark:bg-primary-900 bg-primary-700">
      <AnimatePresenceComponent>
        {step == 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.2, x: 10 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <SelectLoginType
              handleNext={handleNext}
              loginType={loginType}
              handleSelectType={handleSelectType}
            />
          </motion.div>
        )}
      </AnimatePresenceComponent>
      <AnimatePresenceComponent>
        {step == 1 && (
          <SendOtp
            email={email}
            setEmail={setEmail}
            loading={loading}
            handleSendOtp={handleSendOtp}
            handleBack={handleBack}
          />
        )}
      </AnimatePresenceComponent>
      <AnimatePresenceComponent>
        {step == 2 && (
          <VerifyOtp
            handleVerifyOtp={handleVerifyOtp}
            otp={otp}
            setOtp={setOtp}
            handleBack={handleBack}
          />
        )}
      </AnimatePresenceComponent>
    </div>
  );
};

export default Login;

const SelectLoginType = ({ loginType, handleSelectType, handleNext }) => {
  return (
    <>
      {" "}
      <div className="text-2xl md:text-4xl text-center text-primary-50 font-semibold">
        Join as a Business or influencer
      </div>
      <div className="flex justify-center flex-col md:flex-row mt-8 md:gap-8 gap-4 ">
        <TypeSelectButton
          Icon={UserRoundSearch}
          loginType={loginType}
          handleSelectType={handleSelectType}
          type={"influencer"}
        >
          Influencer
        </TypeSelectButton>

        <TypeSelectButton
          Icon={HandshakeIcon}
          loginType={loginType}
          handleSelectType={handleSelectType}
          type={"business"}
        >
          Business
        </TypeSelectButton>
      </div>
      <div className="flex justify-center ">
        <Button
          size={"lg"}
          disabled={!loginType}
          onClick={handleNext}
          className={`mx-auto text-white mt-8 px-4 py-2 rounded-lg ${
            loginType ? "bg-primary" : "bg-gray-400 "
          }`}
        >
          {loginType ? `Join as ${loginType}` : "Create an account"}
        </Button>
      </div>
    </>
  );
};

const SendOtp = ({ email, setEmail, loading, handleSendOtp, handleBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.2, y: 10 }}
      transition={{ type: "spring", duration: 1 }}
    >
      <Card className="w-[350px] -mt-16">
        <CardHeader>
          <CardTitle className="text-2xl">Send OTP</CardTitle>
          <CardDescription>
            send otp for verification its an one time process.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label>Email</Label>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack}>
            <ChevronLeft />
            Back
          </Button>
          <Button
            disabled={loading}
            className="text-white"
            onClick={handleSendOtp}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader className="animate-spin w-4 h-4" />
                Loading
              </span>
            ) : (
              "Submit"
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const VerifyOtp = ({ handleVerifyOtp, otp, setOtp, loading, handleBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 10 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", duration: 0.3 }}
    >
      <Card className="w-[350px] -mt-16">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Verify OTP</CardTitle>
          <CardDescription className="text-center">
            write otp for your verification.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <InputOTP
            className=""
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack}>
            <ChevronLeft />
            Back
          </Button>
          <Button
            disabled={loading}
            className="text-white"
            onClick={handleVerifyOtp}
          >
            {loading ? (
              <span>
                <Loader className="animate-spin w-4 h-4" />
                Loading
              </span>
            ) : (
              "Verify"
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
