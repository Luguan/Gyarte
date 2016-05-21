'use strict';

function sendInfo(info, url, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        const response = JSON.parse(xhttp.responseText);
        callback(response);
      }
      else {
        alert("error");
      }
    }
  };
  xhttp.open("POST", url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(info));
}
