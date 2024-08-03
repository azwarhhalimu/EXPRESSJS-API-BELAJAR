import bodyParser from "body-parser";
import Express, { Request, Response, urlencoded } from "express";
import publicRouting from "./routing/public.route";
import userRoute from "./routing/user.route";
import auth from "./middleware/authentfikasi.middleware";
const app = Express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", publicRouting);
app.use("/user", userRoute);

app.listen(2000, () => {
  console.log("Aplikasi berjalan di port 2000");
});
