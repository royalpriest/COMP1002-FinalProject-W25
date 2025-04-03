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






//vadim
const translations = {
    en: {
        title: "About Ford",
        "intro-title": "Introduction",
        "intro-text": "Ford Motor Company is an American multinational automaker operating since 1903. It was founded by Henry Ford and is headquartered in Dearborn, Michigan. Throughout its history, Ford has remained a global powerhouse, with a significant presence in international markets and a commitment to technological advancements, including the development of electric vehicles and autonomous driving technologies. The company's legacy extends beyond mass production, encompassing contributions to both world wars, pioneering safety features, and a rich history in motorsports",
        "history-title": "History",
        "history-text": "Ford revolutionized the automotive industry with the Model T in 1908, the first affordable car for the average American. The company also introduced the assembly line method, greatly enhancing production efficiency.",
        "history-button": "Read More",
        "history-more": "Over the decades, Ford continued to innovate, introducing new models and technologies. During World War II, Ford contributed to the war effort by producing military equipment. In the postwar era, Ford expanded globally and became one of the world's largest automakers. In 1914 Henry Ford shocked the industrial world by doubling his workers wages to 5 dollars a day. This action not only increased the moral of his workers, but also allowed them to afford the very cars they produced, boosting sales.",
        "innovations-title": "Innovations",
        "innovations-text": "Beyond the assembly line, Ford has been at the forefront of automotive technology, introducing features like safety glass, fuel injection, and more recently, hybrid and electric vehicles.  Ford's commitment to innovation extends to pioneering safety features, with advancements in braking systems, airbag technology, and driver-assist technologies designed to enhance road safety. Their investment in research and development has also led to breakthroughs in engine efficiency and performance, including the development of the powerful and fuel-efficient EcoBoost engine family. In the realm of connectivity, Ford's SYNC system has revolutionized in-car infotainment and communication, integrating smartphones and providing seamless access to navigation, entertainment, and vehicle diagnostics. Furthermore, Ford's push into electric vehicles, with models like the Mustang Mach-E and F-150 Lightning, showcases their dedication to sustainable mobility and the future of transportation.",
        "mission-title": "Mission & Values",
        "mission-text": "Ford’s mission is to help build a better world where every person is free to move and pursue their dreams. The company values innovation, sustainability, and community engagement. This mission is driven by a deep-seated belief in the power of mobility to connect people and create opportunities. Ford strives to democratize access to transportation through continuous innovation, developing vehicles and mobility solutions that are not only technologically advanced but also accessible and affordable. Their commitment to sustainability is reflected in their ambitious goals to reduce their environmental footprint, investing heavily in electric vehicle technology and sustainable manufacturing practices. Ford recognizes their responsibility to the communities they serve, actively engaging in philanthropic initiatives and partnerships that address social and economic challenges. Integrity, quality, and customer satisfaction are also core values that guide Ford's operations, ensuring that they deliver products and services that exceed expectations. Furthermore, Ford fosters a culture of inclusivity and respect, valuing diversity and creating a workplace where every individual feels empowered to contribute their best. They believe that by embracing innovation, sustainability, and community engagement, they can create a more equitable and prosperous future for all.",
        "products-title": "Famous Products",
        "products-text": "Some of Ford’s most iconic vehicles include the Model T, Mustang, F-150 truck, and Explorer SUV. Ford also produces luxury vehicles under the Lincoln brand."
    },
    es: {
        title: "Sobre Ford",
        "intro-title": "Introducción",
        "intro-text": "Ford Motor Company es un fabricante de automóviles multinacional estadounidense que opera desde 1903. Fue fundado por Henry Ford y tiene su sede en Dearborn, Míchigan.",
        "history-title": "Historia",
        "history-text": "Ford revolucionó la industria automotriz con el Modelo T en 1908, el primer automóvil asequible para el estadounidense promedio. La compañía también introdujo el método de línea de ensamblaje, mejorando enormemente la eficiencia de producción.",
        "history-button": "Leer más",
        "history-more": "A lo largo de las décadas, Ford continuó innovando, presentando nuevos modelos y tecnologías. Durante la Segunda Guerra Mundial, Ford contribuyó al esfuerzo bélico produciendo equipo militar. En la era de posguerra, Ford se expandió globalmente y se convirtió en uno de los mayores fabricantes de automóviles del mundo.",
        "innovations-title": "Innovaciones",
        "innovations-text": "Más allá de la línea de ensamblaje, Ford ha estado a la vanguardia de la tecnología automotriz, introduciendo características como vidrio de seguridad, inyección de combustible y, más recientemente, vehículos híbridos y eléctricos.",
        "mission-title": "Misión y Valores",
        "mission-text": "La misión de Ford es ayudar a construir un mundo mejor donde cada persona sea libre de moverse y perseguir sus sueños. La compañía valora la innovación, la sostenibilidad y el compromiso con la comunidad.",
        "products-title": "Productos Famosos",
        "products-text": "Algunos de los vehículos más icónicos de Ford incluyen el Modelo T, Mustang, la camioneta F-150 y el SUV Explorer. Ford también produce vehículos de lujo bajo la marca Lincoln."
    },
    fr: {
        title: "À propos de Ford",
        "intro-title": "Introduction",
        "intro-text": "Ford Motor Company est un constructeur automobile multinational américain opérant depuis 1903. Il a été fondé par Henry Ford et a son siège à Dearborn, Michigan.",
        "history-title": "Histoire",
        "history-text": "Ford a révolutionné l'industrie automobile avec le Modèle T en 1908, la première voiture abordable pour l'Américain moyen. L'entreprise a également introduit la méthode de la chaîne de montage, augmentant considérablement l'efficacité de la production.",
        "history-button": "Lire plus",
        "history-more": "Au fil des décennies, Ford a continué à innover, introduisant de nouveaux modèles et technologies. Pendant la Seconde Guerre mondiale, Ford a contribué à l'effort de guerre en produisant du matériel militaire. Dans l'après-guerre, Ford s'est développé à l'échelle mondiale et est devenu l'un des plus grands constructeurs automobiles au monde.",
        "innovations-title": "Innovations",
        "innovations-text": "Au-delà de la chaîne de montage, Ford a été à la pointe de la technologie automobile, introduisant des fonctionnalités comme le verre de sécurité, l'injection de carburant et, plus récemment, des véhicules hybrides et électriques.",
        "mission-title": "Mission et Valeurs",
        "mission-text": "La mission de Ford est d'aider à construire un monde meilleur où chaque personne est libre de se déplacer et de poursuivre ses rêves. L'entreprise valorise l'innovation, la durabilité et l'engagement communautaire.",
        "products-title": "Produits Célèbres",
        "products-text": "Parmi les véhicules les plus emblématiques de Ford figurent le Modèle T, la Mustang, le camion F-150 et le SUV Explorer. Ford produit également des véhicules de luxe sous la marque Lincoln."
    }


};


