'use strict';

(function() {
  const register = document.querySelector("#registerPupilForm");
  const user = document.querySelector("[name=userPupil]");
  const nameInput = document.querySelector("[name=name]");
  const telephoneInput = document.querySelector("[name=telephone]");
  const classInput = document.querySelector("[name=class]");

  register.addEventListener('submit',function(e){
    e.preventDefault();

    const obj={
      adminKey: window.key,
      username: user.value,
      name: nameInput.value,
      telephone: telephoneInput.value,
      class: classInput.value
    }

    sendInfo(obj, "/registerPupil", function(response){
      if(response.registered) {
        alert("registered");
      }
    });
  });
})();
