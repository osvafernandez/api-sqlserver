import app from "./src/app.js";

app.listen(app.get("port"));

console.log(`server on http://localhost:${app.get("port")}`);
