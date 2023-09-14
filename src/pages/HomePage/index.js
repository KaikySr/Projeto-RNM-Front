import { useState } from "react";
import Card from "../../components/Cards";
import styles from "./styles.module.scss"

export default function HomePage() {
    const [cards, setcards] = useState([])

    function PrintarCards()
    {
        for (let i = 0; i < cards.length; i++) {
            <Card/>
        }
    }
    
    return (
        <div className={styles.main}> 
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
    )
}