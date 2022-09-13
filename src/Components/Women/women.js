import {Button, Card, Badge} from 'react-bootstrap'
import { Link } from "react-router-dom"
import GrowExample from '../../Loading'


function RenderMenItems(props){
    console.log(props.women.Women)
    if(props.women.isLoading){
        return(
            <div>
                <GrowExample/>
            </div>
        )
    }
    else if(props.women.errMess){
        return(
            <div>
                <h4>{props.women.errMes}</h4>
            </div>
        )
    }
    else{
    
        const Women = props.women.Women.map(lady =>{
            
        return(
            <div  key={lady._id}   className="col-12 col-md-5 col-lg-4 mx-auto mt-5">
                <Card style={{ width: '15rem',  }} className='mx-auto border-0'>
                    <Link to={`/women/${lady._id}`} className="text-decoration-none text-dark">
                    <Card.Img variant="top" src={lady.image} alt={lady.name}/>
                    <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger  position-absolute top-1 start-0">{lady.discount}</Badge></Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title><h6 className='display-6'>{lady.name}</h6></Card.Title>
                        <Card.Text>
                            <p>{lady.description}</p>
                            <p>
                                <strong className="text-danger"><span className='naira'>N</span> {lady.price}</strong>
                                {' '}
                                <small><span className="text-decoration-line-through text-muted"><span className='naira'>N</span>{lady.oldprice}</span></small>
                            </p>
                        </Card.Text>
                    </Card.Body>
                    </Link>
                </Card>
            </div>
        ) 
        })
        
        return(
            <div className='row'>
                {Women}      
            </div>
            
        )
    }
}
export default function Women (props){
    return(
        <div className="text-center bg-light header py-3">
            <div className='femalehero'>
                <h2 variant='danger' className=''><em>Sale</em></h2>
                <h3>Whooping 25% off on all items bought Today ! ! ! </h3>
                <h4>ALREADY UP TO 80% OFF</h4>
                <h6>With code : <strong className="blink_me text-warning">Badak25</strong></h6>

            </div>
            

            
            <div className=" container pb-5">
              <RenderMenItems women={props.women}/>
            </div>

        </div>
    )
}