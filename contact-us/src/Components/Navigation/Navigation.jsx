import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <>
            <nav className={`${styles.navigation} container`}>
                <div className="nav-logo">
                    <img src="/images/nav_logo.png" alt="" />
                </div>
                <div  className="nav-list">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation;

