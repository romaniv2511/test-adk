import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import TopCasino from "@/components/TopCasino";
import BonusDetails from "@/components/BonusDetails";


export default function Home() {
  return (
      <main>
        <Hero/>
        <TopCasino/>
          <BonusDetails/>
      </main>

  );
}
