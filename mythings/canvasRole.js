var i = 0;
var c = document.getElementById("myCanvas");
var c2 = document.getElementById("myCanvas2");
var c3 = document.getElementById("myCanvas3");
var cxt = c.getContext("2d");
var cxt2 = c2.getContext("2d");
var cxt3 = c3.getContext("2d");
//cxt2.strokeStyle = "#00f";
//cxt3.strokeStyle = "#00f";
//cxt.strokeStyle = "#00f";
//cxt.fillStyle = "#FFFFFF";
//cxt2.fillStyle = "#FFFFFF";
//cxt3.fillStyle = "#FFFFFF";
//cxt.strokeRect(0, 0, c.width, c.height);
//cxt2.strokeRect(0, 0, c2.width, c2.height);
//cxt3.strokeRect(0, 0, c3.width, c3.height);
var img = new Image();
img.src = "/Images/3.jpg";
var img2 = new Image();
img2.src = "/Images/3.jpg";
var img3 = new Image();
img3.src = "/Images/3.jpg";
var MyInterval = null;
function haha(x, y) {
    //cxt.drawImage(img, 0, 0, c.width, c.height);
    //cxt2.drawImage(img2, 0, 0, c2.width, c2.height);
    //cxt3.drawImage(img3, 0, 0, c3.width, c3.height);
    i = i + 5;
    if (y == true) {
        if (x == 1) {
            //var c = document.getElementById("myCanvas");
            //var cxt = c.getContext("2d");
            cxt.drawImage(img, 0, 0, c.width, c.height);
            cxt.strokeStyle = "#00f";
            cxt.fillStyle = "#FFFFFF";
            cxt.strokeRect(0, 0, c.width, c.height);
            cxt.beginPath();
            cxt.arc(i + 2, i + 1, 5, 0, Math.PI * 2, false);
            cxt.fill();
        }
        else if (x == 2) {
            //var c2 = document.getElementById("myCanvas2");
            //var cxt2 = c2.getContext("2d");
            cxt2.drawImage(img2, 0, 0, c2.width, c2.height);
            cxt2.strokeStyle = "#00f";
            cxt2.fillStyle = "#FFFFFF";
            cxt2.strokeRect(0, 0, c2.width, c2.height);
            cxt2.beginPath();
            cxt2.arc(i + 2, i + 1, 5, 0, Math.PI * 2, false);
            cxt2.fill();
        }
        else if (x == 3) {
            //var c3 = document.getElementById("myCanvas3");
            //var cxt3 = c3.getContext("2d");
            cxt3.drawImage(img3, 0, 0, c3.width, c3.height);
            cxt3.strokeStyle = "#00f";
            cxt3.fillStyle = "#FFFFFF";
            cxt3.strokeRect(0, 0, c3.width, c3.height);
            cxt3.beginPath();
            cxt3.arc(i + 2, i + 1, 5, 0, Math.PI * 2, false);
            cxt3.fill();
        }
    }
    else
    {
        if (x == 1) {
            cxt.clearRect(0, 0, cxt.width, cxt.height);
            cxt.drawImage(img, 0, 0, c.width, c.height);
           // cxt.beginPath();
        }
        else if (x == 2) {
            cxt2.clearRect(0, 0, cxt2.width, cxt2.height);
            cxt2.drawImage(img2, 0, 0, c2.width, c2.height);
           // cxt2.beginPath();
        }
        else if (x == 3) {
            cxt3.clearRect(0, 0, cxt2.width, cxt2.height);
            cxt3.drawImage(img3, 0, 0, c3.width, c3.height);
            //cxt3.beginPath();
        }
    }
    //cxt.save();
    //cxt.setTransform(1, 0, 0, 1, 0, 0);
    //cxt.clearRect(0, 0, cxt.width, cxt.height);
    //cxt.restore();
    i = 0;
}


    //cxt.beginPath();
    //cxt2.beginPath();
    //cxt3.beginPath();
    //cxt.arc(i + 2, i + 1, 5, 0, Math.PI * 2, false);
    //cxt2.arc(i + 2, i + 1, 5, 0, Math.PI * 2, false);
    //cxt3.arc(i + 2, i + 1, 5, 0, Math.PI * 2, false);
    //cxt.fill();
    //cxt2.fill();
    //cxt3.fill();
//    function start(x, y) {
//            cxt.drawImage(img, 0, 0, c.width, c.height);
//            cxt2.drawImage(img2, 0, 0, c2.width, c2.height);
//            cxt3.drawImage(img3, 0, 0, c3.width, c3.height);
//   // document.getElementById("myCanvas").hidden = true;
//    //MyInterval = setInterval("haha()", 1000);
//    haha(x,y);
//}
