'use strict';

(function (){
  const login = document.querySelector("[name=login]");
  const adminWeb = document.querySelector("[name=adminWeb]");

  const register = document.querySelector("[name=register]");
  const registerPupil = document.querySelector("[name=registerPupil]");
  const registerpupilForm = document.querySelector("#registerPupilForm");
  const registerForm = document.querySelector("#registerForm");


  function nav(page) {
    adminWeb.style.display = "none";
    login.style.display = "none";

    if(page === "login") {
      login.style.display = "block";
    }

    if(page === "adminWeb") {
      adminWeb.style.display = "block";
      tabChange("Register");
    }
  }

  function tabChange(tab) {
    registerForm.style.display = "none";
    registerPupilForm.style.display = "none";
    register.classList.remove("active");
    registerPupil.classList.remove("active");

    if(tab ==="Register pupil") {
      registerPupilForm.style.display = "block";
      registerPupil.classList.add("active");
    }

    if(tab === "Register") {
      registerForm.style.display = "block";
      register.classList.add("active");
    }
  }
  nav("login");
  window.nav = nav;

  register.addEventListener('click', function(e){
    e.preventDefault();

    tabChange("Register");
  });
  registerPupil.addEventListener('click', function(e) {
    e.preventDefault();

    tabChange("Register pupil");
  });
})();
