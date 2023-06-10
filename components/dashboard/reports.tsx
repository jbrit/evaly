"use client";

import {
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Flex,
  Text,
  ProgressBar,
} from "@tremor/react";
import React, { useState } from "react";

const Reports: React.FC = () => {
  const [index, setIndex] = useState(0);
  const activeStyle = {
    background:
      "linear-gradient(180deg, rgba(15, 96, 255, 0) 0%, rgba(15, 96, 255, 0.04) 100%)",
  };
  return (
    <TabGroup index={index} onIndexChange={setIndex}>
      <TabList className="grid grid-cols-5">
        <Tab style={{ ...(index === 0 && activeStyle) }}>
          <div className="flex flex-col items-start py-3">
            <span
              style={{ color: "#23272E" }}
              className="text-2xl mb-2 font-bold"
            >
              24k
            </span>
            <span
              style={{ fontSize: "13px", color: "#8B909A", fontWeight: 500 }}
            >
              Customers
            </span>
          </div>
        </Tab>
        <Tab style={{ ...(index === 1 && activeStyle) }}>
          <div className="flex flex-col items-start py-3">
            <span
              style={{ color: "#23272E" }}
              className="text-2xl mb-2 font-bold"
            >
              3.5k
            </span>
            <span
              style={{ fontSize: "13px", color: "#8B909A", fontWeight: 500 }}
            >
              Total Products
            </span>
          </div>
        </Tab>
        <Tab style={{ ...(index === 2 && activeStyle) }}>
          <div className="flex flex-col items-start py-3">
            <span
              style={{ color: "#23272E" }}
              className="text-2xl mb-2 font-bold"
            >
              0.5k
            </span>
            <span
              style={{ fontSize: "13px", color: "#8B909A", fontWeight: 500 }}
            >
              Stock Products
            </span>
          </div>
        </Tab>
        <Tab style={{ ...(index === 3 && activeStyle) }}>
          <div className="flex flex-col items-start py-3">
            <span
              style={{ color: "#23272E" }}
              className="text-2xl mb-2 font-bold"
            >
              2.5k
            </span>
            <span
              style={{ fontSize: "13px", color: "#8B909A", fontWeight: 500 }}
            >
              Out of Stock
            </span>
          </div>
        </Tab>
        <Tab style={{ ...(index === 4 && activeStyle) }}>
          <div className="flex flex-col items-start py-3">
            <span
              style={{ color: "#23272E" }}
              className="text-2xl mb-2 font-bold"
            >
              250k
            </span>
            <span
              style={{ fontSize: "13px", color: "#8B909A", fontWeight: 500 }}
            >
              Revenue
            </span>
          </div>
        </Tab>
      </TabList>
      <TabPanels>
        {/* Customers */}
        <TabPanel>
          <div className="mt-10">Customers</div>
        </TabPanel>
        {/* Total Products */}
        <TabPanel>
          <div className="mt-10">Total Products</div>
        </TabPanel>
        {/* Stock Products */}
        <TabPanel>
          <div className="mt-10">Stock Products</div>
        </TabPanel>
        {/* Out of Stock */}
        <TabPanel>
          <div className="mt-10">Out of Stock</div>
        </TabPanel>
        {/* Revenue */}
        <TabPanel>
          <div className="mt-10">Revenue</div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default Reports;
