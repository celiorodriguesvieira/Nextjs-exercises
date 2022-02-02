import styles from './integrationtwo.module.css'

export default function integrationTwo(){
    return(
        <div id={styles.integrationtwo}> 
             <div className={styles.yellow}>Texto #01</div>
             <div className={styles.brown}>Texto #02</div>
             <div className={styles.pink}>Texto #03</div>
        </div>
    )
}