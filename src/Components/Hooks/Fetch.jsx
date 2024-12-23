import React, { useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // fetch api - https://jsonplaceholder.typicode.com/todos
  const url = "https://jsonplaceholder.typicode.com/todos";
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>loading......</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <ul>{JSON.stringify(data)}</ul>
    </div>
  );
}

export default Fetch;
