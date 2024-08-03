import { Router } from "express";
import publicController from "../controller/public.controller";

const publiccontroler = publicController;
const publicRouting = Router()
  .get("/", publicController.index)
  .get("/produk/:id", publicController.index)
  .get("/testing", publicController.testing);

export default publicRouting;
