/**
 * Template Name: Medilab
 * Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
 * Updated: Mar 17 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });


  const changeActiveTab = () => {
    const gastronomiaTab = document.querySelector('#gastronomia');
    if(gastronomiaTab){
      const activeGastronomiaTab = gastronomiaTab.querySelector('.nav-link.active');
      if (activeGastronomiaTab) {
        const mobileNavSelected = document.getElementById('mobile-nav-selected-gastronomia');
        mobileNavSelected.textContent = activeGastronomiaTab.textContent;
      }
    }

    const artesanatoTab = document.querySelector('#artesanato');
    if(artesanatoTab){
      const activeArtesanatoTab = artesanatoTab.querySelector('.nav-link.active');
      if (activeArtesanatoTab) {
        const mobileNavSelected = document.getElementById('mobile-nav-selected-artesanato');
        mobileNavSelected.textContent = activeArtesanatoTab.textContent;
      }
    }    
  }

  changeActiveTab();

  // Exibir opções no menu mobile para os participantes de GASTRONOMIA
  on("click", ".mobile-nav-toggle-gastronomia", function (e) {
    select("#gastronomia").classList.toggle("navtabs-mobile");
  });

  // Fechar opções no menu mobile para os participantes de GASTRONOMIA
  on('click', '#gastronomia>ul', function(e) {
    select('#gastronomia').classList.remove('navtabs-mobile');
    changeActiveTab();
  });

  // Exibir opções no menu mobile para os participantes de ARTESANATO
  on("click", ".mobile-nav-toggle-artesanato", function (e) {
    select("#artesanato").classList.toggle("navtabs-mobile");
  });

  
  // Fechar opções no menu mobile para os participantes de ARTESANATO
  on('click', '#artesanato>ul', function(e) {
    select('#artesanato').classList.remove('navtabs-mobile');
    changeActiveTab();
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  // Initiate Tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  /**
   * Initiate AOS
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: "slide",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate Gallery Lightbox
   */
  const galelryLightbox = GLightbox({
    selector: ".galelry-lightbox",
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  /**
   * Events slider
   */
  new Swiper(".events-slider", {
    // speed: 600,
    // loop: true,
    // autoplay: {
    //   delay: 3000, //3 segunos
    //   disableOnInteraction: false
    // },
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });

  /**
   * Products slider
   */
  new Swiper(".products-slider", {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      typ: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });


   // Initiate Services
  selectService('servicos-coffeebreak');
  

})();


function selectService(id){
  if(id == 'servicos-coffeebreak'){
    changeDisplay('coffeebreak-gallery', 'block');
    changeDisplay('feiras-gallery', 'none');
    const elementSelected = document.getElementById(id);
    if(elementSelected){
      elementSelected.classList.add('service-item-selected');
      document.getElementById('servicos-feiras').classList.remove('service-item-selected');
    }     
    

  }else{
    changeDisplay('coffeebreak-gallery', 'none');
    changeDisplay('feiras-gallery', 'block');
    const elementSelected = document.getElementById(id);
    if(elementSelected){
      elementSelected.classList.add('service-item-selected');
      document.getElementById('servicos-coffeebreak').classList.remove('service-item-selected');
    }     

  }
}

function changeDisplay(nameClass, typeDisplay){
  var elements = document.getElementsByClassName(nameClass), i;

  for (i = 0; i < elements.length; i += 1) {
    elements[i].style.display = typeDisplay;
  }
}
