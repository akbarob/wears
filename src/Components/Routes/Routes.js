import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Men from "../Men/men"
import Women from "../Women/women"
import HomePage from "../Homepage"
import { propTypes } from "react-bootstrap/esm/Image"
import Bag from "../bag"
import Signin from "../signIn"
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes(props){
    const location = useLocation();
    return(
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<HomePage men={props.men} women={props.women}/>}/>
                <Route path="/men" element={<Men men={props.men}/>}/>
                <Route path ="/men/:itemId" element={<props.MenId/>}/>
                <Route path="/women" element={<Women women={props.women}/>} />
                <Route path ="/women/:itemId" element={<props.WomenId/>}/>
                <Route path="/bag" element={<Bag />} />

                <Route path="/signin" element={<Signin/>}/>



                <Route path='*' element={<Navigate to='/'/>}/>


            </Routes>
        </AnimatePresence>
    )
}