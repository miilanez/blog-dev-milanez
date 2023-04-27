import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div>
      <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-neutral-900 ">
        <div className="flex justify-center items-center -top-14">
          <Image
            unoptimized
            width="100"
            height="100"
            alt={author.name}
            className="align-middle rounded-full"
            src={author.photo.url}
          />
        </div>
        <h3 className="text-white mt-4 mb-4 text-xl font-bold">
          {author.name}
        </h3>
        <p className="text-white text-ls">{author.bio}</p>
      </div>
    </div>
  );
};

export default Author;
