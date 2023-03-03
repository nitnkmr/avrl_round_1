const london=document.getElementById('london')
const newyork=document.getElementById('newyork')
const losAngelas=document.getElementById('losAngelas')
const lasVegas=document.getElementById('lasVegas')
const table=document.getElementById('table')
const searchbar=document.getElementById('searchbar')

let city=""
let count=1;
let count1=1;
async function getWather(){
    
    if(count==1){
    city="London";
    london.style.border="2px solid green"
    }
    if(count==2){
        city="New York";
        newyork.style.border="2px solid green"
    }
    if(count==3){
        city="Los Angeles";
        losAngelas.style.border="2px solid green"
    }
     if(count==4){
        city="Las Vegas";
        lasVegas.style.border="2px solid green"
        count=0;
    }
    const res=await fetch(`https://python3-dot-parul-arena-2.appspot.com/test?cityname=${city}`)
    const e =await res.json();
    // let string=e.date_and_time.substring(0,10)
    let date1=new Date(e.date_and_time);
    let date2=new Date("02/03/2023");
    table.setAttribute("id",city)
    table.innerHTML+=`<div class="row tableHeader ${city.toLowerCase()}"  id="card${count1}" >
    <div class="tableData tableHead ">${city}</div>
    <div class="tableData tableHead "><input type="text" name="" id="datainfo" value="${e.description}"></div>
    <div class="tableData tableHead ">${e.temp_in_celsius}</div>
    <div class="tableData tableHead ">${e.pressure_in_hPa}</div>
    <div class="tableData tableHead ">${Math.round((date2-date1)/(1000*60*60))}</div>
    <div class="tableData tableHead " id="deletebtn" onclick="deleteme(${count1},card${count1})">delete</div>
 </div>
    
    `
    // ;arr.push(data);
    // mapping()    
    count++;
    count1++;
}

function deleteme(e,ele){
    ele.remove();

}
function handleSearch(){
    let findString=searchbar.value.toLowerCase();
    const element=document.getElementsByClassName(findString)
    element[0].style.background="yellow"
    
    setTimeout(() => {
        element[0].style.background="white";
        
    }, 3000);
        console.log(element);
    

}