import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./styles.module.scss"

export default function Cards() {
    return (
        <Card className={styles.card}>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body >

                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>

        </Card>
    )
}