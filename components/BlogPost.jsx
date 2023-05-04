import React, { useState } from "react";
import { PostCard } from "../components";

const BlogPost = ({ posts, postsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="lg:col-span-8 col-span-1">
        {currentPosts?.map((post) => (
          <PostCard post={post.node} key={post.title} />
        ))}
      </div>
      <div
        id="pagination"
        className="flex justify-center items-center text-center text-white"
      >
        <button
          className={`m-2 ${
            currentPage === 1
              ? "cursor-not-allowed text-gray-500"
              : "text-white"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span className="m-2">Página {currentPage}</span>
        <button
          className={`m-2 ${
            indexOfLastPost >= posts.length
              ? "cursor-not-allowed text-gray-500"
              : "text-white"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastPost >= posts.length}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
