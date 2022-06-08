import BlogSection from "./BlogSection";
import getDevToResource from "./getDevToResource";

const resource = getDevToResource();

function Blog() {
  return (
    <main className="w-[1200px] my-0 mx-auto grid gap-4 p-4 grid-cols-blog">
      <aside>Sidebar</aside>
      <BlogSection blogResource={resource} />
    </main>
  );
}

export default Blog;
