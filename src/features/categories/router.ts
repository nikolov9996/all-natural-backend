import { Request, Response, Router } from "express";

const categoriesRouter = Router();

categoriesRouter.get("/categories", (req: Request, res: Response) => {
  res.send("Categories");
});

export default categoriesRouter