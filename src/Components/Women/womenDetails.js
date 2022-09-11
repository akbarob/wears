import {Breadcrumb, Button, Image, Form }from 'react-bootstrap'
import {BsHandbag,} from 'react-icons/bs'

function RenderItem(props){

    return(
        <div className="container">
            <Image src={props.lady.image} alt={props.lady.name}  style={{ width: '20rem'}} className='mx-auto d-block'/>  

        </div>

    )
}
function RenderInfo(props){

    return(
        <div className="container">
            <h4>{props.lady.description}</h4>
            <div className='row  mt-3'> 
                <h6 className='col-auto text-decoration-line-through text-muted'><span className='naira'>N </span>{props.lady.oldprice}</h6> <h6  className='col-auto text-danger'> <span className='naira'>N</span> {props.lady.price}</h6>
            </div>
            <div className='text-center'>
                <Form.Group>
                    <Form.Select aria-label=" select size" className='mx-auto shadow-none mt-3 col-auto'>
                    <option>Select size</option>
                    <option value="1">Small (s)</option>
                    <option value="2">Medium (M)</option>
                    <option value="3">Large (L)</option>
                    <option value="3">Extra-Large (XL)</option>
                    <option value="3">Extra-Extra-Large (XXL)</option>
                    </Form.Select >
                    <Form.Text className=" brand text-left">
                        View size Guide
                    </Form.Text>
                </Form.Group>
                    <Button variant="brand"  size="lg" className='mx-auto mt-5 px-auto col-12'>
                        <BsHandbag size={25} className='my-2'/> Add to bag
                    </Button>
                    
            </div>
            
            

            

        </div>

    )
}


export default function MenDetails(props){
    console.log(props.lady.image)
    return(
        <div className="container">
            <div className="row">
            <Breadcrumb className='py-2'>
                <Breadcrumb.Item href="/women">Women </Breadcrumb.Item>
                <Breadcrumb.Item active> {props.lady.name}</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className="col-12"> </div>
            <hr/>


            <div className='container'>
                <div className='row justify-content-center' >
                    <div className=' mx-auto col-md-6'>
                        <RenderItem 
                        lady={props.lady}  />

                    </div>
                    <div className=' mx-auto col-md-6  mt-5'>
                        <RenderInfo
                        lady={props.lady}  />
                    </div>
                   
                </div>
            </div>
            

        </div>
    )
}