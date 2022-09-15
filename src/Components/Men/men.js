import {Button, Card, Badge} from 'react-bootstrap'
import { Link } from "react-router-dom"
import GrowExample from '../../Loading'
import {motion} from 'framer-motion'


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
            <div  key={guy._id}   className="col-5 col-lg-4 mx-auto mt-5">
                <Card  className='mx-auto border-0'>
                    <Link to={`/men/${guy._id}`} className="text-decoration-none text-dark">
                    <Card.Img variant="top" src={guy.image} alt={guy.name}/>
                    <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger  position-absolute top-1 start-0">{guy.discount}</Badge></Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title><h6 className='display-6'>{guy.name}</h6></Card.Title>
                        <Card.Text>
                            <p>{guy.description}</p>
                            <p>
                                <strong className="text-danger"><span className='naira'>N</span> {guy.price}</strong> 
                                {' '}
                                {guy.oldprice? 
                                   <small><span className="text-decoration-line-through text-muted"><span className='naira'>N</span>{guy.oldprice}</span></small>
                                    : null    }
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
        <motion.div className="text-center bg-light header py-3"
        initial={{opacity:0, x: 300}}
        animate={{opacity:1, x: 0, transition:{duration:0.8}}}
        exit={{opacity:0, x: -300,}}>
            <div className='malehero'>
            <h2 > <em>Sale</em></h2>
            <h3>EXTRA 20% off ! ! !</h3>
            <h4>ALREADY UP TO 80% OFF</h4>
            <h6>With code : <strong className="blink_me text-success">akbarob</strong></h6>

            </div>
            

            
            <div className="container pb-5">
              <RenderMenItems men={props.men}/>
            </div>

        </motion.div>
    )
    
}