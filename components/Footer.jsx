import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="border-t w-full inline-block border-green-300 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex justify-center lg:justify-start">
            <Link href="/">
              <h1 className="text-principal text-3xl font-semibold text-white">
                Blog Dev Milanez
              </h1>
            </Link>
          </div>
          <p className="text-center text-sm text-green-200 lg:text-right">
            Copyright &copy; Gabriel Milanez 2023. Direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
