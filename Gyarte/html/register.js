'use strict';

(function() {
  const register = document.querySelector("#registerForm");
  const user = document.querySelector("[name=user]");

  register.addEventListener('submit',function(e){
    e.preventDefault();

    let pw;

    if(document.querySelector("[name=password]").value === document.querySelector("[name=password2]").value) {
      pw = document.querySelector("[name=password]");
    }

    const obj={
      adminKey: window.key,
      username: user.value,
      password: pw.value,
      permissionLevel: 0
    }

    sendInfo(obj, "/register", function(response){
      if(response.registered) {
        alert("registered");
      }
    });
  });
})();
