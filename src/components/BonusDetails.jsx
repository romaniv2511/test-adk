import style from "../styles/BonusDetails.module.scss";
import bonusDetails from "/public/bonus-details.json";
import BonusDetailsCard from "@/components/BonusDetailsCard.jsx"




export default function BonusDetails() {
    const casinoList = [...bonusDetails];
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