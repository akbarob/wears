import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import Men from "../Men/men"
import Women from "../Women/women"
import HomePage from "../Homepage"
export default function AnimatedRoutes(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/women" element={<Women/>}/>


            <Route path='*' element={<Navigate to='/'/>}/>


        </Routes>
    )
}