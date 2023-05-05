import React from "react";
import { getAuthors } from "../services";
import Image from "next/image";
import GabrielMilanez from "../public/gabrielmilanez.jpg";
import Link from "next/link";
import { IoLogoLinkedin, IoLogoGithub, IoLogoTwitter } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-neutral-900 text-white shadow-lg rounded-lg p-8 mb-8">
      <div className="flex flex-col justify-center items-center -top-14">
        <Image
          unoptimized
          width="100"
          height="100"
          alt="Foto do autor, Gabriel Milanez"
          className="align-middle rounded-full"
          src={GabrielMilanez}
        />
        <h3 className="text-white mt-4 mb-4 text-xl font-bold">
          Gabriel Milanez
        </h3>
        <div className="mb-4">
          <ul className="flex flex-row justify-around text-white">
            <Link href="https://github.com/miilanez">
              <li className="mx-3 hover:text-principal">
                <IoLogoGithub size={25} />
              </li>
            </Link>
            <Link href="https://www.linkedin.com/in/gabriel-milanez/">
              <li className="mx-3 hover:text-principal">
                <IoLogoLinkedin size={25} />
              </li>
            </Link>
            <Link href="https://twitter.com/mr_milanez">
              <li className="mx-3 hover:text-principal">
                <IoLogoTwitter size={25} />
              </li>
            </Link>
          </ul>
        </div>
        <a
          href="https://gabrielmilanez.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-green-600 text-sm font-medium rounded-full text-white px-7 py-1 cursor-pointer">
            Portifólio
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
