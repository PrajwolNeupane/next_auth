import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function getDataFromToken(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken:any = jwt.verify(token,process.env.TOEKN_SECRET!);
    return decodedToken.id;
  } catch (e: any) {
    console.log(e.message);
  }
}
