import styles from './Header.module.css'

import igniteLogo from '../image/Ignite-Logo.svg'

export function Header() {
    return (
        <>
            <header className={styles.header}>
                <img src={igniteLogo} alt="Logotipo do Ignite" />
                <strong>Ignite Feed</strong>
            </header>
        </>
    )
}