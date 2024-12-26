import { Response, Request, NextFunction } from "express";

export default function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.log("====================================");
  console.log(req.method, req.path);
  console.log("QUERY: " + JSON.stringify(req.query));
  console.log("BODY: " + JSON.stringify(req.body));
  console.log("====================================");
  next();
}
