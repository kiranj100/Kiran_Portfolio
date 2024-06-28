import React from "react";

function SpinnerLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-56 w-56 border-t-8 border-b-8 border-blue-500"></div>
    </div>
  );
}

export default SpinnerLoader;
