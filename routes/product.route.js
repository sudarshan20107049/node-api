import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.route('/products').get(getProducts).post(createProduct);
productRouter.route('/products/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

export default productRouter