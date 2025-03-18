import React from "react";
import dynamic from "next/dynamic";
import TopNavBar from "@/components/TopNavBar";
import ChatArea from "@/components/ChatArea";
import config from "@/config";

const LeftSidebar = dynamic(() => import("@/components/LeftSidebar"), {
  ssr: false,
});
const RightSidebar = dynamic(() => import("@/components/RightSidebar"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <TopNavBar />
      <div className="flex flex-col md:flex-row flex-1 overflow-hidden h-screen w-full">
        <div className="order-2 md:order-1 w-full md:w-auto md:pr-0">
          {config.includeLeftSidebar && <LeftSidebar />}
        </div>
        <div className="order-1 md:order-2 flex-1">
          <ChatArea />
        </div>
        <div className="order-3">
          {config.includeRightSidebar && <RightSidebar />}
        </div>
      </div>
    </div>
  );
}
