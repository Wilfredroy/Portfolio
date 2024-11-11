// Add Scroll Event to Trigger Fade-In and Typing Effect
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');
    const sectionHeadings = document.querySelectorAll('.section-heading');
  
    const options = {
      threshold: 0.5
    };
  
    // Typing Effect Function
    function typingEffect(element, delay = 0) {
      const text = element.textContent;
      let index = 0;
      element.textContent = ''; // Clear existing content
      setTimeout(() => {
        const interval = setInterval(() => {
          element.textContent += text[index];
          index++;
          if (index === text.length) clearInterval(interval);
        }, 100); // Adjust speed here (100ms per character)
      }, delay);
    }
  
    // Intersection Observer to trigger animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          const heading = entry.target.querySelector('.section-heading');
          if (heading && !heading.classList.contains('reveal')) {
            heading.classList.add('reveal');
            typingEffect(heading, 200); // Delay typing effect
          }
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
    // Scroll-to functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  