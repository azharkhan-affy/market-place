import { useEffect, useState } from "react";
import Title from "../../components/title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import axios from "axios";
import { Input } from "../../components/ui/input";
import { Check, X } from "lucide-react";
import { formatDate } from "../../lib/formatDate";
import { Link } from "react-router-dom";

const AllInfluencers = () => {
  const [influencers, setInfluencers] = useState([]);
  const fetchInfluencers = async () => {
    try {
      const res = await axios.get("admin/get-all-influencers", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(res);
      setInfluencers(res.data.meta);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchInfluencers();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <Title title={"All Influencers"} />
        <div className="hidden md:flex">
          <Input
            className="bg-white md:w-[280px]"
            placeholder="search influencer here"
          />
        </div>
      </div>

      <div className="p-2 bg-white shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Domain</TableHead>
              <TableHead>Instagram</TableHead>
              <TableHead>Facebook</TableHead>
              <TableHead>Followers</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Updated At</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {influencers?.map((influencer, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link to={"/admin/all-influencers/" + influencer?._id}>
                    {influencer.name || "Na"}
                  </Link>
                </TableCell>
                <TableCell>{influencer.email || "Na"}</TableCell>
                <TableCell>{influencer.domain || "Na"}</TableCell>
                <TableCell>@{influencer.instagramHandle || "Na"}</TableCell>
                <TableCell>@{influencer.facebookHandle || "Na"}</TableCell>
                <TableCell>
                  {influencer.followers.toLocaleString() || "Na"}
                </TableCell>
                <TableCell>
                  {influencer.verify ? (
                    <span className="text-green-500 font-semibold">
                      <Check /> Yes
                    </span>
                  ) : (
                    <span className="text-red-500 ">
                      <X /> No
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {formatDate(influencer.createdAt) || "Na"}
                </TableCell>
                <TableCell>
                  {formatDate(influencer.updatedAt) || "Na"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllInfluencers;
