import { useState } from "react";
const ReadMore = ({ text, limit = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const isTooLong = text.length > limit;

  return (
    <p className="font-semibold text-[16px] leading-[21px] tracking-[-0.4px] text-[rgba(2,6,12,0.6)]">
      {isExpanded || !isTooLong ? text : text.slice(0, limit) + "..."}
      {isTooLong && (
        <span
          onClick={toggleReadMore}
          className="text-black cursor-pointer font-semibold"
        >
          {isExpanded ? " less" : " more"}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
