import React from "react";
import EvalyLogo from "../svgs/logo";
import IndentDecrease from "../svgs/indent-decrease";
import Section from "./section";
import NavItem from "./nav-item";
import ShoppingCart from "../svgs/shopping-cart";
import Users from "../svgs/users";
import Ticket from "../svgs/ticket";
import FileText from "../svgs/file-text";
import Star from "../svgs/star";
import CirclePlus from "../svgs/circle-plus";
import Box from "../svgs/box";
import UserCircle from "../svgs/user-circle";
import Settings from "../svgs/settings";

const Navbar = () => {
  return (
    <>
      <aside
        className="min-h-screen shrink-0"
        style={{ width: "250px", backgroundColor: "#ffffff" }}
      ></aside>
      <aside
        className="min-h-screen fixed z-10"
        style={{ width: "250px", backgroundColor: "#ffffff" }}
      >
        <div className="px-3 pt-5 flex items-center">
          <EvalyLogo className="mr-2.5" />
          <span style={{ color: "#23272E" }} className="font-bold text-2xl select-none">
            evaly
          </span>
          <IndentDecrease className="ml-auto cursor-pointer" />
        </div>
        <div style={{ height: "calc(100vh - 52px)", overflow: "auto" }}>
          <Section title="Main Menu" />
          <div className="grid gap-2 px-3">
            <NavItem active name="Dashboard" />
            <NavItem Icon={ShoppingCart} name="Order Management" />
            <NavItem Icon={Users} name="Customers" />
            <NavItem Icon={Ticket} name="Categories" />
            <NavItem Icon={FileText} name="Transaction" />
            <NavItem Icon={Star} name="Brand" />
          </div>
          <Section title="Products" />
          <div className="grid gap-2 px-3">
            <NavItem Icon={CirclePlus} name="Add Products" />
            <NavItem Icon={Box} name="Product List" />
          </div>
          <Section title="Admin" />
          <div className="grid gap-2 px-3">
            <NavItem Icon={UserCircle} name="Manage Admins" />
            <NavItem Icon={Settings} name="Admin Roles" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
