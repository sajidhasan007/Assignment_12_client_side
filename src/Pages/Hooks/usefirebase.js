import {
    getAuth, signInWithPopup, GoogleAuthProvider, signOut,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuthentication from "../Firebase/firebase.init";
//import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const UseFirebase = () => {
    const history = useHistory();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [bikes, setBikes] = useState([]);
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();






    // const history = useHistory();



    //console.log(user);
    //console.log(typeof (set_newuser));

    const handleName = name => {
        setName(name);
    }

    const handleemail = (email) => {
        setEmail(email);
    }

    const handlepassword = (password) => {
        setPassword(password);
    }

    /* const handlelogin = (e) => {
        setIsLogin(e.target.checked);
        //console.log('form login page toggle', e.target.checked);
    } */

    /* const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    } */

    //console.log(user);
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {

                //console.log(error);
            })
            .finally(() => setIsLoading(false));
    }





    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // ...
                const newuser = {
                    email: user.email,
                    name: user.displayName,
                    img: user.photoURL
                };

                setUser(newuser);

                /* const newUser = { email, displayName: name };
                setUser(newUser); */
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // setAuthError('');
            })
            .catch((error) => {
                // setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }




    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                //setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                // setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                getIdToken(user)
                    .then(idtoken => localStorage.setItem('idToken', idtoken))

                const newuser = {
                    email: user.email,
                    name: user.displayName,
                    img: user.photoURL
                };
                //console.log('i print after history from google');
                setUser(newuser);
                // console.log(user);
            } else {
                // User is signed out
                // ...
            }
            setIsLoading(false);
        });
    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [user.email])

    console.log(bikes);






    const handlesignout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    /*  const isAdmin = () => {
         if (user.role == 'admin') {
 
         }
     } */

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };

        console.log(method, '  hello from save to user  ', user);

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        setUser,
        signInWithGoogle,
        handlesignout,
        isLoading,
        setIsLoading,
        handleemail,
        handlepassword,
        bikes,
        setBikes,
        registerUser,
        loginUser,
        isLogin,

        handleName
    }
}

export default UseFirebase;