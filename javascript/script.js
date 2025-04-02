// JavaScript for the car slider functionality
 // Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select the elements needed for the slider
    const slideInner = document.querySelector('.car-slide-inner');
    // Select all individual slides
    const slides = document.querySelectorAll('.slide');
    // Select navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Track the current slide index
    let currentIndex = 0;
    // Total number of slides
    const slideCount = slides.length;
    
    // Number of slides visible at a time
    const slidesToShow = 3;
    
     // Function to update the slide position
    function updateSlide() {
    // Disable previous button if on the first slide
       prevBtn.disabled = currentIndex === 0;
     // Disable next button if on the last slide
      nextBtn.disabled = currentIndex === slideCount - 3;
      
     // Calculate the slide width as a percentage
      const slideWidth = 100 / slidesToShow;
       // Move slides based on the current index
    slideInner.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
    
    // Event listener
    // Next button click
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlide();
    });
    
    // Previous button click
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateSlide();
    });
    
    // Initialize
    updateSlide();
  });


// This code runs when the DOM (web page) is fully loaded
 // Category filtering functionality
 document.addEventListener('DOMContentLoaded', () => {
   // Get all category filter elements from the page
  const categories = document.querySelectorAll('.category-item');
   // Get all product card elements from the page
  const products = document.querySelectorAll('.product-card');
   // Get the subtitle element that shows which category is selected
  const gridSubtitle = document.querySelector('.grid-subtitle');

  
  // Add click event listeners to each category filter
  categories.forEach(category => {
      category.addEventListener('click', () => {
          // Remove active class from all categories
          // This ensures only one category can be active at a time
          categories.forEach(c => c.classList.remove('active'));
          // Add active class to clicked category
          // This visually highlights the selected filter
          category.classList.add('active');
          

           // Get the data-category value of the clicked category
          // This tells us which category was selected (e.g., 'suv', 'truck', etc.)
          const selectedCategory = category.dataset.category;
          
          // Update grid subtitle
          gridSubtitle.textContent = selectedCategory === 'all' 
              ? 'Showing all vehicles'  // If "All Models" was clicked
              : `Showing ${category.textContent}`; // Otherwise show the category name

          // Filter products
          products.forEach(product => {
        //The product's category matches the selected category
              if(selectedCategory === 'all' || 
                 product.dataset.category === selectedCategory) {
                  product.style.display = 'block'; // Show matching products
              } else {
                  product.style.display = 'none';  // Hide non-matching products
              }
          });
      });
  });
});

