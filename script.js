//Scrolling Smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth"
      });
    });
  });



  //Popup for courses
  const courseBlock1 = document.querySelector('.course-block-1');
  const popup = document.getElementById('popup');
  const closeButton = document.querySelector('.close-button');

  courseBlock1.addEventListener('click', () => {
    popup.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });

