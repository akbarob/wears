import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import AnimatedRoutes from "./Routes/Routes";
import { fetchMen,fetchWomen } from "../Redux/ActionCreators";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MenDetails from "./Men/menDetails";
import WomenDetails from'./Women/womenDetails'
import Footer from "./Footer";
import { actions} from "react-redux-form";
import ScrollToTop from "./ScrollToTop";

export default function Main(){
    const disptach = useDispatch()
    const men = useSelector(state => state.Men)
    const women = useSelector(state => state.Women)

    useEffect(()=>{
        disptach(fetchMen())
        disptach(fetchWomen())
    },[disptach])

    function MenId(){
        const {itemId} = useParams()
        return(
            <MenDetails
                omo={men.Men.filter(omo => omo._id === itemId)[0]}
                isLoading={men.isLoading}
                errMess={men.errMess}
            />
        )
    }
    function WomenId(){
        const {itemId} = useParams()
        return(
            <WomenDetails
                lady={women.Women.filter(lady => lady._id === itemId)[0]}
                isLoading={women.isLoading}
                errMess={women.errMess}
            />
        )
    }

    return(
        <div>
            <ScrollToTop />
            <Header/>
            <div  style={{minHeight: "75vh"}}>
            <AnimatedRoutes
             men={men} MenId={MenId}
             women ={women } WomenId={WomenId} 
            />
            </div>
            
            <Footer/>
        </div>
    )
}