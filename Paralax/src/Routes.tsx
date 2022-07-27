import React from "react";
import { BrowserRouter as Router, Routes, Route,
    
} from "react-router-dom";
import Login2 from "./pages/Parallax";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login2/>} />
            </Routes>
        </Router>
    )

}