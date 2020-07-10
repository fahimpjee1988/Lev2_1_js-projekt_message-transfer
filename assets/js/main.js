function show(){
    console.log("test")
    if(document.getElementById("text").value==""){
        document.getElementById("message").innerHTML="Bitte geben sie ein wert ein"
    }else{
        document.getElementById("message").innerHTML=document.getElementById("text").value
    }
}