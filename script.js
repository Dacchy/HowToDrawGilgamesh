var images=["Gil2.png","Gil3.png","Gil4.png","Gil6.png","Gil7.png","Gil8.png","Gil9.png","Gil10.png","Gil11.png"];

var i=0;
function next(){
   if(i<images.length){
    document.getElementById("imgs").src=images[i];
    i++;
   }
   else{
    i=0;
   }
}