var listImg =Array.from( document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBox = document.getElementById("lightBox"); 
var prevBtn  = document.getElementById("prev") ;
var closeBtn = document.getElementById("close");
var nextBtn = document.getElementById("next") ;
var currentImgSlider ;
for(var i = 0 ; i < listImg.length ; i++) {

    listImg[i].addEventListener("click" , function(e) {
        lightBoxContainer.style.display = `flex` ;
        var imgSrc = e.target.src ;
        lightBox.style.backgroundImage = `url(${imgSrc})` ;
        currentImgSlider = listImg.indexOf(e.target);
        console.log(currentImgSlider);

    })
}

function nextSlider() {

    currentImgSlider = currentImgSlider+1 ;
    if(currentImgSlider == listImg.length)
    {
        currentImgSlider = 0 ;
    }
    var imgSrc = listImg[currentImgSlider].src ;
    lightBox.style.backgroundImage = `url(${imgSrc})` ;
}
nextBtn.addEventListener("click" , nextSlider) ;

function prevSlider() {

    currentImgSlider = currentImgSlider-1 ;
    if(currentImgSlider < 0)
    {
        currentImgSlider = listImg.length -1 ;
    }
    var imgSrc = listImg[currentImgSlider].src ;
    lightBox.style.backgroundImage = `url(${imgSrc})` ;
}
prevBtn.addEventListener("click" , prevSlider) ;

closeBtn.addEventListener("click" , function() {
    lightBoxContainer.style.display = `none` ;
});
document.body.addEventListener("keydown" , function(e) {
      
    if(e.key == 'Escape') {
        lightBoxContainer.style.display = `none` ;
    }
});
