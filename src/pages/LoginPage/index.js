import { Col, Row } from 'react-bootstrap';
import CardLogin from '../../components/CardLogin';
import styles from './styles.module.scss';
import AlertComponent from '../../components/AlertComponent';
export default function LoginPage() {
    return (
        <Col className={styles.container}>
            <Row className={styles.row}>
                <Col xs={12} sm={8} md={4} className={styles.col}>
                    <AlertComponent />
                    <CardLogin />
                </Col>
            </Row>
        </Col>
    )
}