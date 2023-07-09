import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "../../typing";

interface Props {
  data: Movie;
}

function Card({ data }: Props) {
  return (
    <div className="overflow-hidden relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-32 md:min-w-[226px] ">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          data?.poster_path || data?.backdrop_path
        }`}
        alt={data?.title || data?.original_title || ""}
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
    </div>
  );
}

export default Card;
