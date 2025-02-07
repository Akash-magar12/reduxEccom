import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url, id) => {
  const [data, setData] = useState([]); // Initialize with null to handle non-array data
  const [loading, setLoading] = useState(true); // Loading state to track fetching
  const [error, setError] = useState(null); // Error state to track errors
  const fetchData = async () => {
    try {
      const requestUrl = id ? `${url}/${id}` : url;
      const response = await axios.get(requestUrl);
      setData(response.data); // Assuming API response contains a 'data' key
    } catch (err) {
      setError(err); // Set error if request fails
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, id]); // The URL as a dependency to refetch if it changes

  return { data, loading, error }; // Return data, loading, and error for better component handling
};

export default useFetch;
