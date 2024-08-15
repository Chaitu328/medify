import Footer11 from "../assets/footer_1.2.png";
import Footer12 from "../assets/footer_1.1.png";
import Footer2 from "../assets/footer_2.png";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <>
            <div className={styles.footerBox}>
                <img src={Footer11} alt="Footer11" className={styles.footerImage} />
                <img src={Footer12} alt="Footer12" className={styles.footerImage} />
            </div>
            <img src={Footer2} alt="Footer2" className={styles.footerImageFull} />
        </>
    );
}

export default Footer;
