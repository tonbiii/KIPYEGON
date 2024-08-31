// JavaScript to handle sidebar toggle functionality

document.addEventListener('DOMContentLoaded', function() {
    // Select the sidebar, menu button, and close button
    const sidenav = document.querySelector('.sidenav');
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');

    // Add click event listener to the menu button
    menuBtn.addEventListener('click', function() {
        // Add the 'expanded' class to the sidebar
        sidenav.classList.remove('collapsed');
        sidenav.classList.add('expanded');
    });

    // Add click event listener to the close button
    closeBtn.addEventListener('click', function() {
        // Remove the 'expanded' class and add 'collapsed' class to the sidebar
        sidenav.classList.remove('expanded');
        sidenav.classList.add('collapsed');
    });
});
