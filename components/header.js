import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import logo from '/public/images/SportsLogo.png'
import MatchesSlider from './MatchesSlider'



import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SVGSprite } from './SVGSprite';

export default function mainHeader() {
  return (
    <>
    <MatchesSlider/>
    <header className="main-header sticky-top">
    <Navbar bg="transparent" expand="lg" >
      <Container>
        <div className="main-header-inner d-flex align-items-center justify-content-between">
          <div className="logo-sec">
            <Navbar.Brand className="logo-sec" href="/"><Image src={logo} alt="logo"/></Navbar.Brand>
          </div>
          <Navbar.Collapse id="main-navbar-nav" className="main-menu" >
            <Nav className="me-auto" activeKey="/home">
              <Nav.Item as="li">
                <Nav.Link href="/schedule">Schedule</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/team">Series</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#">Teams</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#">Players</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#">Rankings</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#">Fantasy Center</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="#">More</Nav.Link>
              </Nav.Item>
              <div className="signin-btn d-lg-none">
                <Link href="/">
                  <a className="btn btn-primary">Sign In</a>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
          <div className="nav-right-sec d-flex align-items-center">
            <div className="nav-right-content d-flex align-items-center">
              <div className="dark-light-mode nav-gray-btn">
                <SVGSprite id="dark-light-icon" size="18" fill="#000"/>
              </div>
              <div className="web-notification nav-gray-btn">
                <SVGSprite id="bell-icon" size="20" fill="transparent"/>
              </div>
              <div className="signin-btn d-none d-lg-block">
                <Link href="/">
                  <a className="btn btn-primary">Sign In</a>
                </Link>
              </div>
            </div>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
          </div>
        </div>
      </Container>
      </Navbar>
    </header>
    </>
  );
}