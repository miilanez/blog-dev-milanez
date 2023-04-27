import React from "react";
import { PostCard } from "../components";
import { getPosts } from "../services";

const BlogPost = ({ posts }) => {
  return (
    <div className="lg:col-span-8 col-span-1">
      {posts.map((post) => (
        <PostCard post={post.node} key={post.title} />
      ))}
    </div>
  );
};

export default BlogPost;

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
