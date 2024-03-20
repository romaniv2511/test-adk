"use client"
import style from './Button.module.scss'
import Link from "next/link";

export default function Hero ({children, size , href}) {
    return (
        <Link href={href} className={`${style.btn} ${size === 'small' ? style.small : style.big}`} >{children}</Link>
    )
}