window.addEventListener('load', function() {

  var webAuth = new auth0.WebAuth({
    domain: 'softspot.auth0.com',
    clientID: '00oMtmECFm4Wnq0DTUlICXGmCIcdrP3c',
    responseType: 'token id_token',
    audience: 'https://softspot.auth0.com/userinfo',
    scope: 'openid',
    redirectUri: window.location.href
  });

  var loginBtn = document.getElementById('btn-login');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});
