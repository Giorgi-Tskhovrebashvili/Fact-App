import React, { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      ) : (
        <p>Content Loaded!</p>
      )}
    </div>
  );
};

export default Loader;
