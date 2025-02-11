import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${endpoint}`, {
          headers: {
            "Content-Type": "application/json",
          },
        }); // Replace with your API URL
        setData(response.data.meta);
        console.log(response.data.meta);
      } catch (err) {
        console.error(err.message);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;
