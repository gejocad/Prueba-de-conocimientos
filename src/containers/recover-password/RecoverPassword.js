import React, {useRef} from 'react';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';

const RecoverPassword = () => {
    const passwordInput = useRef(null);
    const confirmPasswordInput = useRef(null);

    const confirm = (event) => {
        toast.warn('Henüz fonksiyonel değil!');
        event.preventDefault();
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
                    <p className="login-box-msg">Recuperar</p>
                    <form onSubmit={confirm}>
                        <div className="input-group mb-3">
                            <input
                                ref={passwordInput}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                ref={confirmPasswordInput}
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    Recuperar contraseña
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

export default RecoverPassword;
