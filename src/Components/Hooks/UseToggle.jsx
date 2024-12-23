import React, { useState } from "react";

const UseToggle = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };
  const stopLoading = () => {
    setIsLoading(false);
  };

  return { isLoading, startLoading, stopLoading };
};

export default UseToggle;
