document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.home-container button');
  button.addEventListener('click', function () {
    window.location.href = 'birthday.html';
  });
});

//cursor heart
// Select the cursor and body elements
let cursor = document.querySelector("#cursor");
let body = document.querySelector("body");

// Handle mouse movement
document.onmousemove = function (e) {
  // Move the cursor to the current mouse position
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  // Animate the background based on mouse position
  body.style.backgroundPositionX = e.pageX / -4 + "px";
  body.style.backgroundPositionY = e.pageY / -4 + "px";

  // Create a new element and add it to the body
  let element = document.createElement("div");
  element.className = "element";
  body.prepend(element);

  // Move the element to the cursor position
  element.style.left = cursor.getBoundingClientRect().x + "px";
  element.style.top = cursor.getBoundingClientRect().y - 20 + "px";

  // Set a timeout for the movement and removal of the element
  setTimeout(function () {
    // Get the first element with the class 'element'
    let text = document.querySelectorAll(".element")[0],
      // Determine random movement directions
      directionX = Math.random() < 0.5 ? -1 : 1,
      directionY = Math.random() < 0.5 ? -1 : 1;

    // Move the element randomly
    text.style.left =
      parseInt(text.style.left) - directionX * (Math.random() * 100) + "px"; // change the number to see more texts :D
    text.style.top =
      parseInt(text.style.top) - directionY * (Math.random() * 100) + "px";
    // Hide the element
    text.style.opacity = 0;
    // Scale down the element
    text.style.transform = "scale(0.25)";
    // Change the innerHTML of the element with random text
    text.innerHTML = randomText();

    // Set a timeout to remove the element after 1 second
    setTimeout(function () {
      element.remove();
    }, 1000);
  }, 10);

  // Function to generate random text
  function randomText() {
    var text = "❤️".split("");
    letter = text[Math.floor(Math.random() * text.length)];
    return letter;
  }
};

//flower


document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('section').forEach((section) => {
    section.classList.add('scroll-trigger');
    observer.observe(section);
  });
});

tailwind.config = {
  theme: {
    extend: {
      colors: {
        'chocolate': {
          light: '#8B4513',
          DEFAULT: '#654321',
          dark: '#3B2614'
        }
      }
    }
  }
}
