import style from "./BonusDetails.module.scss";
import casinoList from "/public/bonus-details.json";
import BonusDetailsCard from "@/components/BonusDetailsCard/BonusDetailsCard.jsx"

export default function BonusDetails() {

    return (
        <section className={style.section}>
        <div className="container">
            <h2 className={style.title}>BONUS DETAILS</h2>
            <ul className={style.list}>
                <li className={style.headerRow}>
                    <span>Casino</span>
                    <span>Bonuses</span>
                    <span>Rate</span>
                    <span>Max. amount</span>
                    <span>More info</span>
                    <span>Get</span>
                </li>
                {casinoList.map(i=> {
                    return <li key={i.id} className={style.bodyRow}>
                        <BonusDetailsCard data={i}/>
                    </li>
                })}
            </ul>
        </div>
    </section>)
}