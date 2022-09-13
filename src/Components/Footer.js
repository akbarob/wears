import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { Button, Row, Col } from "react-bootstrap";

export default function Footer(){
    return(
            <div className=" footer mt-3 py-3 ">
                <div className="d-none d-md-block">
                    <Row>
                        <Col className="mx-auto col-3">
                            <h4> Help & Information</h4>
                            <ul className="list-unstyled px-2">
                                <Link to='# ' className="footer-link" ><li>Help</li></Link>
                                <Link to='#' className="footer-link"><li>Track orders</li></Link>
                                <Link to='# ' className="footer-link"> <li>Delivery Information</li></Link>
                            </ul >
                        </Col>
                        <Col className="mx-auto col-3">
                            <h4> About WEARS</h4>
                            <ul className="list-unstyled px-2">
                            <Link to='# ' className="footer-link" ><li>About us</li></Link>
                            <Link to='#' className="footer-link"><li>Carres at WEARS</li></Link>
                            <Link to='#' className="footer-link"><li>Coporate Responsibilities</li></Link>
                            <Link to='#' className="footer-link"><li>Investors' sites</li></Link>
                            </ul >
                        </Col>
                        <Col className="mx-auto col-3">
                            <h4> More From WEARS</h4>
                            <ul className="list-unstyled px-2" >
                                <Link to='#' className="footer-link"><li>Mobile & WEARS APP</li></Link>
                                <Link to='#' className="footer-link" ><li>WEARS Marketplace</li></Link>
                                <Link to='#' className="footer-link"><li>Gift vouchers</li></Link>
                                <Link to='#' className="footer-link" ><li>Help</li></Link>
                                <Link to='#' className="footer-link"><li>Black Friday</li></Link>
                                <Link to='#' className="footer-link"><li>WEARS x Thrift-</li></Link>
                            </ul >
                        </Col>
                    </Row>

                </div>
         
            <div className="col-12 text-center">
                <Button variant="outline-primary" className="border-0"><BsFacebook size={30}/></Button>
                <Button  variant="outline-danger" className="border-0" ><BsInstagram size={30}/></Button>
                <Button  variant="outline-primary" className="border-0" ><BsTwitter size={30}/></Button>
                <Button  variant="outline-warning" className="border-0 " ><BsSnapchat size={30}/></Button>


            </div>
        
            <div className="mt-auto col-12 col-md-3 mx-auto text-center  ">
                <h6 > 
                <p >made with 🤎 by Akbar Badmus</p>
                ©️ wears™ co via akbarbadmus ™️ 2022. </h6>
            </div>         
        </div>
    )
}