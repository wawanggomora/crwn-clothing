import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";

import SignUpForm from "../../components/sign-up/sign-up.component";

//sign in with Google redirect
/* import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"; */

const SignIn = () => {
  //sign in with Google redirect
  /*   useEffect(() => {
    async function getRedirectResults() {
      const response = await getRedirectResult(auth);

      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    getRedirectResults();
  }, []); */

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <div>
        <button onClick={logGoogleUser}>Sign in with popup</button>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
