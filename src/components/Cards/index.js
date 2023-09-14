import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./styles.module.scss"
import { useState } from 'react';

export default function Cards() {
    const [likes, setLikes] = useState(10) 



    return (
        
        <Card className={styles.card}>
            <Card.Header as="h5">Title</Card.Header>
            <Card.Body >
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            <Card.Footer className={styles.footer}>
                {likes}
                <Button variant="primary">Like</Button>
            </Card.Footer>
        </Card>
        
    )
}
