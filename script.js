//creating xml request
var req = new XMLHttpRequest();
//initiate a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//loading the function
req.onload=function(){
    //converting the data to JSON
    var data = JSON.parse(this.response);
    console.log("Countries :");
    //using for in loop to print out the country name's
    for(let i in data){
        console.log(data[i].name);
    }

}
