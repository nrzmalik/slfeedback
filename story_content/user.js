window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function getCurrentDate() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();

  return `${day}-${month}-${year}`;
}



const player = GetPlayer();
let url2 = player.GetVar("url");
const url = url2;
let result = player.GetVar("result"); 
let date = getCurrentDate();
let name = player.GetVar("name"); 
let email = player.GetVar("email"); 
let comment = player.GetVar("comment");
let course = player.GetVar("course")

fetch(url, {
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({course,result, date, name, email, comment})
});

}

window.Script2 = function()
{
  function getCurrentDate() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = currentDate.getFullYear();

  return `${day}-${month}-${year}`;
}



const player = GetPlayer();
let url2 = player.GetVar("url");
const url = url2;
let result = player.GetVar("result"); 
let date = getCurrentDate();
let name = player.GetVar("name"); 
let email = player.GetVar("email"); 
let comment = player.GetVar("comment");
let course = player.GetVar("course")

fetch(url, {
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({course,result, date, name, email, comment})
});

}

};
