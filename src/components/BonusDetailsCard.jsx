"use client"
import Image from "next/image";
import {useState} from "react";
import style from "../styles/BonusDetailCard.module.scss"
import Button from "@/components/Button"

export default function BonusDetailsCard({data}) {
    const [isDetailShow, setIsDetailShow] = useState(false)
    const {casinoLogo, bonuses, rate, maxAmount, valid, condition, wager, cashableBonus} = data;
    const logoURL = `/images/${casinoLogo}`

    return (
        <>
            <Image src={logoURL} alt="" width={94} height={52}/>
            <span>{bonuses}</span>
            <span>{rate}%</span>
            <span>{maxAmount} $</span>
            <button className={style.infoBtn} onClick={() => setIsDetailShow(!isDetailShow)}>
                <Image src="/images/info.svg" alt='info' width={24} height={24}/>
            </button>
            <Button size="small">Get the bonus</Button>

            {!!isDetailShow ?
                (<div className={style.detailsBox}>
                    <p>
                        <span>Bonus valid for:</span>
                        <span>{valid}</span>
                    </p>
                    <p>
                        <span>Wagering condition:</span>
                        <span>{condition.map(i => {
                            return (<>{i} <br/></>)
                        })}
                        </span>
                    </p>
                    <p>
                        <span>Wager:</span>
                        <span>{wager}</span>
                    </p>
                    <p>
                        <span>Cashable Bonus:</span>
                        <span>{cashableBonus}</span>
                    </p>
                </div>) : ''
            }
        </>
    )
}