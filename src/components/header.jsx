import React from "react";
import bell from "../assets/bell.svg"; 

function Header() {
    return(
        <>
            <div className="p-1 mb-0 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li className="nav-link px-2 link-secondary">Home</li>
                            <li className="nav-link px-2 link-body-emphasis">&gt;</li>
                            <li className="nav-link px-2 link-body-emphasis fw-bold">Dashboard V2</li>
                        </ul>
                        <form className="col-12 col-md-4 mb-3 mb-lg-0 me-lg-3 mb-md-0" role="search">
                            <input type="search" className="form-control" placeholder="Search anything..." aria-label="Search" id="1"/>
                        </form>
                        <div className="dropdown text-end d-flex align-items-center justify-content-center">
                            <p className="m-0 px-4">Hello Username!</p>
                            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"></a>
                            <ul className="dropdown-menu text-small">
                                <li className="dropdown-item">Home</li>
                                <li className="dropdown-item">Service</li>
                                <li className="dropdown-item">Contact</li>
                                <li className="dropdown-item">About</li>
                            </ul>
                        </div>
                        <div className="px-4">
                            <img src={bell} alt="Logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;