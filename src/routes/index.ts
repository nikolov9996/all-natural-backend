import { Request, Response, Router } from "express";
import categoriesRouter from "../features/categories/router";
import productsRouter from "../features/products/router";

const mainRouter = Router();

mainRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

mainRouter.use("/", categoriesRouter);
mainRouter.use("/", productsRouter);

export default mainRouter;
