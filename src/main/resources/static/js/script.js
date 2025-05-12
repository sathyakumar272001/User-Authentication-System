function toggleNavbar() {
  const navbarMenu = document.getElementById('navbarMenu');
  navbarMenu.classList.toggle('show');
}

// Add this to your script.js file

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements you want to fade in
    const fadeElements = document.querySelectorAll('.header, .main, .main1, .main2, .main-container, .card, .para, .footer');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }

    // Function to handle scroll animation
    function handleScroll() {
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});



 
  

  document.addEventListener('DOMContentLoaded', () => {
      // Select all elements that should fade in
      const fadeElements = document.querySelectorAll(
          '.navbar, .store-section, .Productone, .support-section, .responsive, .clearfix, .quick-links-container, .footer, .card'
      );
      
      // Function to check if element is in viewport
      function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
          );
      }

      // Function to handle scroll animation
      function handleScroll() {
          fadeElements.forEach(element => {
              if (isInViewport(element)) {
                  element.classList.add('active');
              }
          });
      }

      // Initial check on page load
      handleScroll();

      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
  });

  // Toggle function for navbar (already in your HTML)
  function toggleNavbar() {
      const navbarMenu = document.getElementById('navbarMenu');
      navbarMenu.classList.toggle('active');
  }



 

    