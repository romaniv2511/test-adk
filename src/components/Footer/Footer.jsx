import style from './Footer.module.scss'
export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className="container">
                <ul className={style.list}>
                    <li>
                        <img src="/images/pay-1.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/pay-2.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/pay-3.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/pay-4.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/pay-5.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/pay-6.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/pay-7.svg" alt='paymant-logo' loading="lazy" />
                    </li>
                </ul>
            </div>
            <div className={style.line}></div>
            <div className="container">
                <ul className={style.list}>
                    <li>
                        <img src="/images/sponsor-1.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/sponsor-2.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/sponsor-3.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/sponsor-4.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/sponsor-5.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/sponsor-6.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/sponsor-7.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                    <li>
                        <img src="/images/sponsor-8.webp" alt='sponsor-logo' loading="lazy" />
                    </li>
                </ul>
            </div>
        </footer>
    )
}