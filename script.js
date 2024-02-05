var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var res=JSON.parse(request.response);
console.log(res);
//1.Print only those countries name which belongs to asia region
var result_asia=res.filter((ele)=>ele.region == "Asia");
console.log(result_asia);
var country_name=result_asia.map((ele)=>ele.name);
console.log(country_name);

//2. Print capitals of those countries whose population is less than 2lakhs

var res_population=res.filter((ele)=>ele.population<200000);
console.log(res_population);
var capital_name=res_population.map((ele)=>ele.capital);
console.log(capital_name);

//3.Print the following details name, capital, flag, using forEach function

res.forEach((ele)=>console.log("Name: "+ele.name.common,"Capital: "+ele.capital,"Flag: "+ele.flags.png))

//4.Print the total population of countries using reduce function

var total_pop=res.reduce((acc,cv)=>acc+cv.population,0);
console.log("Total Population: "+total_pop);

//5.Print the country that uses US dollars as currency.

var res_curr=res.filter((ele)=>ele?.currencies?.USD?.name==="United States dollar")
console.log(res_curr);
var country_name=res_curr.map((ele)=>ele.name.common);
console.log(country_name);
}
