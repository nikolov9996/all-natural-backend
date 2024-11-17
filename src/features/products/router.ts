import { Request, Response, Router } from "express";
import { ROUTES } from "../../routes/constants";

const productsRouter = Router();

productsRouter.get(ROUTES.PRODUCTS, (req: Request, res: Response) => {
  res.send("Products");
});

export default productsRouter;
