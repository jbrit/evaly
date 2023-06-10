import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Metric: React.FC<Props> = ({ children, className }) => {
  return (
    <span
      style={{ color: "#23272E", fontSize: "2rem", lineHeight: "2rem" }}
      className={className ? "font-bold " + className : "font-bold"}
    >
      {children}
    </span>
  );
};

export default Metric;
