var xhr = new XMLHttpRequest();
var homeLink = "http://127.0.0.1:5000/";

async function sendSMS(){
  num = document.getElementById("phone").value.replace(/\D/g,'');
  phoneNum = "+1" + num

  var link = homeLink + '/sendsms?phone=' + phoneNum

  const response = await fetch(link, {
    method: 'GET',
    mode: 'cors',
  });
  let d = await response.text();

}

async function sendAlert(){
  var link = homeLink + '/sendalert'

  const response = await fetch(link, {
    method: 'GET',
    mode: 'cors',
  });
  let d = await response.text();

  alert(d)
}
