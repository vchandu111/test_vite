import React, { useEffect,useState } from "react";

const UseMyFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        //startLoading()
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.log(err);
      } finally {
          setLoading(false);
          //StopLoading()
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};


export default UseMyFetch;
