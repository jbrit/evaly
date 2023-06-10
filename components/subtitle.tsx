import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Subtitle: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      style={{ color: "#8B909A", fontSize: "14px" }}
      className={!className ? "font-light" : "font-light " + className}
    >
      {children}
    </div>
  );
};

export default Subtitle;
