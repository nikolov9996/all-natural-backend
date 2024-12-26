import { Request, Response } from "express";
import { ProductsModel } from "./productsModel";

async function getProducts(req: Request, res: Response) {
  try {
    const products = await ProductsModel.find({}).exec();
    res.send(products);
  } catch (error) {
    res.send("Something went wrong").status(500);
  }
}

async function createProduct(req: Request, res: Response) {
  const data = req.body;
  try {
    const record = await ProductsModel.create(data);
    await record.save();
    res.send("Product Added!");
  } catch (error) {
    res.send("Something went wrong").status(500);
  }
}

async function updateProduct(req: Request, res: Response) {
  const data = req.body;
  try {
    const record = await ProductsModel.findByIdAndUpdate(data.id, data, {
      returnOriginal: false,
    }).exec();
    res.send(record);
  } catch (error) {
    res.send("Something went wrong").status(500);
  }
}

export { createProduct, updateProduct, getProducts };
