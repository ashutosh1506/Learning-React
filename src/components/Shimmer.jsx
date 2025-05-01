import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-5 py-5">
      {[...Array(17)].map((_, index) => (
        <div
          key={index}
          className="w-[250px] h-[300px] bg-gradient-to-r from-[#f6f7f8] via-[#edeef1] to-[#f6f7f8] bg-[length:800px_100%] rounded-md animate-[shimmer_1.5s_infinite_linear] relative before:content-[''] before:absolute before:top-[65%] before:left-[10px] before:right-[10px] before:h-[20px] before:bg-[rgba(255,255,255,0.6)] before:rounded-sm after:content-[''] after:absolute after:top-[80%] after:left-[10px] after:right-[40%] after:h-[15px] after:bg-[rgba(255,255,255,0.6)] after:rounded-sm"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
