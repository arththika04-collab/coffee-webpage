// ========== NAVBAR HAMBURGER MENU ==========
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});


// ========== SMOOTH SCROLL FUNCTION ==========
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}


// ========== IMAGE FLOAT ANIMATION ==========
const images = document.querySelectorAll(".coffee-card img, .coffee-card2 img");

images.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "translateY(-6px) scale(1.05)";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "translateY(0px) scale(1)";
  });
});


// ========== FADE-IN ON SCROLL ==========
const cards = document.querySelectorAll(".coffee-card, .coffee-card2");

function fadeInOnScroll() {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.8s ease-out";
});


// ========== BEST SELLING AUTO SLIDER ==========
const productList = document.querySelector(".product-list");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let scrollAmount = 0;

nextBtn.addEventListener("click", () => {
  productList.scrollBy({ left: 260, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  productList.scrollBy({ left: -260, behavior: "smooth" });
});

// Auto-slide (every 3 sec)
setInterval(() => {
  productList.scrollBy({ left: 260, behavior: "smooth" });
}, 3000);

/* ======================================================
    1. NAVBAR HAMBURGER MENU
====================================================== */
const hamburgerr = document.querySelector(".hamburger");
const navLinkss = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});


/* ======================================================
    2. SMOOTH SCROLL
====================================================== */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}


/* ======================================================
    3. IMAGE FLOAT ANIMATION
====================================================== */
const imagess = document.querySelectorAll(".coffee-card img, .coffee-card2 img");

images.forEach((img) => {
  img.addEventListener("mousemove", () => {
    img.style.transform = "translateY(-4px) scale(1.05)";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "translateY(0px) scale(1)";
  });
});


/* ======================================================
    4. FADE-IN ON SCROLL
====================================================== */
const fadeCards = document.querySelectorAll(".coffee-card, .coffee-card2, .product-card");

function fadeInOnScroll() {
  fadeCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("fade-visible");
    }
  });
}

window.addEventListener("scroll", fadeInOnScroll);


/* Add default hidden style */
fadeCards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.9s ease-out";
});


/* ======================================================
    5. AUTO SLIDER
====================================================== */
const productListt = document.querySelector(".product-list");
const nextBtnn = document.querySelector(".next");
const prevBtnn= document.querySelector(".prev");

nextBtn.addEventListener("click", () => {
  productList.scrollBy({ left: 260, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  productList.scrollBy({ left: -260, behavior: "smooth" });
});

// Auto-slide every 3 seconds
setInterval(() => {
  productList.scrollBy({ left: 260, behavior: "smooth" });
}, 3000);


/* ======================================================
    6. PARALLAX BACKGROUND on HERO
====================================================== */
document.addEventListener("mousemove", function(e) {
  const speed = 0.03;
  const x = (window.innerWidth - e.pageX * speed);
  const y = (window.innerHeight - e.pageY * speed);
  document.body.style.backgroundPosition = `${x}px ${y}px`;
});


/* ======================================================
    7. BUTTON RIPPLE EFFECT
====================================================== */
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function(e) {
    let ripple = document.createElement("span");
    ripple.classList.add("ripple-effect");
    ripple.style.left = e.clientX - btn.offsetLeft + "px";
    ripple.style.top = e.clientY - btn.offsetTop + "px";
    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});


/* ======================================================
    8. SCROLL PROGRESS BAR
====================================================== */
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#c7a17a";
progressBar.style.zIndex = "2000";
progressBar.style.width = "0%";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let height = document.body.scrollHeight - window.innerHeight;
  let progress = (scrollTop / height) * 100;
  progressBar.style.width = progress + "%";
});


function createBean() {
  const bean = document.createElement("div");
  bean.classList.add("bean");
  bean.style.left = Math.random() * window.innerWidth + "px";
  bean.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(bean);

  setTimeout(() => bean.remove(), 8000);
}

setInterval(createBean, 900);

const reviews = [
  {
    img: "rev",
    text: "I Have Tested Caffeine Coffee Many Times. Really Amazing! The combination was perfect and quality was outstanding.",
    name: "Shalima Hayden"
  },
  {
    img: "user2.jpg",
    text: "Absolutely loved the coffee! Rich aroma and premium taste. My go-to coffee shop from now.",
    name: "Michael Thomas"
  },
  {
    img: "user3.jpg",
    text: "The best iced coffee I've ever had. Fresh, bold, and refreshing. Highly recommended!",
    name: "Aadhira Sen"
  },
  {
    img: "user4.jpg",
    text: "Amazing customer service. Coffee quality is consistent and very satisfying every time.",
    name: "Arjun Prakash"
  }
];

let index = 0;

const userImg = document.getElementById("userImg");
const reviewText = document.getElementById("reviewText");
const userName = document.getElementById("userName");
const testimonialBox = document.getElementById("testimonialBox");

// Change review
function updateReview() {
  testimonialBox.style.opacity = 0;

  setTimeout(() => {
    userImg.src = reviews[index].img;
    reviewText.textContent = reviews[index].text;
    userName.textContent = reviews[index].name;
    testimonialBox.style.opacity = 1;
  }, 400);
}

// Next button
document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % reviews.length;
  updateReview();
});

// Previous button
document.getElementById("prevBtn").addEventListener("click", () => {
  index = (index - 1 + reviews.length) % reviews.length;
  updateReview();
});
