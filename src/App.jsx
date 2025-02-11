/* eslint-disable react/prop-types */
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import ProfileVerification from "./pages/verification/profile";
import { VerificationProvider } from "./context/Verfication";
import AdminLoginPage from "./pages/admin-login";
import ProtectedRoute from "./lib/protected-route";
import SidebarDashboard from "./components/shared/sidebar";
import Dashboard from "./pages/admin/dashboard";
import AllJobs from "./pages/admin/all-jobs";
import AllInfluencers from "./pages/admin/all-influencers";
import AllBusiness from "./pages/admin/all-business";
import Notfound from "./pages/not-found";
import { Toaster } from "./components/ui/toaster";
import ProfilePage from "./pages/influencer/ProfilePage";
import CreateJobs from "./pages/business/create-jobs";
import Jobs from "./pages/business/jobs";
import GetAllInfluencers from "./pages/get-all-influencers";
import GetAllJobs from "./pages/get-all-jobs";
import GetAllBusiness from "./pages/get-all-business";
import BusinessDashboard from "./pages/business/dashboard";
import InfluencerDashboard from "./pages/influencer/influencer";
import KYCForm from "./pages/influencer/identity-verification";
import JobDetails from "./pages/admin/single-jobs";
import InfluencerData from "./pages/admin/influencer-details";
export const baseURL = "http://localhost:3000";
const App = () => {
  // axios.defaults.baseURL = "http://192.168.1.13:3000/api";
  axios.defaults.baseURL = "http://localhost:3000/api";
  return (
    <main>
      <VerificationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute allowedRoles={"admin"}>
                  <Routes>
                    <Route
                      path="/"
                      element={<SidebarDashboard></SidebarDashboard>}
                    >
                      <Route path="" element={<Dashboard />} />
                      <Route path="all-jobs" element={<AllJobs />} />
                      <Route path="all-job/:id" element={<JobDetails />} />
                      <Route
                        path="all-influencers"
                        element={<AllInfluencers />}
                      />
                      <Route
                        path="all-influencers/:id"
                        element={<InfluencerData />}
                      />
                      <Route path="all-business" element={<AllBusiness />} />
                      <Route path="profile" element={<ProfilePage />} />
                    </Route>
                  </Routes>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/influencer/*"
              element={
                <ProtectedRoute allowedRoles={"influencer"}>
                  <Routes>
                    <Route path="" element={<InfluencerDashboard />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="identity-verification" element={<KYCForm />} />
                  </Routes>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/business/*"
              element={
                <ProtectedRoute allowedRoles={"business"}>
                  <Routes>
                    <Route path="" element={<BusinessDashboard />} />
                    <Route path="create-jobs" element={<CreateJobs />} />
                    <Route path="jobs" element={<Jobs />} />
                    {/* <Route path="influencers" element={< />} /> */}
                  </Routes>
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/profile-verification/influencer"
              element={<ProfileVerification />}
            />
            <Route
              path="/profile-verification/business"
              element={<ProfileVerification />}
            />
            <Route path="/all-influencers" element={<GetAllInfluencers />} />
            <Route path="/all-jobs" element={<GetAllJobs />} />
            <Route path="/all-business" element={<GetAllBusiness />} />
            {/* <Route path="/jobs" element={<Jobs />} /> */}
            {/* <Route path="/influencers" element={<Influencers />} /> */}
            {/* <Route path="/profile-setup" element={<ProfileSetup />} /> */}
            <Route path="/not-found" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </VerificationProvider>
      <Toaster />
    </main>
  );
};

export default App;
