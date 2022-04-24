import { Application } from "https://deno.land/x/abc@v1.3.2/mod.ts";
import { renderFile } from "https://deno.land/x/dejs@0.10.1/mod.ts";
import { readAll } from "https://deno.land/std@0.110.0/io/util.ts";

const app = new Application();

console.log("http://localhost:8080/");

app.renderer = {
  async render(name, data) {
    return renderFile(name, data).then(readAll);
  },
};

app
  .get("/", (c) => {
    return c.render("index.html");
  })
  .get("/callback", (c) => {
    console.log("-----------------");
    console.log(c);
    return c.redirect("/");
  })
  .get("/login", (c) => {
    return c.render("login.html");
  })
  .get("/logout", (c) => {
    return c.redirect("/login");
  })
  .start({ port: 8080 });
