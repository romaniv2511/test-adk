"use client"
import style from '../styles/Button.module.scss'

export default function Hero ({children, size}) {
    return (
        <button className={`${style.btn} ${size === 'small' ? style.small : style.big}`} >{children}</button>
    )
}