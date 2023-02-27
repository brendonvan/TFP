import { auth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
require('firebase/auth')
import { useContext } from 'react';
import { UserContext } from '../lib/context';


// const auth = getAuth();
const provider = new GoogleAuthProvider();

export default function EnterPage({  }) {

    const { user, username } = useContext(UserContext);

    return (
        <main>
            {user ?
                !username ? <UsernameForm /> : <SignOutButton />
                :
                <SignInButton />
            }
        </main>
    )
}

// Sign in button
function SignInButton() {
    function signInWithGoogle() {
        
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // // The signed-in user info.
            // const user = result.user;
            // // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // // ...
        });
    }

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'google.svg'} /> Sign in with Google
        </button>
    )
}

// Sign out button
function SignOutButton() {
    return <button onClick={() => auth.signOut()}>Sign Out</button>
}

function UsernameForm() {

}