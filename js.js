function teste() {
    alert("ok")
}

var abaMenu = false
function menu() {
    if(abaMenu){
        document.querySelector(".menu").style.top = "-300px"
        abaMenu = false
    }else{
        document.querySelector(".menu").style.top = "0px"
        abaMenu = true
    }
}
function femenu(){
    if(abaMenu){
        document.querySelector(".menu").style.top = "-300px"
        abaMenu = false
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.documentElement.setAttribute("theme", localStorage.getItem("themeMode") || "ligth");
    if (localStorage.getItem("themeMode") == "ligth"){
        document.querySelector("#theme").innerHTML = "<img class='icones' src='./image/dark.png' alt=''>";
    }
    else{
        document.querySelector("#theme").innerHTML = "<img class='icones' src='./image/ligth.png' alt=''>";
    }
  });

document.documentElement.setAttribute("theme", localStorage.getItem("themeMode") || "ligth")

function theme_mode(){

    let theTheme = localStorage.getItem("themeMode") || "ligth"
    
    if(theTheme == "ligth"){
        localStorage.setItem('themeMode', 'dark');
        document.documentElement.setAttribute("theme", localStorage.getItem("themeMode"))
        document.querySelector("#theme").innerHTML = "<img class='icones' src='./image/ligth.png' alt=''>";
    }
    else{
        localStorage.setItem('themeMode', 'ligth');
        document.documentElement.setAttribute("theme", localStorage.getItem("themeMode"))
        document.querySelector("#theme").innerHTML = "<img class='icones' src='./image/dark.png' alt=''>";
    }
}
