import { Router } from "express";
import UserController from "../controller/User.controller";

const user_controller = UserController;
const userRoute = Router()
  .get("/", UserController.getUser)
  .get("/produk", UserController.getProduk)
  .delete("/produk/:id", UserController.deleteProduk)
  .put("/produk/:id", UserController.updateProduk)
  .post("/produk", UserController.saveProduk);
export default userRoute;
