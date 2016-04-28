const login = document.querySelector("[name=login]");
const register = document.querySelector("[name=register]");

register.style.display = "none";
login.addEventListener('submit',function(e){
  e.preventDefault();
  const username = document.querySelector("[name=username]").value;
  const password = document.querySelector("[name=password]").value;

  sendLoginInfo(username, password);
});

function sendLoginInfo(name, pw) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        alert(xhttp.responseText);
        const response = JSON.parse(xhttp.responseText);
        if(response.loggedIn){
          alert("funkar!");
          login.style.display = "none";
          register.style.display = "block";
        }
      }
      else {
        alert("not working");
      }
    }
    else {
      alert("not working2");
    }
  };
  xhttp.open("POST", "/login", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify({
    "username": name,
    "password": pw
  }));
}
