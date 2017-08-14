// $("#test").html("MONDAY");
 $.getJSON('https://gymkhana.iitb.ac.in/~hostel2/menu_html_ext.JSON', function (data)
 {
    // var data1=data["SUNDAY"]["BREAKFAST"];
    // var data2=data["MONDAY"]["LUNCH"];
   
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

   document.getElementById('sun_b').innerHTML=sun_b;
   document.getElementById('sun_l').innerHTML=sun_l;
   document.getElementById('sun_t').innerHTML=sun_t;
   document.getElementById('sun_d').innerHTML=sun_d;
   
   document.getElementById('mon_b').innerHTML=mon_b;
   document.getElementById('mon_l').innerHTML=mon_l;
   document.getElementById('mon_t').innerHTML=mon_t;
   document.getElementById('mon_d').innerHTML=mon_d;
   
   document.getElementById('tue_b').innerHTML=tue_b;
   document.getElementById('tue_l').innerHTML=tue_l;
   document.getElementById('tue_t').innerHTML=tue_t;
   document.getElementById('tue_d').innerHTML=tue_d;
   
   document.getElementById('wed_b').innerHTML=wed_b;
   document.getElementById('wed_l').innerHTML=wed_l;
   document.getElementById('wed_t').innerHTML=wed_t;
   document.getElementById('wed_d').innerHTML=wed_d;
   
   document.getElementById('thu_b').innerHTML=thu_b;
   document.getElementById('thu_l').innerHTML=thu_l;
   document.getElementById('thu_t').innerHTML=thu_t;
   document.getElementById('thu_d').innerHTML=thu_d;
   
   document.getElementById('fri_b').innerHTML=fri_b;
   document.getElementById('fri_l').innerHTML=fri_l;
   document.getElementById('fri_t').innerHTML=fri_t;
   document.getElementById('fri_d').innerHTML=fri_d;
   
   document.getElementById('sat_b').innerHTML=sat_b;
   document.getElementById('sat_l').innerHTML=sat_l;
   document.getElementById('sat_t').innerHTML=sat_t;
   document.getElementById('sat_d').innerHTML=sat_d;
   
});