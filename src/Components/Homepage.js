import {Carousel,Card, Button,Badge,Row,Col, Image} from 'react-bootstrap'
import { Link } from "react-router-dom"
import GrowExample from '../Loading'
import {motion} from 'framer-motion'

function HomeCarousel(){
    return(
        <Carousel variant="dark" className='mt-2'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carousel 1.webp"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="images/carousel 222.jpg"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="images/second-hero-222.jpg"
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    )
}

function MenCards(props){
    let use = props.men.Men;
    function getMultipleRandom(use , num) {
        const shuffled = [...use].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
    const get = getMultipleRandom(use, 2) 
    console.log(get)

    const man = get.map(guy=>{
        return(
            <div key={guy._id}  className=" col-10 col-md-5  col-lg-4  mx-auto mt-5 text-center" >
                <Card  className='mx-auto border-0'>
                    <Link to={`/men/${guy._id}`} className="text-decoration-none text-dark">
                    <Card.Img variant="top" src={guy.image} alt={guy.name}  />
                    <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger  position-absolute top-1 start-0">{guy.discount}</Badge></Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title><h6> <strong>{guy.name}</strong></h6></Card.Title>
                        {/* 
                        <Card.Text>
                        {guy.description}
                        <strong className="text-danger">{guy.price}</strong> <span className="text-decoration-line-through text-muted">{guy.oldprice}</span>
                        </Card.Text> */}
                    </Card.Body>
                    </Link>
                </Card>
            </div>
        )
    })
    return(
        <div className='row'>
            {man}
        </div>
        
    )
        
    
}

function WomenCards(props){
  let use = props.women.Women;
  function getMultipleRandom(use , num) {
      const shuffled = [...use].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
  }
  const get = getMultipleRandom(use, 2) 
  console.log(get)

  const woman = get.map(lady=>{
      return(
          <div key={lady._id}  className=" col-10 col-md-5  col-lg-4   mx-auto mt-5 text-center" >
              <Card  className='mx-auto border-0'>
                  <Link to={`/men/${lady._id}`} className="text-decoration-none text-dark">
                  <Card.Img variant="top" src={lady.image} alt={lady.name}  />
                  <Card.ImgOverlay> <Badge className="rounded-pill bg-transparent text-danger  position-absolute top-1 start-0">{lady.discount}</Badge></Card.ImgOverlay>
                  <Card.Body>
                      <Card.Title><h6> <strong>{lady.name}</strong></h6></Card.Title>
                      {/* 
                      <Card.Text>
                      {guy.description}
                      <strong className="text-danger">{lady.price}</strong> <span className="text-decoration-line-through text-muted">{lady.oldprice}</span>
                      </Card.Text> */}
                  </Card.Body>
                  </Link>
              </Card>
          </div>
      )
  })
  return(
      <div className='row'>
          {woman}
      </div>
      
  )
    

}
function Brandslogos(){
  return(
      <div className="container text-center my-5">
          <Row>
              
             
              <Col md={2}  xs={4}>
                  <Image src="images/Tommy_Hilfiger-Logo-PNG1.png"  style={{width:"5rem"}} className='brand-logo-effect' />
              </Col>
              <Col md={2} xs={4}>
                  <Image src="images/Ralph_Lauren-Logo-PNG7.png"  style={{width:"5rem"}} className='brand-logo-effect'/>
              </Col >
              <Col md={2}  xs={4}>
                  <Image src="images/Supreme-Logo-PNG5.png"  style={{width:"5rem"}} className='brand-logo-effect'/>
              </Col>
              <Col md={2} xs={4}>
                  <Image src="images/H_M-Logo-PNG2.png"  style={{width:"5rem"}} className='brand-logo-effect'/>
              </Col>
              <Col md={2} xs={4}>
                  <Image src="images/Louis_Vuitton-Logo-PNG13.png"  style={{width:"5rem"}} className='brand-logo-effect'/>
              </Col>
              <Col md={2} xs={4}>
                  <Image src="images/Adidas-Logo-PNG13.png"  style={{width:"5rem"}}  className='brand-logo-effect'/>
              </Col>
              
          
          </Row>
          

      </div>
  )
}
export default function HomePage(props){
    return(
        <motion.div
            initial={{opacity:0, x: -300}}
            animate={{opacity:1, x: 0, transition:{duration:0.8}}}
            exit={{opacity:0, x: -300,}}>
            <HomeCarousel/>
            <div className='container'>
            <Row className='mx-auto'>
              <Col >
                <MenCards men={props.men}/>
              </Col>
                <Col>
                <WomenCards women={props.women}/>
                </Col>
                
            </Row>
            <Brandslogos/>

            </div>
            

        </motion.div>
    )
}