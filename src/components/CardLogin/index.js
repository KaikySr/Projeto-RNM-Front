import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { AlertContext } from "../../context/alert";
import { SECRET } from "../../env";
import CryptoJS from 'crypto-js';
import axios from 'axios';

export default function CardLogin() {
    const { setMessage, setShow, setVariant } = useContext(AlertContext);
    const navigate = useNavigate();
    var [email, setEmail] = useState('');
    var [password, setPass] = useState('');

    async function handleSubmit(e) 
    {
        e.preventDefault();
        if (!formValid()) return
        const json = {
            email, password
        }
        try {
            // const jsonCrypt = CryptoJS.AES.encrypt(JSON.stringify(json), SECRET).toString();
            var res = await axios.post('http://localhost:8080/api/user/login', {
                json
            })
            sessionStorage.setItem('token', res.data.token);
            navigate('/home')
        } catch (error) {
            setMessage('Erro ao se conectar');
            setShow(true);
            setVariant('danger');
        }
    }

    function formValid() {
        if (!email.includes('@')) {
            setMessage('Insira um e-mail válidos')
            setShow(true);
            setVariant('danger')
            return false;
        }
        if (email.length < 5) {
            setMessage('Insira um e-mail válido')
            setShow(true);
            setVariant('danger')
            return false;
        }

        return true
    }

    return (
        <Card className={styles.card}>
            <Card.Header className={styles.header}>
                <Card.Title>Login</Card.Title>
            </Card.Header>
            <Card.Body className={styles.body}>
                <Form
                    onSubmit={handleSubmit}
                    className={styles.form}
                >
                    <div className={styles.inputEmail}>
                        <span>Seu e-mail</span>
                        <Form.Control
                            value={email}
                            placeholder="fulano01@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.inputSenha}>
                        <span>Sua senha</span>
                        <Form.Control
                            value={password}
                            placeholder="Bananas@22"
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </div>
                    <div className={styles.button}>
                        <Button
                            type='submit'
                        >
                            Entrar
                        </Button>
                    </div>
                    <div>
                        <span>Ainda não tem uma conta?</span>
                        <button>Cadastrar</button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    )
}