function changeImage(){
    var pic = document.getElementById("bulb");
    var ji = document.get
    if(pic.src.match("ON"))
    {
        console.log("ON");
        pic.src = "OFF.jpg";
        pic
    }
    else{
        console.log("OFF");
        pic.src = "ON.jpg";
    }
}