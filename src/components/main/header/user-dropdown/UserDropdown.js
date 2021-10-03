import React, {useRef, useEffect, useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {startLogout} from './../../../../actions/authAction';

const UserDropdown = () => {
    const dropdownRef = useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const { name, image, email } = useSelector(state => state.auth)

    const [dropdownState, updateDropdownState] = useState({
        isDropdownOpen: false
    });

    const toggleDropdown = () => {
        updateDropdownState({isDropdownOpen: !dropdownState.isDropdownOpen});
    };

    const handleClickOutside = (event) => {
        if (
            dropdownRef &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            updateDropdownState({isDropdownOpen: false});
        }
    };

    const logOut = (event) => {
        toggleDropdown();
        event.preventDefault();
        dispatch(startLogout());
        history.push('/login');
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, false);
        return () => {
            document.removeEventListener(
                'mousedown',
                handleClickOutside,
                false
            );
        };
    });

    let className = 'dropdown-menu dropdown-menu-lg dropdown-menu-right';

    if (dropdownState.isDropdownOpen) {
        className += ' show';
    }

    return (
        <li ref={dropdownRef} className="nav-item dropdown user-menu">
            <button
                onClick={toggleDropdown}
                type="button"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
            >
                <img
                    src={image}
                    className="user-image img-circle elevation-2"
                    alt="User"
                />
                {/* <span className="d-none d-md-inline">{email}</span> */}
            </button>
            <ul className={className}>
                <li className="user-header bg-primary">
                    <img
                        src={image}
                        className="img-circle elevation-2"
                        alt="User"
                    />
                    <p>
                        {name}
                        <small>
                            <span>{email}</span>
                            
                        </small>
                    </p>
                </li>
                <li className="user-body">
                    <div className="row">
                        <div className="col-4 text-center">
                            <Link to="/">Segidores</Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/">Ventas</Link>
                        </div>
                        <div className="col-4 text-center">
                            <Link to="/">Amigos</Link>
                        </div>
                    </div>
                </li>
                <li className="user-footer">
                    <Link
                        to="/programa"
                        onClick={toggleDropdown}
                        className="btn btn-default btn-flat"
                    >
                        Perfil
                    </Link>
                    <button
                        type="button"
                        className="btn btn-default btn-flat float-right"
                        onClick={logOut}
                    >
                        Login
                    </button>
                </li>
            </ul>
        </li>
    );
};

export default UserDropdown;
