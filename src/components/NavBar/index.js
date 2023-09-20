import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import styles from './styles.module.scss';
import logo from '../../commom/imgs/boschLogo.png';

export default function NavBar() {
    return (
        <>
            <Navbar expand="lg" className={styles.navbar}>
             
                <img className={styles.logo} src={logo}/>

                <Container fluid >
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                            <div className={styles.links}>
                                <Link to='/home' className={styles.NavLink}>Home</Link>
                                <Link to='/home/add' className={styles.NavLink}>Adicionar</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
}