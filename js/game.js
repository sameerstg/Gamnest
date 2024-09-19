// userdetails image changing functionality
function loadFile(event) {
  const avatar = document.getElementById('avatar');
  avatar.src = URL.createObjectURL(event.target.files[0]);
  avatar.onload = () => {
    URL.revokeObjectURL(avatar.src);
  }
}
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.custom-swiper-pagination', // Target your custom pagination container
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


var newswiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const icons = document.querySelectorAll('.icon-bar a');

// Loop through all icons and add a click event listener
icons.forEach(icon => {
  icon.addEventListener('click', function () {
    // Remove the 'active' class from all icons
    icons.forEach(i => i.classList.remove('active'));

    // Add the 'active' class to the clicked icon
    this.classList.add('active');
  });
});


// Get all the icons in the icon bar
const iconLinks = document.querySelectorAll('.icon-bar a');

// Function to show the relevant section and hide others
function showContent(targetId) {
  // Hide all content sections
  const sections = document.querySelectorAll('.game-wrapper, .support-wrapper, .qr-wrapper, .ticket-wrapper, .profile-wrapper');
  sections.forEach(section => {
    section.classList.add('hidden');  // Add 'hidden' class to hide the section
  });

  // Show the selected section
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.classList.remove('hidden');  // Remove 'hidden' class to show the section
  }

  // Remove 'active' class from all icons
  iconLinks.forEach(icon => icon.classList.remove('active'));

  // Add 'active' class to the clicked icon
  const clickedIcon = document.querySelector(`a[data-target="${targetId}"]`);
  if (clickedIcon) {
    clickedIcon.classList.add('active');
  }
}

// Add event listeners to all the icons
iconLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('data-target');
    showContent(targetId);
  });
});

// Initially show the games section (or any default section)
showContent('games');

const ticketowned = document.getElementById("ownedticketsShower")

ticketowned && ticketowned.addEventListener('click', () => {

  document.getElementById("ticket").style.display = "none"
  document.getElementById("ownedticket").style.display = "block"

})
const walletArrow = document.getElementById("walletarrow");

walletArrow && walletArrow.addEventListener("click", function () {

  if (walletArrow.src.includes("_content-right.png")) {
    walletArrow.src = "../assets/arrow-up.png";
    document.getElementById("otherpayment").style.display = "block"
  } else if (walletArrow.src.includes("arrow-up.png")) {
    walletArrow.src = "../assets/_content-right.png";
    document.getElementById("otherpayment").style.display = "none"

  }
});

const paymentArrow = document.getElementById("paymentarrow");

paymentArrow && paymentArrow.addEventListener("click", function () {

  if (paymentArrow.src.includes("arrow-up.png")) {
    paymentArrow.src = "../assets/_content-right.png";
    document.getElementById("paymentdetails").style.display = "none"
  } else if (paymentArrow.src.includes("_content-right.png")) {
    paymentArrow.src = "../assets/arrow-up.png";
    document.getElementById("paymentdetails").style.display = "block"

  }
});

const gamesTab = document.getElementById('games');
const ticketsTab = document.getElementById('tickets');


// Event listener for Tickets tab click
ticketsTab &&  ticketsTab.addEventListener('click', function () {
  // Add underline class to Tickets, remove from Games
  console.log("b",gamesTab.classList);

gamesTab.classList.remove("underline");
console.log("a",gamesTab.classList);

  ticketsTab.classList.add("underline");
});

// Event listener for Games tab click
gamesTab && gamesTab.addEventListener('click', function () {
  ticketsTab.classList.remove("underline");
  gamesTab.classList.add("underline");
});




