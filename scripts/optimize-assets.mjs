import sharp from "sharp";
import { mkdir } from "node:fs/promises";
await mkdir("public/images", { recursive: true });
for (const name of ["inventory", "commerce", "ai", "mobile"]) {
  await sharp(`docs/image-originals/${name}.png`)
    .resize({ width: 1536, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(`public/images/${name}.webp`);
}
await sharp("docs/image-originals/inventory.png")
  .resize(1200, 630, { fit: "cover" })
  .jpeg({ quality: 88 })
  .toFile("public/og.jpg");
console.log("Optimized four showcase images and social preview.");

