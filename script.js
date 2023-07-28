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
  //Popup #1
  const courseBlock1 = document.querySelector('.course-block-1');
  const popup = document.getElementById('popup');
  const closeButton = document.querySelector('.close-button');

  courseBlock1.addEventListener('click', () => {
    popup.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });


  //Popup #2
  const courseBlock2 = document.querySelector('.course-block-2');
  const popup2 = document.getElementById('popup-2');
  const closeButton2 = document.querySelector('.close-button-2');

  courseBlock2.addEventListener('click', () => {
    popup2.style.display = 'block';
  });

  closeButton2.addEventListener('click', () => {
    popup2.style.display = 'none';
  });


  //Popup #3
  const courseBlock3 = document.querySelector('.course-block-3');
  const popup3 = document.getElementById('popup-3');
  const closeButton3 = document.querySelector('.close-button-3');

  courseBlock3.addEventListener('click', () => {
    popup3.style.display = 'block';
  });

  closeButton3.addEventListener('click', () => {
    popup3.style.display = 'none';
  });


  //Popup #4
  const courseBlock4 = document.querySelector('.course-block-4');
  const popup4 = document.getElementById('popup-4');
  const closeButton4 = document.querySelector('.close-button-4');

  courseBlock4.addEventListener('click', () => {
    popup4.style.display = 'block';
  });

  closeButton4.addEventListener('click', () => {
    popup4.style.display = 'none';
  });

  //Popup #5
  const courseBlock5 = document.querySelector('.course-block-5');
  const popup5 = document.getElementById('popup-5');
  const closeButton5 = document.querySelector('.close-button-5');

  courseBlock5.addEventListener('click', () => {
    popup5.style.display = 'block';
  });

  closeButton5.addEventListener('click', () => {
    popup5.style.display = 'none';
  });

  //Popup #6
  const courseBlock6 = document.querySelector('.course-block-6');
  const popup6 = document.getElementById('popup-6');
  const closeButton6 = document.querySelector('.close-button-6');

  courseBlock6.addEventListener('click', () => {
    popup6.style.display = 'block';
  });

  closeButton6.addEventListener('click', () => {
    popup6.style.display = 'none';
  });

  //Popup #7
  const courseBlock7 = document.querySelector('.course-block-7');
  const popup7 = document.getElementById('popup-7');
  const closeButton7 = document.querySelector('.close-button-7');

  courseBlock7.addEventListener('click', () => {
    popup7.style.display = 'block';
  });

  closeButton7.addEventListener('click', () => {
    popup7.style.display = 'none';
  });


  //Popup #8
  const courseBlock8 = document.querySelector('.course-block-8');
  const popup8 = document.getElementById('popup-8');
  const closeButton8 = document.querySelector('.close-button-8');

  courseBlock8.addEventListener('click', () => {
    popup8.style.display = 'block';
  });

  closeButton8.addEventListener('click', () => {
    popup8.style.display = 'none';
  });

  //Popup #9
  const courseBlock9 = document.querySelector('.course-block-9');
  const popup9 = document.getElementById('popup-9');
  const closeButton9 = document.querySelector('.close-button-9');

  courseBlock9.addEventListener('click', () => {
    popup9.style.display = 'block';
  });

  closeButton9.addEventListener('click', () => {
    popup9.style.display = 'none';
  });


  //Popup #10
  const courseBlock10 = document.querySelector('.course-block-10');
  const popup10 = document.getElementById('popup-10');
  const closeButton10 = document.querySelector('.close-button-10');

  courseBlock10.addEventListener('click', () => {
    popup10.style.display = 'block';
  });

  closeButton10.addEventListener('click', () => {
    popup10.style.display = 'none';
  });

  //Popup #11
  const courseBlock11 = document.querySelector('.course-block-11');
  const popup11 = document.getElementById('popup-11');
  const closeButton11 = document.querySelector('.close-button-11');

  courseBlock11.addEventListener('click', () => {
    popup11.style.display = 'block';
  });

  closeButton11.addEventListener('click', () => {
    popup11.style.display = 'none';
  });

    //Popup #12
    const courseBlock12 = document.querySelector('.course-block-12');
    const popup12 = document.getElementById('popup-12');
    const closeButton12 = document.querySelector('.close-button-12');
  
    courseBlock12.addEventListener('click', () => {
      popup12.style.display = 'block';
    });
  
    closeButton12.addEventListener('click', () => {
      popup12.style.display = 'none';
    });