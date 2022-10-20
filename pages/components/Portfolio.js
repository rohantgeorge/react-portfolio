import { React, useState, useEffect } from "react";
import Image from "next/image";

const Portfolio = (data) => {
  return (
    <div className="single-portfolio basis-1/3 flex-1 ">
      {console.log(data?.data?.acf.portfolio_image.url)}
      <div>
        <a rel="noreferrer" target="_blank" href={data?.data?.acf.portfolio_url}>
          <Image
            src={data?.data?.acf.portfolio_image.url}
            alt={data?.data?.acf.portfolio_image.title}
          />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
