import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "../../typing";
import { PlayIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  data: Movie[];
}

function Banner({ data }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(data[Math.floor(Math.random() * 6)]);
  }, [data]);

  return (
    <header className="relative h-[95vh] w-full">
      <div className="absolute left-0 top-0 w-full h-[120vh]">
        <Image
          priority
          src={`https://image.tmdb.org/t/p/original${
            movie?.backdrop_path || movie?.poster_path
          }`}
          layout="fill"
          objectFit="cover"
          alt={movie?.title || movie?.original_title || ""}
          className="c-trailer_img"
        />
        <div className="c-trailer_vignette absolute bottom-0 left-0 right-[25%] z-10 h-full w-1/2"></div>
        <div className="c-trailer_img absolute bottom-0 left-0 z-10 w-full h-1/3"></div>
      </div>
      <div className="c-trailer_info absolute px-14 z-20 left-0 bottom-1/4 flex flex-col gap-y-5 text-white">
        <h1 className="text-lg font-bold max-w-xl md:text-2xl lg:leading-tight lg:text-5xl">
          {movie?.title || movie?.original_title}
        </h1>
        <p className="max-w-xs text-xs text-shadow-md lg:leading-tight md:max-w-md md:text-base lg:max-w-lg">
          {movie?.overview?.split(".")[0]}
        </p>
        <div className="flex items-center gap-x-3">
          <button className="bg-white text-black hover:bg-white/70">
            <PlayIcon className="h-8 w-8 text-black" />
            <span>Play</span>
          </button>
          <button className="bg-[gray]/70 hover:bg-[gray]/50">
            <InformationCircleIcon className="h-8 w-8 text-white" />
            <span> More Info</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
