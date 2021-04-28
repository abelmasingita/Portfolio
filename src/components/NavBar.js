import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const NavBar = () => {
    return (
        <header style={{backgroundColor: "#FF0000"}}>
        <Container className="container">
            <Navbar  collapseOnSelect expand="lg">
                <LinkContainer 
                            activeClassName="text-white"
                            className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                            to="/" exact>
                    <Navbar.Brand>Abel Masingita</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/post"
                                        activeClassName="text-red-100 bg-red-700"
                                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white">
                            <Nav.Link>Blog Posts</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/project"
                             activeClassName="text-red-100 bg-red-700"
                             className="inline-flex items-center py-3 px-3 my-6 rounded text-white">
                            <Nav.Link>projects</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about" 
                                activeClassName="text-red-100 bg-red-700"
                                className="inline-flex items-center py-3 px-3 my-6 rounded text-white">
                            <Nav.Link>About Me!</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav style={{display: "flex", flexDirection: "row"}}>
                    <SocialIcon  url="https://twitter.com/MasingitaHlong3" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon  url="https://www.instagram.com/masingitaabel/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon  url="https://www.youtube.com/channel/UCbwl1Mwej6FZMvvwjp_aQgQ" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    <SocialIcon  url="https://www.linkedin.com/in/masingita-abel-8bb37b199/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </header>
    )
}

export default NavBar
