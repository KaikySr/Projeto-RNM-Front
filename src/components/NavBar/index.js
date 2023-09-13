import { Container, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import styles from "./styles.module.scss"

export default function NavBar(){    
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <div className="NavContent">
                        <Link to="/not">test</Link>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    )   
}