
document.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,          // nombre de cartes visibles
    spaceBetween: 30,          // espace entre les cartes
    loop: true,                // boucle infinie
    speed: 2000,               // vitesse du glissement (ms)
    autoplay: {                // glissement automatique
      delay: 0,                // pas de pause entre slides
      disableOnInteraction: false, 
    },
    freeMode: true,            // glissement fluide continu
    breakpoints: {             // responsive
      320: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    }
  });
});

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
const pvcImages = {
  "pvc-info1":"assets/img/fenetre-pvc.jpg",
  "pvc-info2":"assets/img/fenetrepvc.png",
  "pvc-info3":"assets/img/fenetrepvcmesure.png"
};
document.querySelectorAll('#pvcTab button').forEach(btn=>{
  btn.addEventListener('click',function(){
    const target=this.getAttribute('data-bs-target').substring(1);
    document.getElementById('pvc-main-img').src=pvcImages[target];
  });
});

const aluImages = {
  "alu-info1":"assets/img/porte-1.jpg",
  "alu-info2":"assets/img/porte-1-avantages.png",
  "alu-info3":"assets/img/porte-1-caracteristiques.png"
};
document.querySelectorAll('#aluTab button').forEach(btn=>{
  btn.addEventListener('click',function(){
    const target=this.getAttribute('data-bs-target').substring(1);
    document.getElementById('alu-main-img').src=aluImages[target];
  });
});

const boisImages = {
  "bois-info1":"assets/img/f2.png",
  "bois-info2":"assets/img/f2-avantages.png",
  "bois-info3":"assets/img/f2-caracteristiques.png"
};
document.querySelectorAll('#boisTab button').forEach(btn=>{
  btn.addEventListener('click',function(){
    const target=this.getAttribute('data-bs-target').substring(1);
    document.getElementById('bois-main-img').src=boisImages[target];
  });
});

function showMessage(type) {
  let body = document.getElementById("chatbot-body");
  let msg = "";

  if(type === "services") {
    msg = "✅ <b>Maluvpro</b> : Solutions de fermetures à Paris et ses alentours. Service de qualité garanti.";
  } else if(type === "horaires") {
    msg = "⏰ Nos horaires : Ouvert de <b>8h à 18h</b>, du lundi au samedi.";
  } else if(type === "contact") {
    msg = "📞 Contactez-nous au <b>+33 6 61 16 97 99</b><br>" +
          "📍 <a href='https://maps.app.goo.gl/kEhYNWQFYJJhsfYY9' target='_blank'>Cliquez ici pour nous trouver sur Google Maps</a>";
  }

  let div = document.createElement("div");
  div.className = "bot-message";
  div.innerHTML = msg;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function sendMessage() {
  let input = document.getElementById("userInput");
  if(input.value.trim() !== "") {
    let body = document.getElementById("chatbot-body");

    // Message utilisateur
    let userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerText = input.value;
    body.appendChild(userDiv);

    // Réponse automatique
    setTimeout(() => {
      let botDiv = document.createElement("div");
      botDiv.className = "bot-message";
      botDiv.innerText = "Merci pour votre message. Sélectionnez une option ci-dessus pour plus d'infos 😉";
      body.appendChild(botDiv);
      body.scrollTop = body.scrollHeight;
    }, 800);

    input.value = "";
    body.scrollTop = body.scrollHeight;
  }
}

function handleKey(e) {
  if(e.key === "Enter") {
    sendMessage();
  }
}

// Toggle chatbot
document.getElementById("chatbot-toggle").addEventListener("click", () => {
  let chatbot = document.getElementById("chatbot");
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
});

// Ouvrir automatiquement avec son et message de bienvenue
window.addEventListener("load", function () {
    const chatbot = document.getElementById('chatbot');
    if (chatbot) {
        chatbot.style.display = 'flex'; // Afficher le chatbot
    }

    // Son "tic" au démarrage
    const audio = new Audio('https://www.soundjay.com/button/sounds/button-16.mp3'); 
    audio.play().catch(e => console.log("Son bloqué par le navigateur", e));

    // Message de bienvenue
    const chatBody = document.getElementById('chatbot-body');
    if (chatBody) {
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        chatBody.appendChild(botMessage);
        // Faire défiler vers le bas
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});

// Fermer avec la croix
document.getElementById("chatbot-close").addEventListener("click", () => {
  document.getElementById("chatbot").style.display = "none";
});
// rendez-vous
const openBtn = document.getElementById('open-appointment');
const popup = document.getElementById('appointment-popup');
const closeBtn = document.getElementById('close-appointment');

openBtn.addEventListener('click', () => {
  popup.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('show');
});

// Fermer en cliquant sur le fond
popup.addEventListener('click', (e) => {
  if(e.target === popup) popup.classList.remove('show');
});
// catalogue
const boxes = document.querySelectorAll('.icon-box');

boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    boxes.forEach(b => {
      if(b !== box) {
        b.querySelector('.icon-box-inner').style.transform = 'scale(0.9) translateZ(-20px)';
        b.querySelector('.icon-box-inner').style.opacity = '0.6';
      }
    });
  });

  box.addEventListener('mouseleave', () => {
    boxes.forEach(b => {
      b.querySelector('.icon-box-inner').style.transform = 'scale(1) rotateY(0) rotateX(0) translateZ(0)';
      b.querySelector('.icon-box-inner').style.opacity = '1';
    });
  });
});
 // Initialisation du Swiper
  var swiper = new Swiper('.hero-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: function () {
        // Mettre en pause toutes les vidéos
        document.querySelectorAll('.hero-video').forEach(video => {
          video.pause();
        });

        // Lire la vidéo du slide actif si elle existe
        let activeSlide = this.slides[this.activeIndex];
        let video = activeSlide.querySelector('video');
        if (video) {
          video.play().catch(err => {
            console.log('Impossible de lancer la vidéo automatiquement', err);
          });
        }
      }
    }
  });

  // Lecture initiale si le premier slide est vidéo
  let firstVideo = document.querySelector('.swiper-slide-active video');
  if (firstVideo) firstVideo.play();
  