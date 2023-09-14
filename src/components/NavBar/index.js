import { Container, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import styles from "./styles.module.scss"

import boschLogo from '../../commom/imgs/boschLogo.png'

export default function NavBar(){    
    return(
        <>
            <Navbar expand="lg" >
                <Container className={styles.NavBar}>
             
                    <img className={styles.logo} src={boschLogo}/>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className={styles.collapse}>
                    
                        <div className={styles.links}>
                            <div className={styles.NavContent}>
                                <Link to="/" className={styles.NavLink}>Home</Link>
                            </div>
                            <div className={styles.NavContent}>
                                <Link to="/add" className={styles.NavLink}>Adicionar</Link>
                            </div>
                            <div className={styles.NavContent}>
                                <Link to="/" className={styles.NavLink}>Sair</Link>
                            </div>
                        </div>

                    </Navbar.Collapse>
      
                </Container>
            </Navbar>
            <Outlet />
        </>
    )   
}