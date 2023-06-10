import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

type Props = {
  color: "green" | "red";
  direction: "up" | "down";
  children?: React.ReactNode;
};

const Change: React.FC<Props> = ({ children, color, direction }) => {
  const colorHex = color === "red" ? "#EA5455" : "#28C76F";
  return (
    <span className="flex items-center mr-1" style={{ color: colorHex, fontSize: "14px" }}>
      {direction === "up" ? (
        <ArrowUpIcon className="inline-block mr-1" strokeWidth={"2px"} style={{ height: "14px" }} />
      ) : (
        <ArrowDownIcon className="inline-block mr-1" strokeWidth={"2px"} style={{ height: "14px" }} />
      )}
      <>{children}</>
    </span>
  );
};

export default Change;
