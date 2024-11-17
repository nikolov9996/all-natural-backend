import { Request, Response } from "express";

import { Category } from "./categoryModel";

async function createCategory(req: Request, res: Response) {
  const data = req.body;
  try {
    const record = await Category.create(data);
    await record.save();
    res.send("Category Added!");
  } catch (error) {
    res.send("Something went wrong").status(500);
  }
}

async function getCategories(req: Request, res: Response) {
  try {
    const records = await Category.find({}).exec();
    res.send(records);
  } catch (error) {
    res.send("Something went wrong").status(500);
  }
}

export { createCategory, getCategories };
