function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours()+ ":"+date.getMinutes()+":"+date.getUTCSeconds();
    var setDate = document.getElementById("setData");
    setDate.innerHTML = parseInt(date.getMonth()+1)+"-"+date.getDate()+"-"+date.getUTCFullYear();
}
setInterval(updateDate,100);
onload =updateDate();

function getColor(){
    var getColor = document.getElementById("setColor").value;
    localStorage.setItem("COLOR",getColor);

    document.getElementById("time").style.background = localStorage.getItem("COLOR");
    document.getElementById("body").style.background = localStorage.getItem("COLOR");


}

function setColor(){
    

    document.getElementById("time").style.background = localStorage.getItem("COLOR");
    document.getElementById("body").style.background = localStorage.getItem("COLOR");



}
setInterval(setColor,100);

