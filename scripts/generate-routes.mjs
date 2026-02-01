import fs from "fs";
import path from "path";

const dist = path.resolve("dist");
const indexFile = path.join(dist, "index.html");

const routes = [
  "about",
  "projects",
  "contact",
  "magazine",
  "gallery",
  "project-view",
  "membrship"
];

if (!fs.existsSync(indexFile)) {
  console.error("❌ dist/index.html not found. Run npm run build first.");
  process.exit(1);
}

for (const route of routes) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(indexFile, path.join(dir, "index.html"));
}

console.log("✅ Static route folders created");
