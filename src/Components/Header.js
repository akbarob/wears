import { Button, Image, Navbar, Nav, NavDropdown, Form, Row, Col,InputGroup, Badge, Modal, FormControl, } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {FaBars,FaRegUser,FaBoxOpen }from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {BsHandbag, BsHeart, BsPerson} from 'react-icons/bs'
import {TbBrandMessenger} from 'react-icons/tb'
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header(){
    const [Mobilemenu, setMobileMenu]= useState(false)
    function handleMobileMenu(){
        setMobileMenu(prevState => !prevState)
    }

// Search Modal
    const [showModal, setShowModal] = useState(false)
    function toggleModal(){
        setShowModal(prevState => !prevState)
    }

    return(
        <Navbar bg="brand" sticky="top" style={{height: '56px'}}>
            <Button variant="outline-brand" className="d-md-none ms-3" onClick={handleMobileMenu}>
                <FaBars size={20} className='my-1 mx-1'/>
            </Button>
            <Navbar.Brand className="ms-5">
                <NavLink to='/'>
                    <Image src="images/Group 2.svg" style={{width:"5rem"}}/>
                </NavLink>
            </Navbar.Brand>

            
            <div className="d-none d-md-block col-7">
                <Nav>
                    <Nav.Item>
                        <NavLink to='/women' className='nav-link  fw-bolder px-3 py-3 '> WOMEN</NavLink>
                    </Nav.Item>
                    <div className="d-flex align-items-center" style={{height: '56px'}} >
                   <div className="vr mx-3  align-self-center"></div>    
                   </div>
                   
                    <Nav.Item>
                        <NavLink to='/men' className='nav-link fw-bolder px-3 py-3 '> MEN</NavLink>
                    </Nav.Item>
                    <Nav.Item className="d-flex align-self-center mx-auto">
                        <Form>
                        <InputGroup style={{width:'17rem'}}>
                            <Form.Control
                                size="sm"
                                placeholder="search for items and brands..."
                                aria-label="search for items and brands"
                                className="bg-light border-0 shadow-none "/>
                                <InputGroup.Text className="bg-light border-0">
                                    <FiSearch size={25}/>
                                </InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </Nav.Item>


                </Nav>
            </div>
            <Nav className="ms-auto me-5">
                
                <NavDropdown
                    color="light"
                    id='profile-dropdown'
                    menuVariant="light"
                    title={<BsPerson size={27} className='text-light '/>}
                    className='nav-link px-2 d-none d-md-block'
                        >
                            <NavDropdown.Item href="#action/3.1"> <BsPerson className="mx-2"/>My account</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            <FaBoxOpen className="mx-2"/>  My orders
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"> <AiOutlineQuestionCircle className="mx-2"/>Return Information</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                            <TbBrandMessenger className="mx-2"/>Contact Prefrence
                            </NavDropdown.Item>
                            
                        </NavDropdown>
                        <Nav.Item>
                            <NavLink to='#' className='nav-link text-light my-2 px-2 d-md-none' onClick={toggleModal}> <FiSearch size={25}/></NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='#' className='nav-link text-light my-2 px-2 d-md-none' > <BsPerson size={25}/></NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='#' className='nav-link text-light my-2 px-2'> <BsHeart size={25}/></NavLink>
                        </Nav.Item>
                        <Nav.Item>
                        
                            <NavLink to='/bag' className='nav-link text-light my-2'> 
                            <div className="">
                            <BsHandbag size={25}/>

                            <Badge className="rounded-pill bg-light brand text-danger  position-absolute top-0 ">2</Badge>
                            </div>
                            </NavLink>
                        </Nav.Item>
                        
                    </Nav> 
                    <MobileMenu show={Mobilemenu} onHide={handleMobileMenu}/>
                    <Modal show={showModal} onHide={toggleModal}>
                <Modal.Body>
                    <InputGroup>
                        <FormControl
                        autoFocus
                            size="sm"
                            placeholder="search for items and brands"
                            aria-label="search for items and brands"
                            className="bg-light border-0 shadow-none col-12"/>
                            <InputGroup.Text className="bg-light border-0">
                            <FiSearch size={25}/>
                            </InputGroup.Text>
                    </InputGroup>
                </Modal.Body>
                <Row className="pb-2">
                    <Col className="offset-8">
                        <Button size="sm" variant="outline-primary" onClick={toggleModal}>
                        Search
                        </Button>
                    </Col>
        
                <Col>
                    <Button size="sm" variant="outline-danger" onClick={toggleModal}>
                        Cancel
                    </Button>
                </Col>
                </Row>
            </Modal>
        </Navbar>
    )
}

