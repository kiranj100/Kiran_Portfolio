import React from "react";

function SpinnerLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-36 w-36 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
}

export default SpinnerLoader;
