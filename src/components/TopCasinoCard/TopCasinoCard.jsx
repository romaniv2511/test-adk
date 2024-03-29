import Button from '../Button/Button'
import style from './TopCasinoCard.module.scss'
export default function TopCasinoCard ({data}) {
    const {logo, name,bonus, details} = data;
    const logoLink = `/images/${logo}`;
    return (
        <div className={style.card}>
            <img src={logoLink} alt="GUNSBET CASINO" className="casino-logo" />
            <h3>{name}</h3>
            <p>{bonus}</p>
            <p>{details}</p>
            <Button size='small' href="/bonus">Clame Bonus</Button>
        </div>
    )
}