// Typing effect for the dialogue in about me section
document.addEventListener("DOMContentLoaded", function() {
    const dialogueContainer = document.querySelector('#about-me .dialogue-box');
    dialogueContainer.style.opacity = '0';

    setTimeout(function() {
        dialogueContainer.style.opacity = '1';
        typeDialogueText(dialogueContainer, "Hey Billy, look! We have a guest visiting our website today!", 200);
    }, 1000); // Adjust the delay in milliseconds for the dialogue to appear
});

function typeDialogueText(element, text, delay) {
    const words = text.split(" ");
    let currentWordIndex = 0;

    const typeWord = () => {
        if (currentWordIndex < words.length) {
            const currentWord = words[currentWordIndex];
            if (currentWord === 'look!' || currentWord === 'guest') {
                element.innerHTML += currentWord + "<br>";
            } else {
                element.innerHTML += currentWord + " ";
            }
            currentWordIndex++;
            setTimeout(typeWord, delay);
        }
    };

    typeWord();
}

// Sending validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    alert('Form submitted successfully');
    form.reset();
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Typing effect for the dialogue in header
document.addEventListener("DOMContentLoaded", function() {
    // Your existing code for the typing effect

});

// Sending validation
// Card effect
$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });
});


// Header
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("header nav ul li a");

    for (const navLink of navLinks) {
        navLink.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = navLink.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.querySelector("header").offsetHeight;
            const offsetPosition = targetElement.offsetTop - headerHeight + 20; // Adjust padding as needed
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    }
});

// Function to display the demo video modal
function showDemoVideo() {
  var modal = document.getElementById("demoModal");
  modal.style.display = "block";

  // Close the modal if the user clicks outside the video region
  window.onclick = function(event) {
    if (event.target == modal) {
      closeDemoVideo();
    }
  };
}

// Function to close the demo video modal
function closeDemoVideo() {
  var modal = document.getElementById("demoModal");
  var video = modal.querySelector('iframe'); // Get the video iframe

  // Pause the video
  if (video) {
    var videoSrc = video.src;
    video.src = ''; // Set the source to an empty string to stop the video
    video.src = videoSrc; // Restore the original video source
  }

  modal.style.display = "none";

  // Remove the window.onclick event when the modal is closed
  window.onclick = null;
}

