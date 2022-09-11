import {Button, Card, Badge} from 'react-bootstrap'
import { Link } from "react-router-dom"
import GrowExample from '../../Loading'


function RenderMenItems(props){
    console.log(props.men.Men)
    if(props.men.isLoading){
        return(
            <div>
                <GrowExample/>
            </div>
        )
    }
    else if(props.men.errMess){
        return(
            <div>
                <h4>{props.men.errMes}</h4>
            </div>
        )
    }
    else{
        const Men = props.men.Men.map(guy =>{
            
        return(
            <div  key={guy._id}   className="col-12 col-md-5 col-lg-4 mx-auto mt-5">
                <Card style={{ width: '15rem',  }} className='mx-auto border-0'>
                    <Link to={`/men/${guy._id}`} className="text-decoration-none text-dark">
                    <Card.Img variant="top" src={guy.image} alt={guy.name}/>
                    <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger  position-absolute top-1 start-0">{guy.discount}</Badge></Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title><h6 className='display-6'>{guy.name}</h6></Card.Title>
                        <Card.Text>
                            <p>{guy.description}</p>
                            <p><strong className="text-danger"><span className='naira'>N</span> {guy.price}</strong> <small><span className="text-decoration-line-through text-muted"><span className='naira'>N</span>{guy.oldprice}</span></small>
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
                {Men}      
            </div>
            
        )
    }
    

}
export default function Men(props){
    return(
        <div className="text-center bg-light header py-5">
            <Button variant='brand'>Sale</Button>
            <h3>EXTRA 20% off!!!</h3>
            <h4>ALREADY UP TO 80% OFF</h4>
            <h6>With code : <strong className="blink_me text-success">akbarob</strong></h6>

            
            <div className="row pb-5">
              <RenderMenItems men={props.men}/>
            </div>

        </div>
    )
    
}