import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../filebase/filebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null)

    const auth = getAuth(app)
    console.log(app)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const handleGoogleButton = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const GoogleUser = result.user
                console.log(GoogleUser)
                setUser(GoogleUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleGitHubButton = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const gitHubUser = result.user
                console.log((gitHubUser))
                setUser(gitHubUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleSignIn = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="">

            {user ?

                <div className="flex justify-center">
                    <button onClick={handleSignIn} className="btn btn-warning">Sign Out</button>
                </div> :

                <div className="flex justify-center gap-5">
                    <button onClick={handleGoogleButton} className="btn btn-primary">Google LogIn</button>
                    <button onClick={handleGitHubButton} className="btn btn-primary">GitHub Login</button>
                </div>}
            {
                user && <div className="text-base font-semibold text-center my-10">
                    User Name : {user.displayName}
                    <br />
                    User Image : {user.photoURL}
                </div>
            }
        </div>
    );
};

export default Login;