import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

const Notfound = () => {
  return (
    <div className="bg-primary-700 min-h-screen flex items-center justify-center">
      <Card className="p-8">
        <CardHeader>
          <CardTitle className="text-center">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 flex items-center justify-center flex-col">
          <CardDescription>Go To Home</CardDescription>
          <Button variant="destructive" asChild>
            <Link to={"/"} className="">
              Redirect To Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notfound;
