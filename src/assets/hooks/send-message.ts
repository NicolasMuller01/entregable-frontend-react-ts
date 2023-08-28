import { useCallback, useEffect, useState } from "react";

type GetDataParam = {
  endpoint: "testimonial" | "subscription";
};

const BASE_URL = "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";

const useGetData = <T>(params: GetDataParam) => {
  const [result, setResult] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleGetData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/api/${params.endpoint}`);
      const data = await response.json();
      setResult(data);
    } catch (err) {
      const currentError = err as { message: string };
      setError(currentError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetData();
  }, []);

  return {
    result,
    loading,
    error,
  };
};

export default useGetData;
