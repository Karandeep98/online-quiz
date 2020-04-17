var i=0;
function exam(form){

  if(form.one[0].checked) i++;
  if(form.two[1].checked) i++;
  if(form.three[0].checked) i++;
  if(form.four[2].checked) i++;
  if(form.five[1].checked) i++;

window.alert("Thank you for taking the Sports Quiz! Your score is: "+i+"/5");
}
var d=new Date();
var hours= d.getHours();
var min=d.getMinutes();
var date = d.getDate();
var year=d.getFullYear();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


document.getElementById("date").innerHTML="Test Date: "+date.toString()+
" "+months[d.getMonth()]+" "+year.toString();
if(hours>=0 && hours<=11) var x=" AM"
else x=" PM"
 if(hours>12) hours-=12;
 else if(hours==0) hours=12;
document.getElementById("time").innerHTML="Test Time: "+hours.toString()+":"+min.toString()+x;
