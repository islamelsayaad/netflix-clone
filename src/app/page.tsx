"use client";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import requests from "@/utlis/request";
import { useEffect, useState } from "react";
import Row from "@/components/Row";

// const list = ["trendingNow", "popularNow", "horrorAndThriller"];

export default function Home() {
  const [data, setData] = useState({
    trendingNow: [],
    popularNow: [],
    horrorAndThriller: [],
    comedy: [],
    documentary: [],
    family: [],
    action: [],
    fantasy: [],
    tvShows: [],
  });

  useEffect(() => {
    (async function fetchData() {
      const [
        trendingNow,
        popularNow,
        horrorAndThriller,
        comedy,
        documentary,
        family,
        action,
        fantasy,
        tvShows,
      ] = await Promise.all([
        fetch(requests.trendingNow).then((res) => res.json()),
        fetch(requests.popularNow).then((res) => res.json()),
        fetch(requests.horrorAndThriller).then((res) => res.json()),
        fetch(requests.comedy).then((res) => res.json()),
        fetch(requests.documentary).then((res) => res.json()),
        fetch(requests.family).then((res) => res.json()),
        fetch(requests.action).then((res) => res.json()),
        fetch(requests.fantasy).then((res) => res.json()),
        fetch(requests.tvShows).then((res) => res.json()),
      ]);

      console.log(documentary.results);

      setData({
        trendingNow: trendingNow.results,
        popularNow: popularNow.results,
        horrorAndThriller: horrorAndThriller.results,
        comedy: comedy.results,
        documentary: documentary.results,
        family: family.results,
        action: action.results,
        fantasy: fantasy.results,
        tvShows: tvShows.results,
      });
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Banner data={data.trendingNow} />
      <main className="relative z-50 flex flex-col gap-y-10 pb-8">
        <Row data={data.popularNow} title="Popular Now" />
        <Row data={data.horrorAndThriller} title="Horror & Thriller" />
        <Row data={data.comedy} title="Comedy" />
        <Row data={data.documentary} title="Documentary" />
        <Row data={data.family} title="Family" />
        <Row data={data.action} title="Action" />
        <Row data={data.fantasy} title="Fantasy" />
        <Row data={data.tvShows} title="TV Shows" />
      </main>
    </>
  );
}

// export async function getServerSideProps() {
//   const [netflixOriginals, trendingNow] = await Promise.all([
//     fetch(requests.trendingNow).then((res) => res.json()),
//     fetch(requests.trendingNow).then((res) => res.json()),
//   ]);
//   return { props: { trendingNow: trendingNow.results } };
// }
