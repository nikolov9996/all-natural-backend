import { Request, Response, Router } from "express";
import { ROUTES } from "../../routes/constants";
import { createCategory, getCategories } from "./categoryController";

const categoriesRouter = Router();

categoriesRouter
  .get(ROUTES.CATEGORIES, getCategories)
  .post(ROUTES.CATEGORIES, createCategory);

export default categoriesRouter;
