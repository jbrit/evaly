import React from "react";

type Props = {
  title: string;
  showTitle?: boolean;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, children, showTitle }) => {
  return (
    <div className="h-full p-6 rounded-2xl bg-white flex flex-col">
      {showTitle && <div className="text-lg font-semibold mb-2">{title}</div>}
      {children}
    </div>
  );
};
Card.defaultProps = { showTitle: true };
export default Card;
