import { React, useState, useEffect } from "react";
import Image from "next/image";

import API from "../api/API.json";

const Portfolio = (data) => {
  return (
    <div className="single-portfolio basis-1/3 flex-1 ">
      {console.log(data?.data?.acf.portfolio_image.url)}

      {API.map((i) => {
        i.title == data?.data?.acf.portfolio_image.title ? (
          <>
            <a
              rel="noreferrer"
              target="_blank"
              href={data?.data?.acf.portfolio_url}
            >
              <Image src={i.URL} />
            </a>
          </>
        ) : (
          <></>
        );
      })}

      <div></div>
    </div>
  );
};

export default Portfolio;
