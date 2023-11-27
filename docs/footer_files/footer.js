// Function that displays the message
function signUp() {

    // Clear out the information in the input element
    document.getElementById('footer-email').value = ''

    // Reset the opacity and style
    document.getElementById('sign-up-message').style.opacity = 1
    document.getElementById('sign-up-message').style.display = 'block'

    // Wait 3 seconds to call on fade out function
    setTimeout(hideMessage, 3000)
}

// Function that hides the message after 3 seconds
function hideMessage() {

    // Assigns the variable to the message element
    var message = document.getElementById('sign-up-message');

    // Creates a timed interval with a unique function to "Fade out" the message
    var effect = setInterval(function() {

        if (!message.style.opacity) {
            message.style.opacity = 1
        }
        if (message.style.opacity > 0) {
            message.style.opacity -= 0.1
        } else {
            clearInterval(effect)
        }

    }, 50)
}