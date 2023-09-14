import styles from "./styles.module.scss"

export default function AddPage() {
    return (
        <div className={styles.main}>
            <div className={styles.card}> 
                <div>
                    <h3>add post</h3>
                </div>
                <div className={styles.inputTitle}>
                    <input  placeholder="Title"></input>
                </div>

                <div className={styles.inputText}>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    )
}