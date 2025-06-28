import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import 'swiper/css';
import img from './img/photo.jpg'
import "./App.css"
import AOS from 'aos';
import PureCounter from '@srexi/purecounterjs';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import Waypoint from 'waypoints/lib/noframework.waypoints';
import imagesLoaded from 'imagesloaded';
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
   useEffect(() => {
    // Header toggle
    const headerToggleBtn = document.querySelector('.header-toggle');
    function headerToggle() {
      document.querySelector('#header').classList.toggle('header-show');
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    }
    headerToggleBtn?.addEventListener('click', headerToggle);

    // Nav menu click (close mobile menu)
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.header-show')) {
          headerToggle();
        }
      });
    });

    // Mobile dropdowns
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    // Preloader
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    // Scroll top button
    const scrollTop = document.querySelector('.scroll-top');
    function toggleScrollTop() {
      if (scrollTop) {
        scrollTop.classList.toggle('active', window.scrollY > 100);
      }
    }
    scrollTop?.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    // AOS init
    const aosInit = () => {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    };
    window.addEventListener('load', aosInit);

    // Typed.js
  

    // PureCounter
    new PureCounter();

    // Skills animation
    document.querySelectorAll('.skills-animation').forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function () {
          item.querySelectorAll('.progress .progress-bar').forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });

    // GLightbox
    GLightbox({ selector: '.glightbox' });

    // Isotope
    document.querySelectorAll('.isotope-layout').forEach(isotopeItem => {
      let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter,
          sortBy: sort
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach(filterBtn => {
        filterBtn.addEventListener('click', function () {
          isotopeItem.querySelector('.filter-active')?.classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({ filter: this.getAttribute('data-filter') });
          aosInit();
        });
      });
    });

    // Swiper sliders
    function initSwiper() {
      document.querySelectorAll('.init-swiper').forEach(swiperElement => {
        const config = JSON.parse(swiperElement.querySelector('.swiper-config').innerHTML.trim());
        new Swiper(swiperElement, config);
      });
    }
    window.addEventListener('load', initSwiper);

    // Scroll to hash on load
    window.addEventListener('load', () => {
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    });

    // Scrollspy
    const navmenulinks = document.querySelectorAll('.navmenu a');
    const navmenuScrollspy = () => {
      navmenulinks.forEach(navmenulink => {
        const section = document.querySelector(navmenulink.hash);
        if (section) {
          const position = window.scrollY + 200;
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
            navmenulink.classList.add('active');
          } else {
            navmenulink.classList.remove('active');
          }
        }
      });
    };
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
  }, []);

  return (
    <div className="index-page">
      {/* TODO: Replace all <img> and <a> paths with require or import statements if needed */}
      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list"></i>

        <div className="profile-img">
          <img src={img} alt="" className="img-fluid rounded-circle" />
        </div>

        <a href="index.html" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Louay Hcine</h1>
        </a>

        <div className="social-links text-center">
         
          <a href="https://www.facebook.com/louayHC10/" target=" _blank" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/louay.hcine/" target=" _blank" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="https://github.com/LouayLH10" className="github" target=" _blank"><i className="bi bi-github "></i></a>

          <a href="https://www.linkedin.com/in/louay-hcin-128a37240/" className="linkedin" target=" _blank"><i className="bi bi-linkedin"></i></a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
            <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
            <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>

          
            <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
 <Main/>
<About/>
<Skills/>
<Resume/>
<Contact/>
      </main>

      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center ">
            <p>© <span>Copyright</span> <strong className="px-1 sitename">Louay Hcine </strong> <span>All Rights Reserved</span></p>
          </div>
       
        </div>
      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

    </div>
  );
};

export default App;
