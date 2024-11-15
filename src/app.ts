import express from "express";
import mainRouter from "./routes";

export const app = express();
const port = process.env.PORT || 3000;

app.use(mainRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
