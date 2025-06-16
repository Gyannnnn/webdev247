
"use server"

import { Client} from "@notionhq/client"
import { NotionAPI } from "notion-client";


export async function getNotionClient() {
  return new Client({
    auth:"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"// ✅ NEVER hardcode your secret!
  })
}


const notion1 = new NotionAPI();

export async function getBlogByTitle(blogNotionId: string) {
  const recordMap = await notion1.getPage(blogNotionId);
  return recordMap;
}