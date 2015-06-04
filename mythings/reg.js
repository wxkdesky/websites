var reg = new RegExp("([^;]+);","ig");
var words = "hello;world;and;hello;to you;";
var i = 0;
var y=new Array();
var xx;// = reg.exec(words);
while ((xx = reg.exec(words)) != null) {
    y[i] = xx[1];
    i = i + 1;
}
for (i = 0; i < y.length ; i++) {
 document.getElementById("test").innerHTML+=y[i]+"<br />"
}
//var xx = words.match(reg);
//for (var i = 0; i < xx.length ; i++) {
    // document.write("<p>"+xx[i] + "<br /></p>");
   // document.getElementById("test").innerHTML+=xx[i]+"<br />"
//}