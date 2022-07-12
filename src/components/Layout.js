import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome} from '@fortawesome/free-solid-svg-icons'
import Rent from "./Rent";
import Buy from "./Buy";
import Sell from "./Sell";
import Manage  from "./Manage";
import NoPage from "./NoPage";
import './layout.css';

const Layout =()=> {

    return (

    <>
        <BrowserRouter>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <NavLink className="navbar-brand text" as={NavLink} to={"/"}>
                <FontAwesomeIcon icon={faHome} className="fahome"/>
                    Real Estate
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" 
                              as={NavLink} to={"/"}>Rent</NavLink>	
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" as={NavLink} to={"/buy"}>Buy</NavLink>	
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" as={NavLink} to={"/sell"}>Sell</NavLink>	
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" as={NavLink} to={"/manage"} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Manage Property
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" as={NavLink} to={"/"}>Rent</NavLink>
                                <NavLink className="dropdown-item" as={NavLink} to={"/buy"}>Buy</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" as={NavLink} to={"/sell"}>Sell</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" as={NavLink} to={"/resource"} id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Resources
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" as={NavLink} to={"/"}>Rent</NavLink>
                                <NavLink className="dropdown-item" as={NavLink} to={"/buy"}>Buy</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" as={NavLink} to={"/sell"}>Sell</NavLink>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <button className="btn mr-sm-2 login"> Login </button>
                    <button className="btn my-2 my-sm-0 signup">Sign Up</button>
                    </form>
                </div>
            </nav>
            <div>
                <Routes>
                    <Route>
                        <Route index path="/" element={<Rent />} />
                        <Route path="buy" element={<Buy />} />
                        <Route path="sell" element={<Sell />} />                        
                        <Route path="manage" element={<Manage />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>

    </>
)
}
export default Layout;