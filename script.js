//creating xml request
var req = new XMLHttpRequest();
//initiate a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//loading the function
req.onload=function(){
    var data = JSON.parse(this.response);
    for(let i = 0; i < 250; i++){
        console.log(data[i].name);
    }
}