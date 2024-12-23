import React from "react";
import UseMyFetch from "./UseMyFetch";
const Todo = () => {
  const { data, loading, error } = UseMyFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  if (loading) return <p>loading......</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      {data.map((elem) => (
        <li key={elem.id}>{elem.body}</li>
      ))}
    </>
  );
};

export default Todo;
