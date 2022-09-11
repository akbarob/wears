import { Button, Image, Navbar, Nav, NavDropdown, Form, Row, Col,InputGroup} from "react-bootstrap";
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
        <Navbar bg="brand" sticky="top">
            <Button className="d-md-none ms-3" onClick={handleMobileMenu}>
                <FaBars size={20} className='my-1 mx-1'/>
            </Button>
            <Navbar.Brand className="ms-5">
                <NavLink to='/'>
                    <Image src="images/wears-Logo4.png" style={{width:"2.5rem"}}/>
                </NavLink>
            </Navbar.Brand>

            
            <div className="d-none d-md-block col-7">
                <Nav>
                    <Nav.Item>
                        <NavLink to='/women' className='nav-link text-warning  px-3 py-3 m-w'> WOMEN</NavLink>
                    </Nav.Item>
                    <div className="vr mx-3"></div>                        
                    <Nav.Item>
                        <NavLink to='/men' className='nav-link text-light  px-3 py-3 m-w'> MEN</NavLink>
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
                            <NavLink to='#' className='nav-link text-light my-2 px-2 d-md-none' > <FiSearch size={25}/></NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='#' className='nav-link text-light my-2 px-2 d-md-none' > <BsPerson size={25}/></NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='#' className='nav-link text-light my-2 px-2'> <BsHeart size={25}/></NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to='#' className='nav-link text-light my-2 px-3'> <BsHandbag size={25}/></NavLink>
                        </Nav.Item>
                    </Nav> 
                    <MobileMenu show={Mobilemenu} onHide={handleMobileMenu}/>
        </Navbar>
    )
}

