"use client"

import Link from 'next/link'
import style from './Header.module.scss'
import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    return (<header className={style.header}>
            <div className="container">
                <nav>
                    <ul className={style.list}>
                        <li>
                            <Link className={`${style.link} ${pathname === '/online' ? style.active : ''}`} href='/online'>Online
                                casino paypal</Link>
                        </li>
                        <li><
                            Link className={`${style.link} ${pathname === '/mobile' ? style.active : ''}`} href='/mobile'>Paypal
                                casino mobile</Link>
                        </li>
                        <li>
                            <Link className={`${style.link} ${pathname === '/' ? style.active : ''}`} href='/'>Best paypal casino
                                slots</Link>
                        </li>
                        <li>
                            <Link className={`${style.link} ${pathname === '/poker' ? style.active : ''}`} href='/poker'>PayPal
                                poker</Link>
                        </li>
                        <li>
                            <Link className={`${style.link} ${pathname === '/deposit' ? style.active : ''}`} href='/deposit'>Paypal
                                casino deposit</Link>
                        </li>
                        <li>
                            <Link className={`${style.link} ${pathname === '/withdraw' ? style.active : ''}`} href='/withdraw'>Paypal
                                casino withdraw</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>)
}