import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";

const navItems = ["Home", "TV Shows", "Movies", "My List"];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-14 h-16 ${
        isScrolled && "bg-[#141414]"
      } text-white`}
    >
      <div className="flex items-center gap-x-10">
        <Link href={""} className="">
          <Image priority alt="" src={logo} width={92} />
        </Link>
        <ul className="flex gap-x-5">
          {navItems.map((item, index) => (
            <li key={index} className="text-sm active:font-medium">
              <Link href={""}> {item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-x-4">
          <li>
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </li>
          <li>
            <BellIcon className="h-6 w-6 text-white" />
          </li>
          <li className="flex items-center gap-x-2">
            <span className="rounded overflow-hidden">
              <Image
                src={
                  "https://occ-0-6661-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
                }
                alt=""
                width={32}
                height={32}
                className="rounded"
              />
            </span>
            <span>
              <ChevronDownIcon className="h-4 w-4 text-white" />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
