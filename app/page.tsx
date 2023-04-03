import { Inter } from "next/font/google";
import RestaurantCard from "./components/Cards";

import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <RestaurantCard />
      </main>
    </>
  );
}
