import { Offcanvas, Button, Nav,Row, Col, Accordion , Image} from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import {GrClose} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'
import {FaBars,FaRegUser,FaBoxOpen }from 'react-icons/fa'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {TbBrandMessenger} from 'react-icons/tb'




export default function MobileMenu(props){
    return(
        <Offcanvas show={props.show} onHide={props.onHide} >
            <Offcanvas.Header > 
                <NavLink to='/' className='mx-auto ps-5'>
                    <Image src="images/Group 2.svg" style={{width:"5rem"}}/>
                </NavLink>
            
                <Button variant="" onClick={props.onHide}>
                    <GrClose className="text-danger"/>
                </Button>
            </Offcanvas.Header>
            <Offcanvas.Title>
                <Nav variant="pills"  defaultActiveKey="/women" className="brand">
                    <Row className="mx-2 text-center">
                        <Col>
                        <Nav.Item>
                            <NavLink to='/women' id="off-nav-b" className='nav-link  mx-3' > WOMEN</NavLink>
                        </Nav.Item>
                        </Col>
                        <Col xs='2' className="d-flex ps-5"> <div className="vr" ></div> </Col>
                        <Col>
                            <Nav.Item>
                                <NavLink to='/men' id="off-nav-b" className=' nav-link  mx-3' > MEN</NavLink>
                            </Nav.Item>
                        </Col>
                    </Row>
                </Nav>
            </Offcanvas.Title>
            <Offcanvas.Body>
                    <div className=" mb-2">
                        <Row >
                            <Link to='signin'>
                                <Col xs={4} className="text-center mx-auto">Sign in</Col>
                            </Link>
                            
                            <Col xs={4}>Join</Col>
                        </Row>
                    </div>
                <Nav defaultActiveKey="/home" className="flex-column peen">
                    <Nav.Link href="#" className=' nav-link text-secondary my-2' ><BsPerson/> My Account</Nav.Link>
                    <Nav.Link eventKey="link-1" className=' nav-link text-secondary my-2'><FaBoxOpen/> My Orders</Nav.Link>
                    <Nav.Link eventKey="link-2" className=' nav-link text-secondary my-2'><AiOutlineQuestionCircle/> Return Information</Nav.Link>
                    <Nav.Link eventKey="link-3" className=' nav-link text-secondary my-2'> <TbBrandMessenger/> Contact Prefrence</Nav.Link>
                </Nav>
                <Accordion  className="my-3" flush>
                    <Accordion.Item eventKey="0" className="shadown-none">
                        <Accordion.Header>Help & Information</Accordion.Header>
                        <Accordion.Body className='p-0'>
                            <Nav defaultActiveKey="/home" className="flex-column peen">
                                <Nav.Link href="/home" className=' nav-link text-secondary' >Help</Nav.Link>
                                <Nav.Link eventKey="link-1" className=' nav-link text-secondary'>Track order</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>Delivery and Returns</Nav.Link>
                            </Nav>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>About WEARS</Accordion.Header>
                        <Accordion.Body className='p-0'>
                            <Nav defaultActiveKey="/home" className="flex-column peen">
                                <Nav.Link href="/home" className=' nav-link text-secondary' >About us</Nav.Link>
                                <Nav.Link eventKey="link-1" className=' nav-link text-secondary'>Careers at WEARS</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>Coporate Responsibility</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>Investors' site</Nav.Link>
                            </Nav>
                        
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>More From WEARS</Accordion.Header>
                        <Accordion.Body className='p-0'>
                            <Nav defaultActiveKey="/home" className="flex-column peen">
                                <Nav.Link href="/home" className=' nav-link text-secondary' >Mobile and WEARS appss</Nav.Link>
                                <Nav.Link eventKey="link-1" className=' nav-link text-secondary'>WEARS Marketplace</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>Gift Vouchers</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>Black Friday</Nav.Link>
                                <Nav.Link eventKey="link-2" className=' nav-link text-secondary'>WEARS x Thrift+</Nav.Link>
                            </Nav>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Offcanvas.Body>
                <div className="mt-auto">
                
                    
                    <p className=" py-3 text-center brand text-dark"> 
                    <p className="">made with 🤎 by Akbar Badmus</p>
                    ©️ wears™ co via akbarbadmus ™️ 2022. </p>
                  
            </div> 
        </Offcanvas>

    )
}