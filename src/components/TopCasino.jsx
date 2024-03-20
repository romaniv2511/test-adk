import style from "../styles/TopCasino.module.scss"
import TopCasinoCard from "@/components/TopCasinoCard";
import Button from "@/components/Button";

export default function TopCasino () {
    const casinoList = [
        {
            id: 'top-1',
            logo: 'gunsbet.webp',
            name: 'GUNSBET CASINO',
            bonus: 'Welcome Bonus',
            details: '100% UP TO 1000 AUD + 100 FREE SPINS'
        },
        {
            id: 'top-2',
            logo: 'gunsbet.webp',
            name: 'GUNSBET CASINO',
            bonus: 'Welcome Bonus',
            details: '100% UP TO 1000 AUD + 100 FREE SPINS'
        },
        {
            id: 'top-3',
            logo: 'gunsbet.webp',
            name: 'GUNSBET CASINO',
            bonus: 'Welcome Bonus',
            details: '100% UP TO 1000 AUD + 100 FREE SPINS'
        },
        {
            id: 'top-4',
            logo: 'gunsbet.webp',
            name: 'GUNSBET CASINO',
            bonus: 'Welcome Bonus',
            details: '100% UP TO 1000 AUD + 100 FREE SPINS'
        },
        {
            id: 'top-5',
            logo: 'gunsbet.webp',
            name: 'GUNSBET CASINO',
            bonus: 'Welcome Bonus',
            details: '100% UP TO 1000 AUD + 100 FREE SPINS'
        },
        {
            id: 'top-6',
            logo: 'gunsbet.webp',
            name: 'GUNSBET CASINO',
            bonus: 'Welcome Bonus',
            details: '100% UP TO 1000 AUD + 100 FREE SPINS'
        },
        {
            id: 'top-7',
            logo: 'gunsbet.webp',
            name: 'GUNSBET CASINO',
            bonus: 'Welcome Bonus',
            details: '100% UP TO 1000 AUD + 100 FREE SPINS'
        },
        {
            id: 'top-8',
            logo: 'gunsbet.webp',
            name: 'GUNSBET CASINO',
            bonus: 'Welcome Bonus',
            details: '100% UP TO 1000 AUD + 100 FREE SPINS'
        },
    ]

    return (
        <section className={style.section}>
            <div className="container">
                <h2 className={style.title}>TOP CASINO</h2>
                <ul className={style.list}>
                    {casinoList.map(i => {

                        return <li key={i.id}><TopCasinoCard  data={i}/></li>
                    })}
                </ul>
                <Button size='big'>All Casino</Button>
            </div>
        </section>
    )
}