import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavbarText } from 'reactstrap'

interface HeaderProps {
    title: string;
}

const Header: React.SFC<HeaderProps> = ({ title }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">{title}</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavbarText>Simple Text</NavbarText>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header
