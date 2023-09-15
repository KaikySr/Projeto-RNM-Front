import styles from "./styles.module.scss"
import Button from 'react-bootstrap/Button';

export default function AddPage() {
    return (
        <div className={styles.main}>
            <div className={styles.card}>

                <b className={styles.addPost}>add post</b>

                <div className={styles.inputTitle}>
                    <span>Adicione um título para sua publicação:</span>
                    <input placeholder="Título"></input>
                </div>

                <div className={styles.inputText}>
                    <textarea className={styles.textArea} placeholder="Compartilhe o que você esta pensando..."></textarea>
                </div>

                <div className={styles.buttonSubmit}>
                    <Button variant="primary" type="submit">Publicar</Button>
                </div>
            </div>
        </div>
    )
}

// import Formulario from "../../components/Formulario";
// import NavBar from "../../components/navbar";
// export default function AddPostPage() {
//     return (
//         <>
//             <NavBar />
//             <Formulario />
//         </>
//     )
// }