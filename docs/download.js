const popup = document.getElementById("popup") ;
const popupBtn = document.getElementById("downloadBtn") ;
const popupCloseBtn = document.getElementById("popup-close") ;

popupBtn.onclick = function () {
    popup.style.display = "block" ;
}

popupCloseBtn.onclick = function() {
    popup.style.display = "none" ; 
}


window.onclick = function(event) {
    if( event.target === popup ){
        popup.style.display = "none"
    }
}