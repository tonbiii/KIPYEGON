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

document.addEventListener('DOMContentLoaded', function () {
    // Get the logout link element
    const logoutLink = document.querySelector('.icon_items ul li a[href="../index.html"]');

    // Add a click event listener to the logout link
    if (logoutLink) {
        logoutLink.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Perform any necessary logout actions here (e.g., clearing session data)

            // Redirect to index.html
            window.location.href = '../index.html';
        });
    }
});
