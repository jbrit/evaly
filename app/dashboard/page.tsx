import Card from "@/components/card";
import Metric from "@/components/metric";
import Subtitle from "@/components/subtitle";
import { Grid, Col, BarChart, AreaChart } from "@tremor/react";
import {
  discountedAmount,
  last30Minutes,
  sessions,
  totalOrders,
  totalProfits,
  totalSalesCost,
} from "./constants";
import Reports from "@/components/dashboard/reports";
import Change from "@/components/change";
import { BellIcon } from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <>
      <header className="mb-11 flex items-center">
        <span className="text-2xl font-bold">Dashboard</span>
        <span className="ml-auto relative cursor-pointer">
          <BellIcon color="#4B465C" height="26px" />
          <span
            className=" inline-flex items-center justify-center absolute rounded-full text-white select-none"
            style={{
              background: "#EA5455",
              height: "18px",
              width: "18px",
              top: "-6px",
              right: "-6px",
                fontSize: "13px"
            }}
          >
            4
          </span>
        </span>
        <div
          className="ml-8 relative"
          style={{ height: "38px", width: "38px" }}
        >
          <span
            style={{
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #7367F0",
            }}
            className="inline-block h-full w-full rounded-full"
          ></span>
          {/* green circle */}
          <span
            className="border-2 border-white inline-block absolute rounded-full"
            style={{
              background: "#28C76F",
              height: "12px",
              width: "12px",
              bottom: "0.75px",
              right: 0,
            }}
          ></span>
        </div>
      </header>
      <Grid numItems={7} className="gap-7 mb-7">
        <Col numColSpan={4}>
          <Card title="Total Sales & Costs" showTitle={false}>
            <Grid numItems={3} className="gap-6">
              <Col style={{ paddingBottom: "9px" }} numColSpan={1}>
                <div className="flex flex-col h-full">
                  <div className="text-lg font-semibold mb-2">
                    Total Sales & Costs
                  </div>
                  <Subtitle className="mb-4">Last 7 days</Subtitle>
                  <div className="mt-auto mb-4 flex items-baseline">
                    <Metric>$350K</Metric>
                    <span
                      style={{ color: "#0FB7FF" }}
                      className="block ml-3 text-lg font-bold"
                    >
                      $235K
                    </span>
                  </div>
                  <div className="flex">
                    <Change color="green" direction="up">
                      8.56K
                    </Change>
                    <Subtitle>vs Last 7 days</Subtitle>
                  </div>
                </div>
              </Col>
              <Col numColSpan={2}>
                <AreaChart
                  className="h-48"
                  data={totalSalesCost}
                  index="date"
                  categories={["Sales", "Cost"]}
                  colors={["indigo", "cyan"]}
                  showYAxis={false}
                  curveType="natural"
                  showGridLines={false}
                />
              </Col>
            </Grid>
          </Card>
        </Col>
        <Col numColSpan={3}>
          <Card title="Sessions">
            <Grid numItems={8} className="gap-6 h-full">
              <Col style={{ paddingBottom: "9px" }} numColSpan={3}>
                <div className="flex flex-col h-full">
                  <Subtitle className="mb-8">Last 7 days</Subtitle>
                  <div className="mt-auto mb-4">
                    <Metric>16.5K</Metric>
                  </div>
                  <div className="flex">
                    <Change color="red" direction="down">
                      3%
                    </Change>
                    <Subtitle>vs Last 7 days</Subtitle>
                  </div>
                </div>
              </Col>
              <Col numColSpan={5}>
                <AreaChart
                  className="h-36"
                  data={sessions}
                  index="date"
                  categories={["Sessions"]}
                  colors={["red"]}
                  showYAxis={false}
                  showXAxis={false}
                  showLegend={false}
                  curveType="natural"
                  showGridLines={false}
                />
              </Col>
            </Grid>
          </Card>
        </Col>
      </Grid>
      <Grid numItems={12} className="gap-7 mb-7">
        <Col numColSpan={4}>
          <Card title="Total Orders">
            <Grid numItems={8} className="gap-6 h-full">
              <Col style={{ paddingBottom: "9px" }} numColSpan={3}>
                <div className="flex flex-col h-full">
                  <Subtitle className="mb-8">Last 7 days</Subtitle>
                  <div className="mt-auto mb-4">
                    <Metric>25.7K</Metric>
                  </div>
                  <div className="flex flex-col">
                    <Change color="green" direction="up">
                      6%
                    </Change>
                    <Subtitle>vs Last 7 days</Subtitle>
                  </div>
                </div>
              </Col>
              <Col numColSpan={5}>
                <AreaChart
                  className="h-36"
                  data={totalOrders}
                  index="date"
                  categories={["Total Orders"]}
                  colors={["green"]}
                  showYAxis={false}
                  showXAxis={false}
                  showLegend={false}
                  curveType="natural"
                  showGridLines={false}
                />
              </Col>
            </Grid>
          </Card>
        </Col>
        <Col numColSpan={4}>
          <Card title="Total Profit">
            <Grid numItems={8} className="gap-6 h-full">
              <Col style={{ paddingBottom: "9px" }} numColSpan={3}>
                <div className="flex flex-col h-full">
                  <Subtitle className="mb-8">Last 7 days</Subtitle>
                  <div className="mt-auto mb-4">
                    <Metric>50K</Metric>
                  </div>
                  <div className="flex flex-col">
                    <Change color="green" direction="up">
                      12%
                    </Change>
                    <Subtitle>vs Last 7 days</Subtitle>
                  </div>
                </div>
              </Col>
              <Col numColSpan={5}>
                <AreaChart
                  className="h-36"
                  data={totalProfits}
                  index="date"
                  categories={["Total Profits"]}
                  colors={["green"]}
                  showYAxis={false}
                  showXAxis={false}
                  showLegend={false}
                  curveType="natural"
                  showGridLines={false}
                />
              </Col>
            </Grid>
          </Card>
        </Col>
        <Col numColSpan={4}>
          <Card title="Discounted Amount">
            <Grid numItems={8} className="gap-6 h-full">
              <Col style={{ paddingBottom: "9px" }} numColSpan={3}>
                <div className="flex flex-col h-full">
                  <Subtitle className="mb-8">Last 7 days</Subtitle>
                  <div className="mt-auto mb-4">
                    <Metric>12K</Metric>
                  </div>
                  <div className="flex flex-col">
                    <Change color="red" direction="up">
                      2%
                    </Change>
                    <Subtitle>vs Last 7 days</Subtitle>
                  </div>
                </div>
              </Col>
              <Col numColSpan={5}>
                <AreaChart
                  className="h-36"
                  data={discountedAmount}
                  index="date"
                  categories={["Discounted Amount"]}
                  colors={["red"]}
                  showYAxis={false}
                  showXAxis={false}
                  showLegend={false}
                  curveType="natural"
                  showGridLines={false}
                />
              </Col>
            </Grid>
          </Card>
        </Col>
      </Grid>
      <Grid numItems={7} className="gap-7 mb-7">
        <Col numColSpan={4}>
          <Card title="Reports">
            <Subtitle className="mb-8">Last 7 days</Subtitle>
            <Reports />
          </Card>
        </Col>
        <Col numColSpan={3}>
          <Card title="Users in last 30 minutes">
            <Metric className="mb-4">16.5K</Metric>
            <Subtitle>Users per minute</Subtitle>
            <BarChart
              className="h-16"
              data={last30Minutes}
              categories={["users"]}
              index="time"
              showXAxis={false}
              showYAxis={false}
              showLegend={false}
              showGridLines={false}
            />
          </Card>
        </Col>
      </Grid>
    </>
  );
}
