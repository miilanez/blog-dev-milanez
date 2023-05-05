/* eslint-disable react/jsx-key */
import Head from "next/head";
import { About, PostWidget, Categories, BlogPost } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Dev Milanez Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <BlogPost posts={posts} postsPerPage={3}/>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <About />
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
