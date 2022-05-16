import SignUpForm from "../../components/sign-up/sign-up.component";
import SignInForm from "../../components/sign-in/sign-in.component";
import "./authentication.styles.scss";

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

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
