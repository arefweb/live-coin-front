import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const SimpleBarChart = () => {
  return (
    <BarChart
      width={350}
      height={150}
      data={data}
      margin={{
        top: 30,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorUvB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#47c2be" stopOpacity={0.5} />
          <stop offset="95%" stopColor="#47c2be" stopOpacity={0} />
        </linearGradient>
      </defs>
      {/* <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis /> */}
      <Tooltip
        content={<CustomTooltip />}
        wrapperStyle={{ outline: "none" }}
        cursor={{ fill: "#293140" }}
      />
      {/* <Legend /> */}
      <Bar dataKey="uv" fill="url(#colorUvB)" />
    </BarChart>
  );
}

interface ICustom {
  active?: any;
  payload?: any;
  label?: any;
}

const CustomTooltip = ({ active, payload, label }: ICustom) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid transparent",
          outline: "1px solid transparent",
          width: "150px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{`Volume : $${payload[0].value}`}</p>
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
      </div>
    );
  }

  return null;
};

export default SimpleBarChart