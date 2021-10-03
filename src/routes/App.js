import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authAction';
import Main from '@containers/main/Main';
import Login from '@containers/login/Login';
import Register from '@containers/register/Register';
import ForgetPassword from '@containers/forgot-password/ForgotPassword';
import RecoverPassword from '@containers/recover-password/RecoverPassword';
import PrivacyPolicy from '@containers/privacy-policy/PrivacyPolicy';
import {PublicRoute} from './PublicRoute';
import {PrivateRoute} from './PrivateRoute';
import firebase from 'firebase';
import { startLoadingStudent } from 'src/actions/studentAction';


function App() {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoogedIn, setIsLoogedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
        setIsLoogedIn(true)
        dispatch(startLoadingStudent())
      } else {
        setIsLoogedIn(false)
      }
      setChecking(false)
    })
  }, [dispatch, setChecking, setIsLoogedIn])

  if (checking) {
    return (
      <h1>Cargando ...</h1>
    )
  }

  return (
    
    <Router>
    <Switch>
        <PublicRoute exact path="/login" component={Login} isAuthenticated={isLoogedIn} />
        <PublicRoute exact path="/register" component={Register} isAuthenticated={isLoogedIn} />
        <PublicRoute exact path="/forgot-password" component={ForgetPassword} isAuthenticated={isLoogedIn} />
        <PublicRoute exact path="/recover-password" component={RecoverPassword} isAuthenticated={isLoogedIn} />
        <PublicRoute exact path="/privacy-policy" component={PrivacyPolicy} />
        <PublicRoute exact path="/callback">
            <h1>Callback</h1>
        </PublicRoute>
        <PrivateRoute path="/" component={Main} isAuthenticated={isLoogedIn} />
        <Redirect to='/login' />
    </Switch>
    </Router>
  );
}

export default App;
