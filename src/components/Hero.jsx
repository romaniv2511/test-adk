import style from "../styles/Hero.module.scss"
import Button from "./Button.jsx"
export default function Hero () {
    return (
        <section className={style.section}>
            <div className={`container ${style.wrapper}`}>
                <h1 className={style.title}>Welcome <br/> Bonus</h1>
                <p className={style.text}>Exclusive welcome offer of <br/>
                    2’000 aud and 275 free spins</p>
                <Button size='big'>Claim Bonus</Button>
            </div>
        </section>
    )
}