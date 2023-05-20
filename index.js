setInterval(function(){
    d=new Date();
    hr=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
    //console.log(hr);
    //console.log(min);
    //console.log(sec);
    hrotation=30*hr+min/2;
    mrotation=6*min;
    srotation=6*sec;
    
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
    document.getElementById("date").innerHTML=hr+":"+min+":"+sec+"<br>"+d.getDate()+"/"+(1+d.getMonth())+"/"+(1900+d.getYear());
    

   
},1000);