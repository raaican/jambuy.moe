import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const app = new Elysia()
  .use(staticPlugin({
    assets: "public",
    prefix: "/"   // IMPORTANT
  }))
  .get("/", () => Bun.file("./public/index.html"))
  .listen(3000);

console.log("Server running at http://localhost:3000");