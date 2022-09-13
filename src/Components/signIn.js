import { NavLink , Link } from "react-router-dom"
import { Card,Row,Col,Button, Nav} from "react-bootstrap"
import { Control,  Form,} from "react-redux-form";

export default function Signin(){
    return(
        <div className="container">
            <div className="col-10 col-md-6 mx-auto ">
                <div className="text-center my-2">
                <Link to='/' className="text-center ">
                    <img src="images/Group 2.svg" style={{width:"8rem"}}/>
                </Link>
                </div >
                <Card>
                    <Card.Header className="text-center bg-brand brand">
                        <Nav>
                            <Nav.Item className="mx-auto">
                                <NavLink to='#'className='nav-link  fw-bolder text-light'>
                                <span>SignIn</span> 
                                </NavLink>
                            </Nav.Item>
                            <div className="vr mx-3  text- light align-self-center"></div>    

                            <Nav.Item className="mx-auto">
                                <NavLink to='#' className='nav-link  fw-bolder text-light'>
                                <span>LogIn</span> 
                                </NavLink>
                            </Nav.Item>
                        </Nav>
                         
                </Card.Header>

                    <Card.Body className="text-left">
                        <Form model='login' >
                        <Row className="form-group my-3">
                            <label htmlFor='email'>email</label>
                            <Col md={12}>
                            <Control.text 
                            className='col-12 form-control'
                            model='.email'
                            name='email' 
                            type='email' 
                            id='email'
                            autoComplete="on"
                            />
                            </Col>
                        </Row>
                        <Row className="form-group my-3">
                            <label htmlFor='password'>Password</label>
                            <Col md={12}>
                            <Control.text
                            className='col-12 form-control form-input'
                            model=".password"
                            name='password' 
                            type='password' 
                            id='password'
                            autoComplete="on"
                            />
                            </Col>
                        </Row>
                        <Row className="text-center"><h6>Forgot Password?</h6></Row>
                        
                        <Row  className="form-group my-3 " >
                                <Button className='col-10 mx-auto' type="submit" variant="brand" >Login</Button>
                        </Row>
                        <Row className='my-3 col-10 mx-auto'>
                            <Button variant='outline-danger' ><span className="fa fa-google fa-lg"></span> Login with Google</Button>    
                        </Row>      
                
                </Form>

                        </Card.Body>

                </Card>
                
            </div>

        </div>

    )
}