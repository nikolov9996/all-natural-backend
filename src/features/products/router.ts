import { Request, Response, Router } from "express";
import { ROUTES } from "../../routes/constants";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "./productsController";

const productsRouter = Router();

productsRouter
  .get(ROUTES.PRODUCTS, getProducts)
  .post(ROUTES.CREATE_PRODUCT, createProduct)
  .put(ROUTES.UPDATE_PRODUCT, updateProduct);

export default productsRouter;
