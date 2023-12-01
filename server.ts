import Express from "express";
const app = Express();
import env from "dotenv";
env.config();
import cors from "cors";
import morgan from "morgan";

app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: "GET,POST",
    credentials: true,
  })
);
app.listen(process.env.PORT, () => {
  console.log(`app running on port:${process.env.PORT}`);
});
