

function GetInfo(){

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";


    

    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+ newName.value +"&appid=657bae1321b419c41bf17774045e455b")
    .then(response => response.json())
    .then(data =>{
        for(i=0;i<6;i++){
            document.getElementById("day" +(i+1)+"Temp").innerHTML ="temp : " +Number(data.list[i].main.temp).toFixed(1)+"°C";
        }

        for(i=0;i<6;i++){
            document.getElementById("day" +(i+1)+"Wind").innerHTML ="wind : " +Number(data.list[i].wind.speed).toFixed(1)+" MPH";
        }

        for(i=0;i<6;i++){
            document.getElementById("day" +(i+1)+"Humidity").innerHTML ="Humidity : " +Number(data.list[i].main.humidity).toFixed(1)+"%";
        }

        for(i=0;i<5;i++){
            document.getElementById("img" +(i+1)).src="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
        }

        var currDate = new Date();
        for (let i = 0; i < 6; i++) {
            var dd = currDate.getDate();
            var mm = currDate.getMonth()+1; 
            var yyyy = currDate.getFullYear();
        
            if(dd<10) 
            {
                dd='0'+dd;
            } 
            if(mm<10) 
            {
                mm='0'+mm;
            } 
        
           var vDate = mm+'/'+dd+'/'+yyyy; 
           document.getElementById("day" +(i+1)).innerHTML = vDate;
           currDate.setDate(currDate.getDate() + 1);     
        }


    })

    .catch(err => alert("Something Went Wrong"))

    
}




