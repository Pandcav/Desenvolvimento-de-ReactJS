import React from "react";
import { BrowserRouter as Router, Routes, Route,
    
} from "react-router-dom";
import Login from "./src/pages/Login/index";


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
            </Routes>
        </Router>
    )

}