function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelector('title').textContent = translations[lang].title || 'About Ford';
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}


function toggleHistory() {
    const moreHistory = document.getElementById('more-history');
    const button = document.querySelector('button[onclick="toggleHistory()"]');
    const currentLang = document.documentElement.lang || 'en';
    if (moreHistory.style.display === 'none') {
        moreHistory.style.display = 'block';
        button.textContent = currentLang === 'en' ? 'Collapse' : currentLang === 'es' ? 'Ocultar' : 'Réduire';
    } else {
        moreHistory.style.display = 'none';
        button.textContent = translations[currentLang]['history-button'];
    }
}
let currentImage = 0;
const images = document.querySelectorAll('.gallery-img');

function changeImage(direction) {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + direction + images.length) % images.length; // cycle
    images[currentImage].classList.add('active');
}



document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".scroll");
  
    function showOnScroll() {
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          img.classList.add("show");
        }
      });
    }
  
    window.addEventListener("scroll", showOnScroll);
    showOnScroll(); //
  });
  




  // gett all scroll.txt
const scrollTextElements = document.querySelectorAll('.scroll-text');

// check if it appears on the creen
function checkScroll() {
  scrollTextElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      element.classList.add('show');  
    }
  });
}


window.addEventListener('scroll', checkScroll);


checkScroll();





changeLanguage('en');

