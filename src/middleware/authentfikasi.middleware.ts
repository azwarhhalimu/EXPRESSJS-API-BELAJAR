import { NextFunction, Request, Response } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
  console.log("melwatia middlweare");
  const auth = req.headers.authorization;
  if (typeof auth !== "undefined") {
    console.log(auth);
    next();
  } else {
    res.send("anda tidak boleh masuk ke halmaan ini");
  }
};

export default auth;
