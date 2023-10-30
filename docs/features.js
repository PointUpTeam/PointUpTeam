document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('myModal');
    const featureDiv = document.getElementById('featureDiv');
    const closeModalBtn = document.getElementById('closeModalBtn');

    featureDiv.onclick = function () {
        modal.style.display = 'block';
    }

    closeModalBtn.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
});