document.addEventListener('DOMContentLoaded', function() {
    function updateOrbit() {
        const signupContainer = document.querySelector('.signup-container');
        const level4 = document.querySelector('.level4');
        
        // Position level4 at the center of the signup container
        const containerRect = signupContainer.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;
        const centerY = containerRect.top + containerRect.height / 2;
        
        // Update the position
        level4.style.left = `${centerX}px`;
        level4.style.top = `${centerY}px`;
        
        // Adjust orbit radius based on screen size
        const orbitRadius = Math.min(200, window.innerWidth * 0.2);
        level4.style.setProperty('--orbit-radius', `${orbitRadius}px`);
    }
    
    // Initial setup
    updateOrbit();
    
    // Update on window resize
    window.addEventListener('resize', updateOrbit);
});