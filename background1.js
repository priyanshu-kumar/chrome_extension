setInterval(function(){$.getJSON('https://gymkhana.iitb.ac.in/~hostel2/menu_js_ext.JSON', function (data)
{

// var getInformation = function() 
// {
//     var path = "https://gymkhana.iitb.ac.in/~hostel2/menu.json";
//     var informationArray= [];
//     console.log("Loading ....");
//     $.getJSON(path, function(data) 
//     {
//         $.each(data, function(key, val) 
//         {
//             informationArray.push(key + '-' + val);
//         });
//     }); 
//     return informationArray; 
// }
// // var msg=JSON.stringify();


	// var json1 = JSON.parse(data);
	var sun_b = data["SUNDAY"]["BREAKFAST"];
	var sun_l = data["SUNDAY"]["LUNCH"];
	var sun_t = data["SUNDAY"]["TIFFIN"];
	var sun_d = data["SUNDAY"]["DINNER"];
	
	var mon_b = data["MONDAY"]["BREAKFAST"];
	var mon_l = data["MONDAY"]["LUNCH"];
	var mon_t = data["MONDAY"]["TIFFIN"];
	var mon_d = data["MONDAY"]["DINNER"];
	
	var tue_b = data["TUESDAY"]["BREAKFAST"];
	var tue_l = data["TUESDAY"]["LUNCH"];
	var tue_t = data["TUESDAY"]["TIFFIN"];
	var tue_d = data["TUESDAY"]["DINNER"];
	
	var wed_b = data["WEDNESDAY"]["BREAKFAST"];
	var wed_l = data["WEDNESDAY"]["LUNCH"];
	var wed_t = data["WEDNESDAY"]["TIFFIN"];
	var wed_d = data["WEDNESDAY"]["DINNER"];
	
	var thu_b = data["THURSDAY"]["BREAKFAST"];
	var thu_l = data["THURSDAY"]["LUNCH"];
	var thu_t = data["THURSDAY"]["TIFFIN"];
	var thu_d = data["THURSDAY"]["DINNER"];
	
	var fri_b = data["FRIDAY"]["BREAKFAST"];
	var fri_l = data["FRIDAY"]["LUNCH"];
	var fri_t = data["FRIDAY"]["TIFFIN"];
	var fri_d = data["FRIDAY"]["DINNER"];
	
	var sat_b = data["SATURDAY"]["BREAKFAST"];
	var sat_l = data["SATURDAY"]["LUNCH"];
	var sat_t = data["SATURDAY"]["TIFFIN"];
	var sat_d = data["SATURDAY"]["DINNER"];
	
	
   







var meal_display="no information";
var title_display="no information";
var currentdate = new Date();
var time=currentdate.getHours();
var min=currentdate.getMinutes();
//var timer=time.getString();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var day = days[ currentdate.getDay() ];

switch (day)
{
	case "Monday":{if(time>=8&&time<10)
					{title_display="Breakfast";
						 meal_display=mon_b;
						
					}
					else if(time>=12&&time<14)
					{title_display="Lunch";
						 meal_display=mon_l;
						
					}
					else if(time>=16&&time<18)
					{title_display="Tiffin";
						 meal_display=mon_t;
						
					}
					else if(time>=20&&time<22)
					{title_display="Dinner";
						 meal_display=mon_d;
						
					}
					else
					{
						title_display="no information1";
						 meal_display= "no information";
						

					}

	        		break;

	        }
	
	case "Tuesday":{if(time>=8&&time<10)
						{title_display="Breakfast";
						 meal_display=tue_b;
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display=tue_l;
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display=tue_t;
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display=tue_d;
						
					}
					else
					{
						title_display="no information2";
						 meal_display= "no information";
						

					}

	        		break;

	        }                
	case "Wednesday":{if(time>=8&&time<10)
						{title_display="Breakfast";
						 meal_display=wed_b;
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display=wed_l;
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display=wed_t;
						
					}
					else if(time>=20&&time<23)
					{
						if(time==22&&min>45)
						{
							title_display="Dinner";
						     meal_display=wed_d;
						
					    }
					    if(time!=22)
						{
							title_display="Dinner";
						     meal_display=wed_d;
						
					    }
				}
					else
					{
						title_display="no information3";
						 meal_display= "no information";
						

					}

	        		break;

	        }  

    case "Thursday":{if(time>=8&&time<10)
						{title_display="Breakfast";
						 meal_display=thu_b;
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display=thu_l;
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display=thu_t;
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display=thu_d;
						
					}
					else
					{
						title_display="no information4";
						 meal_display= "no information";
						

					}

	        		break;

	        }
	case "Friday":{if(time>=8&&time<10)
						{title_display="Breakfast";
						 meal_display=fri_b;
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display=fri_l;
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display=fri_t;
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display=fri_d;
						
					}
					else
					{
						title_display="no information5";
						 meal_display= "no information";
						

					}

	        		break;

	        }        
	case "Saturday":{
					if(time>=8&&time<10)
						{title_display="Breakfast";
						 meal_display=sat_b;
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display=sat_l;
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display=sat_t;
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display= sat_d;
						
					}
					else
					{
						title_display="no information6";
						 meal_display= "no information";
						

					}

	        		break;
	        }        
   case "Sunday":{if(time>=8&&time<10)
						{title_display="Breakfast";
						 meal_display=sun_b;
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display=sun_l;
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display=sun_t;
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display=sun_d;
						
					}
					else
					{
						title_display="no information7";
						 meal_display= "no information";
						

					}

	        		break;

	        }
	        default :{
	        	title_display="no information8";
	        	meal_display="no information";
	        	break;
	        }
}



 if(meal_display!="no information")
{	var options = { 
	type:"basic",
	title:day+"  "+title_display,
	message:meal_display,
	iconUrl: "mario.jpg",
}};











// var options = { 
// 	type:"basic",
// 	title:"back to life",
// 	message:,
// 	iconUrl: "mario.png",
// };

  chrome.notifications.create(options,callback)
    function callback(){
 	console.log("Hostel 2 Junta")};
})},2000);
 
