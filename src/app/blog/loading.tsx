import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[90vw] h-screen flex flex-col gap-4 ">
        <div className="w-screen pt-20 flex flex-col gap-2">
          <Skeleton className="w-32 h-14" />
          <Skeleton className="w-[50vw] h-6" />
        </div>
        <div className=" flex justify-between">
          <div className="w-[25vw] h-[50vh] flex flex-col gap-2">
            <div>
              <Skeleton className="w-[25vw] h-[25vh] rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="h-14 w-20" />
              <Skeleton className="w-full h-4" />
              <div className="flex gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-10 w-[22vw] " />
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[50vh] flex flex-col gap-2">
            <div>
              <Skeleton className="w-[25vw] h-[25vh] rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="h-14 w-20" />
              <Skeleton className="w-full h-4" />
              <div className="flex gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-10 w-[22vw] " />
              </div>
            </div>
          </div>
          <div className="w-[25vw] h-[50vh] flex flex-col gap-2">
            <div>
              <Skeleton className="w-[25vw] h-[25vh] rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="h-14 w-20" />
              <Skeleton className="w-full h-4" />
              <div className="flex gap-4">
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-10 w-[22vw] " />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
