import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-green-300 py-8">
        <div className="w-full md:flex md:flex-row md:justify-between md:float-left">
          <Link href="/">
            <span className="cursor-pointer font-bold text-3xl md:text-4xl text-white">
              Blog dev Milanez
            </span>
          </Link>
          <Link
            href="https://gabrielmilanez.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-white text-xl relative font-medium hover:text-principal before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-secondary before:transition hover:before:scale-x-100">
              Portfólio
            </span>
          </Link>
        </div>
        {/* <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
