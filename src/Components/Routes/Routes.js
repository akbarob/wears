import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Men from "../Men/men"
import Women from "../Women/women"
import HomePage from "../Homepage"
import { propTypes } from "react-bootstrap/esm/Image"
export default function AnimatedRoutes(props){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/men" element={<Men men={props.men}/>}/>
            <Route path ="/men/:itemId" element={<props.MenId/>}/>
            <Route path="/women" element={<Women women={props.women}/>} />
            <Route path ="/women/:itemId" element={<props.WomenId/>}/>


            <Route path='*' element={<Navigate to='/'/>}/>


        </Routes>
    )
}