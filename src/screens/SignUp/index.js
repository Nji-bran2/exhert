import React, { useState } from "react";
import cn from "classnames";
import styles from "./SignUp.module.sass";
import Login from "../../components/Login";
import Form from "./Form";
import Confirm from "./Confirm";
import Code from "./Code";
import SignInForm from "./Form";
import AuthModal from "../../components/AuthModal";

const SignUp = ({switchToSignIn}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Login
      content="Already have an account?"
      linkText="Login"
      linkUrl="/sign-in"
      onLinkClick={switchToSignIn} 
    >
      {activeIndex === 0 && <Form 
      goNext={() => setActiveIndex(1)} 
      />}
      {activeIndex === 1 && <Confirm goNext={() => setActiveIndex(2)} />}
      {activeIndex === 2 && <Code />}
    </Login>
  );
};

export default SignUp;

// const SignUp = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <AuthModal
//       content="Already have an account?"
//       linkText="Login"
//       linkUrl="/sign-in"
//     >
//       {/* {activeIndex === 0 && <Form 
//       // goNext={() => setActiveIndex(1)} 
//       />} */}
//       <SignInForm/>
//       {activeIndex === 1 && <Confirm goNext={() => setActiveIndex(2)} />}
//       {activeIndex === 2 && <Code />}
//     </AuthModal>
//   );
// };

// export default SignUp;