/*let slider_content = document.querySelector('#box');
console.log(slider_content)
let image = ['a','b','c','d','e','f'];

let i = image.length;

function nextImage(){
    console.log(i);
    if(i<image.length) {
        i = i + 1;
    }else{
        i = 1;
    }
    
    slider_content.innerHTML = "<img src=" +image[i-1]+ ".jpg>";
    console.log(image[i-1]);
    }
function prewImage(){
    console.log(i);
    if(i>image.length+1 && i>1) {
        i = i - 1;
    }else{
        i = image.length;
    }
    

    slider_content.innerHTML = "<img src=" +image[i-1]+ ".jpg>";

}
 setInterval(nextImage, 5000);
*/
var slideIndex = 1;
showSlides();
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("container1");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("container1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000);
}