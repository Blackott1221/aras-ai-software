"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { colors } from "@/lib/colors";
import { useTheme } from "next-themes";
import { hexToRGB } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";

const ImagePie = ({ height = 350 }) => {
  const [config] = useConfig();
  const { theme: mode } = useTheme();


  const series = [44, 33, 54, 45];

  const options: any = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "20px",
      },
    },
    colors: [
      colors.primary,
      colors.info,
      colors.success,
      colors.primary,
      colors.secondary,
    ],
    fill: {
      type: "image",
      opacity: 0.85,
      image: {
        src: [
          "/images/chart/chart-5.avif",
          "/images/chart/chart-2.jpg",
          "/images/chart/chart-3.jpg",
          "/images/chart/chart-1.png",
        ],
        width: 25,
        imagedHeight: 25,
      },
    },
    stroke: {
      width: 4,
    },
    tooltip: {
      theme: mode === "dark" ? "dark" : "light",
    },
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
      type="pie"
      height={height}
      width={"100%"}
    />
  );
};

export default ImagePie;
