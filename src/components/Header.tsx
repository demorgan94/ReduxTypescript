import React, { useState } from 'react'
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavbarText } from 'reactstrap'
import { IconContext } from 'react-icons'
import { DiReact } from 'react-icons/di'

interface HeaderProps {
    title: string;
}

const Header: React.SFC<HeaderProps> = ({ title }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <Container>
                <IconContext.Provider value={{ size: "2em" }} >
                    <NavbarBrand href="/"><DiReact /> {title}</NavbarBrand>
                </IconContext.Provider>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavbarText>Simple Text</NavbarText>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
