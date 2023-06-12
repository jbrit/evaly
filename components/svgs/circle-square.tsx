import React from "react";

const CircleSquare: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="8.70833"
      cy="8.70833"
      r="5.95833"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="8.70833"
      cy="8.70833"
      r="5.95833"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="9.16663"
      y="9.16667"
      width="10.0833"
      height="10.0833"
      rx="2"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="9.16663"
      y="9.16667"
      width="10.0833"
      height="10.0833"
      rx="2"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CircleSquare