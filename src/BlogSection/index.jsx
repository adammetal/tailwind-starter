import { Suspense } from "react";
import BlogPostList from "./BlogPostList";

function BlogSection({ blogResource }) {
  return (
    <section className="max-w-full w-full overflow-x-hidden overflow-y-hidden">
      <Suspense fallback="Loading...">
        <BlogPostList blogResource={blogResource} />
      </Suspense>
    </section>
  );
}

export default BlogSection;
