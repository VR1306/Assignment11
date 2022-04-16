import React from 'react'
import './Navybar.css'
import { Navbar,Nav,Container } from 'react-bootstrap';
import { BsFacebook } from "react-icons/bs";
import { BsTwitter,BsLinkedin,BsBehance } from "react-icons/bs";

function Navybar() {

  return (
    <div>
    <div className='Boxes'>
        <Navbar bg="light" expand="lg">
  <Container>
     <div className='d-flex'><Navbar.Brand href=""> <div className='text1 fs-3 ms-1'>Coding</div></Navbar.Brand>
    <Navbar.Brand href=""><div className='text1 text-info fs-3'>Addict</div></Navbar.Brand></div>
       
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto classNavbar">
        <Nav.Link href="#Home">Home</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Projects">Projects</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
        <Nav.Link href="#Profile">Profile</Nav.Link>
      </Nav>
    </Navbar.Collapse>


    <div className='d-none d-lg-block'>
      <BsFacebook className='text-info ms-3' size='20'/>
      <BsTwitter className=' text-info ms-3'size='20'/>
      <BsLinkedin className=' text-info ms-3'size='20'/>
      <BsBehance className=' text-info ms-3'size='20'/>
    </div>


  </Container>
</Navbar>
</div>
 </div>
  )
}

export default Navybar