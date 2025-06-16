"use client";

import dynamic from "next/dynamic";
import "react-notion-x/src/styles.css";

export const NotionRenderer = dynamic(() =>
  import("react-notion-x").then((m) => m.NotionRenderer),
  { ssr: false }
);