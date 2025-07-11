"use client";

import { useTheme } from "next-themes";
import { colors } from "@/lib/colors";
import { useConfig } from "@/hooks/use-config";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Brush,
  AreaChart,
  Area,
} from "recharts";
import CustomTooltip from "./custom-tooltip";

const SynchronizedLineChart = ({ height = 300 }) => {

  const { theme: mode } = useTheme();

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

  return (
    <>
      <ResponsiveContainer height={height}>
        <LineChart height={height} data={data} syncId="anyId">
          <CartesianGrid
            stroke='none'
            strokeDasharray="1 1"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{
              fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
              fontSize: "12px",
            }}
            tickLine={false}
            stroke='none'
            axisLine={false}
          />
          <YAxis
            tick={{
              fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
              fontSize: "12px",
            }}
            tickLine={false}
            stroke='none'
          />
          <Tooltip content={CustomTooltip} />
          <Line
            type="monotone"
            dataKey="uv"
            dot={{
              stroke: colors.primary,
              strokeWidth: 2,
            }}
            stroke={colors.primary}
          />
        </LineChart>
      </ResponsiveContainer>

      <p className="text-sm ml-14 mt-2 mb-5 text-card-foreground ">
        Maybe some other content
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart width={500} height={200} data={data} syncId="anyId">
          <CartesianGrid
            stroke='none'
            strokeDasharray="1 1"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{
              fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
              fontSize: "12px",
            }}
            tickLine={false}
            stroke='none'
            axisLine={false}
          />
          <YAxis
            tick={{
              fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
              fontSize: "12px",
            }}
            tickLine={false}
            stroke='none'
          />
          <Tooltip content={CustomTooltip} />
          <Line
            type="monotone"
            dataKey="pv"
            stroke={colors.info}
            dot={{
              stroke: colors.info,
              strokeWidth: 2,
            }}
          />
          <Brush />
        </LineChart>
      </ResponsiveContainer>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} syncId="anyId">
          <CartesianGrid
            stroke='none'
            strokeDasharray="1 1"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{
              fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
              fontSize: "12px",
            }}
            tickLine={false}
            stroke='none'
            axisLine={false}
          />
          <YAxis
            tick={{
              fill: mode === 'light' ? colors["default-600"] : colors["default-300"],
              fontSize: "12px",
            }}
            tickLine={false}
            stroke='none'
          />
          <Tooltip content={CustomTooltip} />
          <Area
            type="monotone"
            dataKey="pv"
            stroke={colors.primary}
            fill={colors.info}
            opacity={0.2}
            dot={{
              stroke: colors.primary,
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default SynchronizedLineChart;
