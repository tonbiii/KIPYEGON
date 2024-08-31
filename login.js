document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting the usual way

    // Get username and password input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if credentials are correct
    if ((username === "KIPYEGON" && password === "Tony12706#") || 
        (username === "MIKEBII" && password === "Bootstrins.")) {
        // Redirect to dashboard if login is successful
        window.location.href = "dashboard/dashboard.html";
    } else {
        // Clear the password input field on failed login attempt
        document.getElementById("password").value = "";
        // Show an error message if login fails
        document.getElementById("error-message").textContent = "Invalid username or password!";
    }
});


// Toggle Password Visibility
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Toggle the eye icon
    this.setAttribute('name', type === 'password' ? 'eye-off' : 'eye');
});




document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const animationDuration = 20000; // Duration for slide in and slide out in milliseconds (8 seconds)
    const stayDuration = 20000; // Duration for staying calm in milliseconds (8 seconds)

    const animateLogo = () => {
        logo.classList.remove('animate__animated', 'animate__backInLeft', 'animate__bounceIn', 'animate__backOutRight', 'animate__heartBeat');
        
        // Start slide in
        logo.classList.add('animate__animated', 'animate__backInLeft');
        setTimeout(() => {
            logo.classList.remove('animate__backInLeft');
            logo.classList.add('animate__bounceIn');
        }, animationDuration);
        
        // Start heartbeat after sliding in
        setTimeout(() => {
            logo.classList.remove('animate__bounceIn');
            logo.classList.add('animate__heartBeat');
        }, animationDuration + stayDuration);
        
        // Start slide out after heartbeat
        setTimeout(() => {
            logo.classList.remove('animate__heartBeat');
            logo.classList.add('animate__backOutRight');
        }, animationDuration + stayDuration + 1000);

        // Reset and loop
        setTimeout(() => {
            logo.classList.remove('animate__backOutRight');
            animateLogo();
        }, animationDuration + stayDuration + 2000);
    };

    animateLogo();
});
