"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const WithDelay = () => {
  return (
    <div className="flex flex-wrap  gap-3">
      <TooltipProvider delayDuration={2000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button  variant="outline" color="info" >Delay Open (2000ms)</Button>
          </TooltipTrigger>
          <TooltipContent color="info">
            <p>Tooltip Delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={1000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button  variant="outline" color="warning">Hover Me (delay 1000ms)</Button>
          </TooltipTrigger>
          <TooltipContent color="warning">
            <p>Tooltip Delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider >
        <Tooltip>
          <TooltipTrigger asChild>
            <Button  variant="outline" color="destructive">Then Hover me</Button>
          </TooltipTrigger>
          <TooltipContent color="destructive">
            <p>Tooltip Delay</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default WithDelay;