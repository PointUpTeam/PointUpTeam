document.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById("Popup") ;
    const popupBtn = document.getElementById("downloadBtn") ;
    const popupCloseBtn = document.getElementById("CloseBtnPopup") ;
    
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
});