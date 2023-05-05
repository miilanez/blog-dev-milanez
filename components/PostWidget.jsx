/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  // console.log("related", relatedPosts);

  return (
    <div className="bg-neutral-900 text-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Posts Relacionados" : "Posts Recentes"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex flex-col md:flex-row items-center w-full mb-4">
          <div className="w-16 h-16 flex-none ">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className="object-cover object-center w-full h-full rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow md:ml-4 text-center md:text-left mt-2 md:mt-0">
            <p className="text-green-200 font-xs">
              {moment(post.createdAt).format("DD MMM, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-lg"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
