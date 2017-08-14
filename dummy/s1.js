 var x="lunch";

var currentdate = new Date();
var time = "Last Sync: " +  
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var day = days[ currentdate.getDay() ];

var options = { 
	type:"basic",
	title:"Hostel 2 Notification",
	message:time+day,
	iconUrl: "mario.png",
	


};
chrome.notifications.create(options,callback);

function callback(){
	console.log("Hostel 2 Junta");

}