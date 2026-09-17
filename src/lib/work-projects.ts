import "server-only";

import { readdirSync } from "node:fs";
import path from "node:path";

type Collection = { title: string; folder: string };

type ProjectDefinition = {
  slug: string;
  title: string;
  line: string;
  collections: Collection[];
  cover: { folder: string; file: string };
  logo?: string;
  kind?: "photography";
};

const definitions: ProjectDefinition[] = [
  {
    slug: "gangwal",
    title: "Gangwal",
    line: "Packaging design",
    collections: [
      { title: "Celebration of Togetherness", folder: "workpageclients/Gangwal Celebration of Togetherness packagings" },
      { title: "HoReCa", folder: "workpageclients/Gangwal Horeca logo and packagings" },
      { title: "Meals for Miles", folder: "workpageclients/Gangwal Meals for miles logo and packagings" },
      { title: "Salute India", folder: "workpageclients/Gangwal Salute india logo and packagings" },
    ],
    cover: { folder: "workpageclients/Gangwal Celebration of Togetherness packagings", file: "Barley.png" },
    logo: "/allclientlogos/4.png",
  },
  {
    slug: "gbm-shree-ganesh-besan-mill",
    title: "GBM Shree Ganesh Besan Mill",
    line: "Gharua packaging",
    collections: [{ title: "Gharua", folder: "workpageclients/GBM Gharua" }],
    cover: { folder: "workpageclients/GBM Gharua", file: "GBM Gharua.png" },
    logo: "/allclientlogos/3.png",
  },
  {
    slug: "gbm-spices",
    title: "GBM Spices",
    line: "Masala packaging range",
    collections: [{ title: "Masala", folder: "workpageclients/GBM Masala" }],
    cover: { folder: "workpageclients/GBM Masala", file: "1.png" },
    logo: "/allclientlogos/2.png",
  },
  {
    slug: "xo",
    title: "XO",
    line: "Detergent powder packaging",
    collections: [{ title: "XO", folder: "workpageclients/XO" }],
    cover: { folder: "workpageclients/XO", file: "XO Detergemt Powder.png" },
  },
  {
    slug: "food-photography",
    title: "Food Photography",
    line: "A collection of food images",
    collections: [{ title: "Food Photography", folder: "foodphotography" }],
    cover: { folder: "foodphotography", file: "WhatsApp Image 2026-09-16 at 11.29.45 PM.jpeg" },
    kind: "photography",
  },
];

function imagePath(folder: string, filename: string) {
  return `/${folder.split("/").map(encodeURIComponent).join("/")}/${encodeURIComponent(filename)}`;
}

export const workProjects = definitions.map((project) => {
  const collections = project.collections.map((collection) => {
    const files = readdirSync(path.join(process.cwd(), "public", collection.folder))
      .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    return {
      title: collection.title,
      images: files.map((file, index) => ({
        src: imagePath(collection.folder, file),
        alt: project.kind === "photography"
          ? `Food photography ${index + 1}`
          : `${project.title} ${file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}`,
      })),
    };
  });

  return {
    ...project,
    collections,
    coverSrc: imagePath(project.cover.folder, project.cover.file),
  };
});
