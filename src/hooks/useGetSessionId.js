import { useEffect, useState } from "react";

const useGetSessionId = () => {
  const [sessionId, setSessionId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const storedSessionId = sessionStorage.getItem("sessionId");
        if (storedSessionId) {
          setSessionId(storedSessionId);
        } else {
          const response = await fetch(
            "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/createsession"
          );

          if (!ignore) {
            if (!response.ok) {
              setIsError(true);
            } else {
              const newData = await response.text();
              if (!storedSessionId || !sessionId) {
                setSessionId(newData);
                sessionStorage.setItem("sessionId", newData);
              }
            }
          }
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return { sessionId, isError, isLoading };
};

export default useGetSessionId;
