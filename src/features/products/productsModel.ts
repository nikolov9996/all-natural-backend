import { model, Schema } from "mongoose";
import { IProduct } from "./productsInterface";

const productsScheme = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export const ProductsModel = model<IProduct>("Products", productsScheme);
