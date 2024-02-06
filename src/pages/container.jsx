

import Home from './home';
import About from './about';
import Contact from './contact';
import NotFound from './notFound';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Navigate,
} from "react-router-dom";
import LayoutHeader from '../component/layoutHeader';
import LayoutFooter from '../component/layoutFooter';



export default function Container() {


    return (
        <div >
            <LayoutHeader />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            <LayoutFooter />
        </div>
    )
}
