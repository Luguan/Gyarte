'use strict';

(function() {
  const login = document.querySelector("#loginform");

  login.addEventListener('submit',function(e){
    e.preventDefault();
    const obj={
       username: document.querySelector("[name=loginUsername]").value,
       password: document.querySelector("[name=loginPassword]").value
    }

    sendInfo(obj, "/login", function(response){
      if(response.loggedIn){
        nav("adminWeb");
        window.key =response.key;
      }
    });
  });
})();
