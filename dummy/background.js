var htmlData="lunch";
$(function(){

	 $.get('https://gymkhana.iitb.ac.in/~hostel2/menu.json',function(data){
		 console.log(data);
		var  htmlData1 = data;
		 	
	 })
var options = { 
	type:"basic",
	title:"back to life",
	message:typeof htmlData1,
	iconUrl: "mario.png",
};
 chrome.notifications.create(options,callback);

function callback(){
	console.log('popup done');
}
});

 setInterval(function(){
 var meal_display="";
 var title_display="lunch";
var currentdate = new Date();
var time=currentdate.getHours();
//var timer=time.getString();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var day = days[ currentdate.getDay() ];

switch (day)
{
	case "Monday":{if(time>=7&&time<10)
					{title_display="Breakfast";
						 meal_display="PURI BHAJI\n BOILED CHAWLI BOILED EGG/ BHURJI FRUIT";
						
					}
					else if(time>=12&&time<14)
					{title_display="Lunch";
						 meal_display="VEG TIKKA MASALA\n BLACK CHANA DRY\n STEAM RICE, PULAV DAL TADKA, MASALA PAPAD\n RASAM\n CURD";
						
					}
					else if(time>=16&&time<18)
					{title_display="Tiffin";
						 meal_display="MASALA CHEESE SANDWICH\n CHOCOS";
						
					}
					else if(time>=20&&time<22)
					{title_display="Dinner";
						 meal_display="MALAI KOFTA\n BHAINGAN BHARTA\n DAL FRY, MATAR PULAO, STEAM RICE,\n SWEET – KALA JAMUN\n EXTRA – EGG CURRY";
						
					}
					else
					{
						title_display="no information1";
						 meal_display= "no information";
						

					}

	        		break;

	        }
	
	case "Tuesday":{if(time>=7&&time<10)
						{title_display="Breakfast";
						 meal_display="ALU BATHUA PARATHA\n TAMATAR DHANIYA CHUTNEY, CURD BOILED GROUNDNUT BOILED EGG/ BHURJI CORNFLAKES";
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display="RAJMA MASALA\n GAJAR MATAR MASALA\n PLAIN RICE, MASOOR DAL, VEG BIRYANI, BOONDI RAITA ROASTED PAPAD";
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display="MYSORE MASALA DOSA\n COLD COFFEE(NO COLD MILK)\n FRUIT";
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display="PANEER BUTTER MASALA\n PLAIN PARANTHA\n STEAM RICE\n TOMATO RICE DAL PUNJABI\n SWEET – FLAVOURED MILK";
						
					}
					else
					{
						title_display="no information2";
						 meal_display= "no information";
						

					}

	        		break;

	        }                
	case "Wednesday":{if(time>=7&&time<10)
						{title_display="Breakfast";
						 meal_display="POHA PINEAPPLE SHEERA\n BOILED CORN BOILED EGG/BHURJI\n CORNFLAKES";
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display="CHOLE BHATURE + ROTI\n IMLI CHUTNI\n JEERA RICE STEAM RICE\n DAL KOLHAPURI\n FRYMES, LASSI\n SAMBHAR";
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display="BHEL PURI, DAHI\n NUTELA\n FRUIT";
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display="PALAK CORN\n KURKURI BHINDI\n STEAM RICE, LEMON RICE, DAL TADKA SWEET – ICE CREAM\n EXTRA – MUGHLAI CHICKEN";
						
					}
					else
					{
						title_display="no information3";
						 meal_display= "no information";
						

					}

	        		break;

	        }  

    case "Thursday":{if(time>=7&&time<10)
						{title_display="Breakfast";
						 meal_display="MEDU VADA\n SAMBAR COCONUT CHUTNEY\n FRESH MATKI\n BOILED EGG/ OMLET\n CORNFLAKES";
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display="VEG KOFTA\n ALU FRENCH BEANS\n STEAM RICE,\n TOMATO RICE\n DAL PUNJABI MASALA PAPAD,\n CURD RICE";
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display="PASTA\n MILKSHAKE\n (NO COLD MILK)\n FRUIT";
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display="MUSHROOM MASALA GRAVY\n METHI BHAJI\n MOONG DAL, JEERA RICE, PLAIN RICE\n VEG CRISPY LTDSWEET – FRUIT CHAAT";
						
					}
					else
					{
						title_display="no information4";
						 meal_display= "no information";
						

					}

	        		break;

	        }
	case "Friday":{if(time>=7&&time<10)
						{title_display="Breakfast";
						 meal_display="TOMATO ONION UTTAPAM\n BOILED GROUNDNUTS BOILED EGG/ OMLET CORNFLAKES";
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display="KADI PAKODA\n ALOO GOBHI\n DAL KHICHDI\n STEAM RICEROASTED PAPAD\n BUTTERMILK\n RASAM";
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display="VEG CUTLET\n WATERMELON JUICE";
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display="PANEER KADHAI\n HOT N SOURSOUP\n STEAM RICE, DAL AMRITSARI SWEET – CHOCOLATE BARFI\n EXTRA – CHICKEN BIRYANI";
						
					}
					else
					{
						title_display="no information5";
						 meal_display= "no information";
						

					}

	        		break;

	        }        
	case "Saturday":{
					if(time>=7&&time<10)
						{title_display="Breakfast";
						 meal_display="VEG UPMA\n BOILED SPROUTS BOILED EGG/ OMLET\n CORNFLAKES";
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display="RAJMA MAKHANI\n LAUKI MASALA METHI PURI + ROTI\n TUR DAL,STEAM RICE FRYMES\n SHRIKHAND";
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display="MISAL PAV\n PEANUT BUTTERFRUIT";
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display= "METHI MATAR MALAI\n VEG TAWA DRY\n DAL FRY,STEAM RICE,\n LEMON RICE\n SWEET – SEVAIYA KHEER";
						
					}
					else
					{
						title_display="no information6";
						 meal_display= "no information";
						

					}

	        		break;
	        }        
   case "Sunday":{if(time>=0&&time<10)
						{title_display="Breakfast";
						 meal_display="PANEER PARATHA\n TAMATAR-DHANIYA\n CHUTNEY, CURD\n BOILED CORN BOILED EGG/BURJI";
						
					}
					else if(time>=12&&time<14)
						{title_display="Lunch";
						 meal_display="VEG HYDERABADI\n BHINDI FRY\n FRYMES STEAM RICE, KOLHAPURI PULAV SAMBHAR";
						
					}
					else if(time>=16&&time<18)
						{title_display="Tiffin";
						 meal_display= "KACHORI\n CHOCOS\n FRUIT";
						
					}
					else if(time>=20&&time<22)
						{title_display="Dinner";
						 meal_display="Methi Malai Matar\n GOBI CHILLI\n DAL MAKHNI ,VEG FRIED RICE, STREAM RICE SWEET – GAJAR KA HALWA\n EXTRA – CHICKEN ROGANJOSH";
						
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
	title:title_display+" "+day,
	message:meal_display,
	iconUrl: "mario.png",
}};


    //do what you need here
    chrome.notifications.create(options,callback)},2000);
    

 function callback(){
 	console.log("Hostel 2 Junta")};


// var now = new Date();
// var mills = new Date(2017,2,4,1,32,0,0).getTime()-Date.now();
// if(mills<0){
// 	mills += 86400000;
// }
// setTimeout(function(){   chrome.notifications.create(options,callback);},mills);