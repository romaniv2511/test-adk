import style from '../styles/Footer.module.scss'
export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className="container">
                <ul className={style.list}>
                    <li>
                        <img src="/pay-1.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/pay-2.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/pay-3.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/pay-4.svg" alt='paymant-logo'  loading="lazy" />
                    </li>
                    <li>
                        <img src="/pay-5.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/pay-6.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/pay-7.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                </ul>
            </div>
            <div className={style.line}></div>
            <div className="container">
                <ul className={style.list}>
                    <li>
                        <img src="/sponsor-1.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/sponsor-2.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/sponsor-3.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/sponsor-4.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/sponsor-5.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/sponsor-6.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/sponsor-7.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/sponsor-8.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                </ul>
            </div>
        </footer>
    )
}