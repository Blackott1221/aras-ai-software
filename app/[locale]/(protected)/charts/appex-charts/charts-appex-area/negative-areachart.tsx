"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import {
  getGridConfig,
  getXAxisConfig,
  getYAxisConfig,
} from "@/lib/appex-chart-options";

const NegativeAreaChart = ({ height = 320 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [
    {
      name: "north",
      data: [
        {
          x: 1996,
          y: 322,
        },
        {
          x: 1997,
          y: 324,
        },
        {
          x: 1998,
          y: 329,
        },
        {
          x: 1999,
          y: 342,
        },
        {
          x: 2000,
          y: 348,
        },
        {
          x: 2001,
          y: 334,
        },
        {
          x: 2002,
          y: 325,
        },
        {
          x: 2003,
          y: 316,
        },
        {
          x: 2004,
          y: 318,
        },
        {
          x: 2005,
          y: 330,
        },
        {
          x: 2006,
          y: 355,
        },
        {
          x: 2007,
          y: 366,
        },
        {
          x: 2008,
          y: 337,
        },
        {
          x: 2009,
          y: 352,
        },
        {
          x: 2010,
          y: 377,
        },
        {
          x: 2011,
          y: 383,
        },
        {
          x: 2012,
          y: 344,
        },
        {
          x: 2013,
          y: 366,
        },
        {
          x: 2014,
          y: 389,
        },
        {
          x: 2015,
          y: 334,
        },
      ],
    },
    {
      name: "south",
      data: [
        {
          x: 1996,
          y: 162,
        },
        {
          x: 1997,
          y: 90,
        },
        {
          x: 1998,
          y: 50,
        },
        {
          x: 1999,
          y: 77,
        },
        {
          x: 2000,
          y: 35,
        },
        {
          x: 2001,
          y: -45,
        },
        {
          x: 2002,
          y: -88,
        },
        {
          x: 2003,
          y: -120,
        },
        {
          x: 2004,
          y: -156,
        },
        {
          x: 2005,
          y: -123,
        },
        {
          x: 2006,
          y: -88,
        },
        {
          x: 2007,
          y: -66,
        },
        {
          x: 2008,
          y: -45,
        },
        {
          x: 2009,
          y: -29,
        },
        {
          x: 2010,
          y: -45,
        },
        {
          x: 2011,
          y: -88,
        },
        {
          x: 2012,
          y: -132,
        },
        {
          x: 2013,
          y: -146,
        },
        {
          x: 2014,
          y: -169,
        },
        {
          x: 2015,
          y: -184,
        },
      ],
    },
  ];
  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: [
      colors.primary,
      colors.info,
    ],
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
    grid: getGridConfig(),

    fill: {
      type: "gradient",
      colors: [
        colors.primary,
        colors.info,
      ],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.1,
        stops: [50, 100, 0],
      },
    },
    yaxis: getYAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    xaxis: getXAxisConfig(
      mode === 'light' ? colors["default-600"] : colors["default-300"]
    ),
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    legend: {
      labels: {
        colors: mode === 'light' ? colors["default-600"] : colors["default-300"],
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        width: 10,
        height: 10,
        radius: 10,
        offsetX: config.isRtl ? 5 : -5
      }
    },
  };
  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={height}
      width={"100%"}
    />
  );
};

export default NegativeAreaChart;
