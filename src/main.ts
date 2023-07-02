import { Request, Response } from "express";
import app from "./app";
import configuration from "./config/configuration";

async function bootstrap() {
  // bootstrap
  const port = configuration.app.port || 4000;

  app.get("/", (req: Request, res: Response) => {
    res.send(`Welcome server is a live😂😂👈👈`);
  });
  app.listen(port);

  console.log(`app listening in http://localhost:${port}`);
}

bootstrap();
