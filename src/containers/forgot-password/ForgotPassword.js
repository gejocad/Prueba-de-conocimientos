import React from 'react';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import { useDispatch } from 'react-redux';
import { recoverPassword } from '../../actions/authAction';
import {useForm} from '../../hooks/useForm'

const ForgotPassword = () => {
    

    const [formValues, handleInputChange] = useForm({
        
        emailImput: ''
    })

    const  {emailInput}   = formValues


    const dispatch = useDispatch();

    const requestNewPassword = e => {
        toast.warn('Para continuar revise en su correo.');
        // eslint-disable-next-line no-console
        e.preventDefault();
        console.log(emailInput)
        dispatch(recoverPassword(emailInput))
    };  

    document.getElementById('root').classList = 'hold-transition login-page';

    return (
        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <Link to="/" className="h1">
                        <b>WEATHER</b>
                        <span>Control</span>
                    </Link>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">
                        Recuperar contraseña
                    </p>
                    <form onSubmit={requestNewPassword}>
                        <div className="input-group mb-3">
                            <input
                                name="emailInput"
                                value={emailInput}
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                onChange={handleInputChange}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    Solicitar contraseña
                                </button>
                            </div>
                        </div>
                    </form>
                    <p className="mt-3 mb-1">
                        <Link to="/login">
                            Iniciar
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
