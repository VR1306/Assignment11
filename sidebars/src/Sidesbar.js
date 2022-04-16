import React ,{useState} from 'react'
import { Nav,Offcanvas, Navbar,Container,Modal,Button} from 'react-bootstrap';
import './Sidesbar.css'
import {AiOutlineMenu} from "react-icons/ai"
import { FcHome, FcFolder, FcCalendar, FcDocument} from "react-icons/fc";
import { RiTeamLine } from "react-icons/ri";
import {BsFacebook,BsTwitter,BsLinkedin,BsBehance} from "react-icons/bs"
import { IoDiamond } from "react-icons/io5";



function Sidesbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
      <Navbar bg="light" expand={false}>
      <Container fluid>
        
      <div className='heart'>
        <Navbar.Toggle aria-controls="offcanvasNavbar">
        <AiOutlineMenu color='#49a6e9' size={30} />
        </Navbar.Toggle>
        </div>

        
    
      <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start" >
     <Offcanvas.Header closeButton >
    
        <div className='d-flex textyy'><Offcanvas.Title id="offcanvasNavbarLabel"><h2>Coding</h2> </Offcanvas.Title>
        <div className='textyy'><Offcanvas.Title id="offcanvasNavbarLabel" className='ms-2 text-info'><h2>Addict</h2></Offcanvas.Title></div></div>

      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end pe-3 mysidenav">
        <div>
          <div className='d-flex a'><FcHome size='30'/><Nav.Link href="#Home" className='ms-4 '>Home</Nav.Link></div>
          <div  className='d-flex a'><RiTeamLine size='30'/><Nav.Link href="#Team" className='ms-4 '>Team</Nav.Link></div>
          <div  className='d-flex a'><FcFolder size='30'/><Nav.Link href="#Projects" className='ms-4 '>Projects</Nav.Link></div>
          <div  className='d-flex a'><FcCalendar size='30'/><Nav.Link href="#Calendar"className='ms-4 '>Calendar</Nav.Link></div>
          <div className='d-flex a'> <FcDocument size='30'/><Nav.Link href="#Documents"className='ms-4 '>Documents</Nav.Link></div>
          </div>  
        
        </Nav>
      </Offcanvas.Body>
       <div className='d-flex'>
         <div className='ms-5' > <BsFacebook size='30'className='ms-2 mb-5' color='blue'/></div>
         <div className='ms-2' > <BsTwitter size='30' className='ms-2' color='blue'/></div>
         <div className='ms-2'> <BsLinkedin size='30'className='ms-2' color='blue'/></div>
         <div className='ms-2'> <BsBehance size='30'className='ms-2'color='blue'/></div>
         <div className='ms-2'> <IoDiamond size='30'className='ms-2' color=' blue'/></div>
       </div>


    

    </Navbar.Offcanvas>
  </Container>
</Navbar>

<div >
  <div className='position-absolute top-50 start-50 translate-middle'>
      <Button variant='btn btn-outline-success' onClick={handleShow} >
        Show Modal
      </Button>
      </div>
      <Modal centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton/>
        
        <Modal.Body>
         <div className='texty'>Modal Content</div>
        </Modal.Body>
      </Modal>
      
    </ div>
      </div>
    </div>
  )
}

export default Sidesbar