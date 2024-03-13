import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
  console.log("get request");
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  const apiKey = req.nextUrl.searchParams.get("api_key") as string;
  const path = req.nextUrl.pathname.substring(12);
  const targetUrl = `https://manage.kontent.ai/v2/${path}`;
  const reqBody = await req.json(); 
  console.log(reqBody);
  const response = await fetch(targetUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(reqBody), // Forward the original body
  });

  const data = await response.json();
  return Response.json(data);
};
