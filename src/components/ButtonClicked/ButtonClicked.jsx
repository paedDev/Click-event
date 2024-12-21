import styles from "./ButtonClicked.module.css"
import { useState } from "react";
import PropTypes from "prop-types"

function ButtonClicked ({ cardname = "Guest", course = "CPE/CEA", description = "" }) {
      const imageUrl = './src/assets/anime.jpg'
      const [cardName, setCardTitle] = useState(cardname)
      const [courseName, setCourse ] = useState(course)
     

      const buttonClicked = () => {
            setCardTitle("2024 PRogram")
            console.log(`Im clicked`);
            setCourse("2024 curriculum CPE")

      };


    return(
        <>
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>
               {cardName}
            </h1>
            <h2 className={styles.course}>
               {courseName}
            </h2>

            <h2 className={styles.cardDescription}>
               {description}
            </h2>

            <button onClick={buttonClicked} className={styles.button}>
                Click to Register
            </button>
        </div>
        
        
        </>
    )
}

ButtonClicked.propTypes = {
    cardname: PropTypes.string,
    course : PropTypes.string,
    description : PropTypes.string,

}


export default ButtonClicked