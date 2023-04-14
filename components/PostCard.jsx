/* eslint-disable @next/next/no-img-element */
import React from "react";
import defaultImage from "../public/defaultImage.jpg";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="bg-neutral-900 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt=""
          className="object-center absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-4 cursor-pointer text-white hover:text-green-400 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex flex-col text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={post.author.name}
            height="20px"
            width="20px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-green-200 ml-2 text-xs">
            {post.author.name}
          </p>
          <div className="ml-5 font-medium text-green-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline mr-2 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle text-xs">
              {moment(post.createdAt).format("DD MMM, YYYY")}
            </span>
          </div>
        </div>
        <p className="mt-4 text-center text-lg text-white font-normal px-4 lg:px-20 mb-4">
          {post.excerpt}
        </p>
        <div className="text-center">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-green-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Continue Lendo
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
