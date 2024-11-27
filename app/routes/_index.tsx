import type { MetaFunction } from "@remix-run/node";
import { BlogCard } from "~/components/blog-card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-start justify-center bg-page-gradient">
      <BlogCard />
    </div>
  );
}
