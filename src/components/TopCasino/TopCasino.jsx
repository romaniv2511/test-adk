import style from "./TopCasino.module.scss"
import TopCasinoCard from "@/components/TopCasinoCard/TopCasinoCard";
import Button from "@/components/Button/Button";
import casinoList from '/public/top-casino.json';

export default function TopCasino () {

    return (
        <section className={style.section}>
            <div className="container">
                <h2 className={style.title}>TOP CASINO</h2>
                <ul className={style.list}>
                    {casinoList.map(i => {

                        return <li key={i.id}><TopCasinoCard  data={i}/></li>
                    })}
                </ul>
                <Button size='big' href="/">All Casino</Button>
            </div>
        </section>
    )
}