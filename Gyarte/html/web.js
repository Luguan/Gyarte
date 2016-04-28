const element = document.querySelector("#loginForm");


element.addEventListener('submit',function(e){
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
  xhttp.send(JSON.stringify({
    "username": name,
    "password": pw
  }));
}
