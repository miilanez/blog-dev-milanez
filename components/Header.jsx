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
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex justify-center lg:justify-start">
            <Link href="/">
              <h1 className="text-principal text-3xl font-semibold text-white">
                Blog Dev Milanez
              </h1>
            </Link>
          </div>
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
