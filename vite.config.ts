import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import svgr from "vite-plugin-svgr"; // ✅ Import SVGR

export default defineConfig(({ mode }) => ({
  server: { host: "::", port: 8080 },

  plugins: [
    // 1️⃣ MDX first
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: "frontmatter" }],
      ],
    }),

    // 2️⃣ React-SWC
    react(),

    // 3️⃣ SVGR to support importing SVGs as components
    svgr(),

    // 4️⃣ Component tagging in dev
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
