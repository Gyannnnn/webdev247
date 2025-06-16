
"use server"

import { Client} from "@notionhq/client"
import { NotionAPI } from "notion-client";


export async function getNotionClient() {
  return new Client({
    auth:process.env.NOTION_INTEGRATION_SECRET!
  })
}


const notion1 = new NotionAPI();

export async function getBlogByTitle(blogNotionId: string) {
  const recordMap = await notion1.getPage(blogNotionId);
  return recordMap;
}