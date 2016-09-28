
function rotate(){
    var img = document.getElementById("nya");

    var date = new Date();
    var time = date.getTime();

    img.style.transform = 'rotate(' + (time/100)%360 + 'deg)';

    requestAnimationFrame(rotate);
}
requestAnimationFrame(rotate);
