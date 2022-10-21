import { React, useState, useEffect } from "react";
import Image from "next/image";
import truuth from "../../public/truuth.png";
import brandoformen from "../../public/brandoformen.png";
import blackFX from "../../public/blackFX.png";
import Parmbains from "../../public/Parmbains.png";

const Portfolio = (data) => {
  return (
    <div className="single-portfolio basis-1/3 flex-1 ">
      {/* {console.log(data?.data?.acf.portfolio_image.url)} */}

      {data?.data?.acf.portfolio_image.title == "truuth" ? (
        <>
          <a
            rel="noreferrer"
            target="_blank"
            href={data?.data?.acf.portfolio_url}
          >
            <Image src={truuth} />
            <span className="w-full h-full text-black transition-all ease-in-out hover:text-teal-500 text-2xl font-bold capitalize">
              {data?.data?.acf.portfolio_image.title}
            </span>
          </a>
        </>
      ) : (
        <></>
      )}

      {data?.data?.acf.portfolio_image.title == "brandoformen" ? (
        <>
          <a
            rel="noreferrer"
            target="_blank"
            href={data?.data?.acf.portfolio_url}
          >
            <Image src={brandoformen} />
            <span className="w-full h-full text-black transition-all ease-in-out hover:text-teal-500 text-2xl font-bold capitalize">
              {data?.data?.acf.portfolio_image.title}
            </span>
          </a>
        </>
      ) : (
        <></>
      )}

      {data?.data?.acf.portfolio_image.title == "blackFX" ? (
        <>
          <a
            rel="noreferrer"
            target="_blank"
            href={data?.data?.acf.portfolio_url}
          >
            <Image src={blackFX} />
            <span className="w-full h-full text-black transition-all ease-in-out hover:text-teal-500 text-2xl font-bold capitalize">
              {data?.data?.acf.portfolio_image.title}
            </span>
          </a>
        </>
      ) : (
        <></>
      )}

      {data?.data?.acf.portfolio_image.title == "Parmbains" ? (
        <>
          <a
            rel="noreferrer"
            target="_blank"
            className="relative h-full block overflow-hidden"
            href={data?.data?.acf.portfolio_url}
          >
            <Image src={Parmbains} />
            <span className="w-full h-full text-black transition-all ease-in-out hover:text-teal-500 text-2xl font-bold capitalize">
              {data?.data?.acf.portfolio_image.title}
            </span>
          </a>
        </>
      ) : (
        <></>
      )}

      <div></div>
    </div>
  );
};

export default Portfolio;
