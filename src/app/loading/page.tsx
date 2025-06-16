import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function page() {
  return (
    <div className="h-screen w-screen  flex items-center justify-center">
      <div className="sm:w-[65vw] w-[96vw]  h-screen flex flex-col">
        <div className="w-full pt-10">
          <Skeleton className="w-40 h-6" />
        </div>
        <div className="flex flex-col w-full pt-10 gap-4">
          <Skeleton className="w-[40vw] h-12" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="w-full pt-12">
          <Skeleton className="w-full h-[40vh]" />
        </div>
      </div>
    </div>
  );
}
