import React from 'react'
import * as styles from './navbar.module.css'

const navbar = () => {
    return (
        <div className={styles.nav}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Contact</a>
        </div>
    )
}

export default navbar
