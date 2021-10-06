import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const MenuSidebar = () => {
    
    

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/I/41hzbXlmykL.png"
                    alt="Logo"
                    className="brand-image"
                    style={{opacity: '.8'}}
                />
                <span className="brand-text font-weight-light">Control WEATHER</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        {/*<img
                            src={image}
                            className="img-circle elevation-2"
                            alt="User"
                        />*/}
                    </div>
                    <div className="info">
                    </div>
                </div>
                <nav className="" style={{overflowY: 'hidden'}}>
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        <li className="">
                            <NavLink to="/WEATHER" exact className="nav-link mt-5">
                                <HomeIcon className="nav-icon fas"/>
                                <p>Inicio</p>
                            </NavLink>
                        </li>
                       
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default MenuSidebar;
