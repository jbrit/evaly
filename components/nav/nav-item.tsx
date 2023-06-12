import classNames from "classnames";
import React from "react";
import SmartHome from "../svgs/smart-home";

type Props = {
  name: string;
  active?: boolean;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

const NavItem: React.FC<Props> = ({ name, active, Icon = SmartHome }) => {
  return (
    <div
      style={{
        paddingTop: "9px",
        paddingBottom: "9px",
        color: active ? "#23272E" : "#8B909A",
        background: active ? "#F3F4F8" : "transparent",
        fontSize: "15px",
        borderRadius: "6px",
      }}
      className={classNames(
        "px-4 cursor-pointer font-normal select-none flex",
        {
          "font-semibold": active,
        }
      )}
    >
      <Icon
        style={{
          stroke: active ? "#23272E" : "#8B909A",
        }}

        className="mr-2"
      />
      <span>{name}</span>
    </div>
  );
};

export default NavItem;
