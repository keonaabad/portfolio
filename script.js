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


//make me a function to print the latest clothing line topics
function printLatestClothingLineTopics() {
  let topics = ["T-shirts", "Hoodies", "Jackets", "Pants", "Shorts", "Shoes"];
  let list = document.createElement("ul");
  topics.forEach(topic => {
    let item = document.createElement("li");
    item.textContent = topic;
    list.appendChild(item);
  });

  //Hiding Nav Bar


}