import heroImage from "../assets/heroImg.png"
import styles from "./HeroSection.module.css"

function HeroSection(){
    return (
        <div className={styles.heroSection}>
            <div className={styles.textContainer}>
                <h3>Skip the travel! Find Online</h3>
                <h1>Medical <span style={{
                    color: 'rgba(42, 168, 255, 1)'
                }}>Centers</span> </h1>
                <p>Connect instantly with a 24/7 specialist or choose to video visit a particular doctor.</p>
                <button>Find Centers</button>
            </div>
            <img className={styles.heroImage} src={heroImage} alt="heroImage"/>
        </div>
    )
}

export default HeroSection;