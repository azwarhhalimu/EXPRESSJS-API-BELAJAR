import { Request, Response } from "express";

class PublicController {
  index(req: Request, res: Response) {
    res.send("ini adalah halaman index");
  }
  testing(req: Request, res: Response) {
    res.send("ini adalah halaman testing");
  }
}
export default new PublicController();
