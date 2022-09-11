import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import { Button } from "react-bootstrap";

export default function Footer(){
    return(
            <div className="row footer mt-3 pt-3">
         
            <div className=" col-sm-10  col-md-auto mx-auto">
                <h4> Help & Information</h4>
                <ul className="list-unstyled px-2">
                    <Link to='# ' className="footer-link" ><li>Help</li></Link>
                    <Link to='#' className="footer-link"><li>Track orders</li></Link>
                    <Link to='# ' className="footer-link"> <li>Delivery Information</li></Link>
                </ul >
            </div>
            <div className=" col-sm-10 col-md-auto mx-auto">
                <h4> About WEARS</h4>
                <ul className="list-unstyled px-2">
                <Link to='# ' className="footer-link" ><li>About us</li></Link>
                <Link to='#' className="footer-link"><li>Carres at WEARS</li></Link>
                <Link to='#' className="footer-link"><li>Coporate Responsibilities</li></Link>
                <Link to='#' className="footer-link"><li>Investors' sites</li></Link>

                </ul >
            </div>
            <div className=" col-sm-10 col-md-auto mx-auto">
                <h4> More From WEARS</h4>
                <ul className="list-unstyled px-2" >
                <Link to='#' className="footer-link"><li>Mobile & WEARS APP</li></Link>
                <Link to='#' className="footer-link" ><li>WEARS Marketplace</li></Link>
                <Link to='#' className="footer-link"><li>Gift vouchers</li></Link>
                <Link to='#' className="footer-link" ><li>Help</li></Link>
                <Link to='#' className="footer-link"><li>Black Friday</li></Link>
                <Link to='#' className="footer-link"><li>WEARS x Thrift-</li></Link>
                </ul >
            </div>
            <div className="col-12 text-center">
                <Button variant="outline-primary" className="border-0"><BsFacebook size={30}/></Button>
                <Button  variant="outline-danger" className="border-0" ><BsInstagram size={30}/></Button>
                <Button  variant="outline-primary" className="border-0" ><BsTwitter size={30}/></Button>
                <Button  variant="outline-warning" className="border-0 " ><BsSnapchat size={30}/></Button>


            </div>
        
            <div className="mt-auto ">
                <p className=" text-center "> 
                <p className="">made with 🤎 by Akbar Badmus</p>
                ©️ wears™ co via akbarbadmus ™️ 2022. </p>
              
        </div>         </div>
    )
}