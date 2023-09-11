import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    // Handle the response from Google here
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
