document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const animationDuration = 16000; // Duration for slide in and slide out in milliseconds (8 seconds)
    const stayDuration = 16000; // Duration for staying calm in milliseconds (8 seconds)

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
