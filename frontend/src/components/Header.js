import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Navbar.Brand href="/">Beauty Empire</Navbar.Brand>
            </Navbar>
        </header>
    )
}

export default Header
