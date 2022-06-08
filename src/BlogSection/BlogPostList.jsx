import BlogPost from "./BlogPost";

function BlogPostList({ blogResource }) {
  const posts = blogResource.read();

  return (
    <>
      {posts.map((post) => (
        <BlogPost
          key={post.guid}
          title={post.title}
          author={post.creator}
          content={post.description}
        />
      ))}
    </>
  );
}

export default BlogPostList;
