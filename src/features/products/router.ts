import { Request, Response, Router } from "express";

const productsRouter = Router();

productsRouter.get("/products", (req: Request, res: Response) => {
  res.send("Products");
});

export default productsRouter