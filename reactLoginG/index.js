'use strict'

var React = require('react'),
    Google = require('react-google-login');

// Result response Google Login
var resultGoogleLogin = function( response ) {
  console.log( response );
}

React.render(
  <Google
        appId="1088597931155576"
        class="Google-login"
        scope="public_profile, email, user_birthday"
        loginHandler={ resultGoogleLogin } />,

  document.getElementById('Google-login'))
