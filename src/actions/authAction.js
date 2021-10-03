import { firebase, googleAuthProvider, facebookAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./uiAction";

export const startLogin = (email, password) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(startLoading())
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
            })
            .catch(e => {
                dispatch(finishLoading())
                console.log(e);
            })
    }
}

    export const startGoogleLogin = () => {
        return (dispatch) => {
            firebase.auth().signInWithPopup(googleAuthProvider)
                .then(async ({ user }) => {
                    dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
                })
                .catch( e => {
                    console.log(e);
                })
        }
    }

export const startFacebookLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then( async ({ user }) => {
                dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
            })
            .catch( e => {
                console.log(e);
            })
    }
}

export const startRegisterUser = (name, lastName, email, password) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name + ' ' + lastName })

                dispatch(login(user.uid, user.displayName, user.email, user.photoURL))
            })
            .catch(e => {
                console.log(e);
            })
    }
}

export const login = (uid, displayName, email, image) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            email,
            image
        }
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}

export const recover = () => ({
    type: types.recoverPassword,
  })

export const recoverPassword = (email) => {
    return (dispatch) => {
      return firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
         
          dispatch(recover());
          
        })
        .catch((e) => {
          console.log(e)
        
        });
    }
  }