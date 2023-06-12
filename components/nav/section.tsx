import React from "react";

type Props = {
  title: string;
};

const Section: React.FC<Props> = ({ title }) => {
  return (
    <div
      style={{
        paddingTop: "30px",
        paddingBottom: "15px",
        fontSize: "11px",
        lineHeight: "14px",
        color: "#8B909A"
      }}
      className="pl-4 uppercase font-normal"
    >
      {title}
    </div>
  );
};

export default Section;
