window.addEventListener("DOMContentLoaded", () => {
  const apiData = [
    {
      id: 1,
      link: "#",
      Image: "images/banner1.png",
      alt: "책",
    },
    {
      id: 2,
      link: "#",
      Image: "images/banner2.jpg",
      alt: "책",
    },
    {
      id: 3,
      link: "#",
      Image: "images/banner3.jpg",
      alt: "책",
    },
    {
      id: 4,
      link: "#",
      Image: "images/banner4.jpg",
      alt: "책",
    },
    {
      id: 5,
      link: "#",
      Image: "images/banner5.jpg",
      alt: "책",
    },
    {
      id: 6,
      link: "#",
      Image: "images/banner6.jpg",
      alt: "책",
    },
    {
      id: 7,
      link: "#",
      Image: "images/banner1.png",
      alt: "책",
    },
    {
      id: 8,
      link: "#",
      Image: "images/banner1.png",
      alt: "책",
    },
  ];

  const total = apiData.length;
  const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");
  const banner = document.querySelector(".sw_banner");

  const tag = `
  <div class="swiper-slide">
            <a href="#" class="banner_left_slide">
              <img src="images/banner1.png" alt="책" />
            </a>
            </div>`;

  let htmlTag = "";

  function makeHtml() {
    for (let i = 0; i < total; i++) {
      htmlTag =
        htmlTag +
        `
        <div class="swiper-slide">
        <a href="${apiData[i].link}" class="banner_left_slide">
            <img src="${apiData[i].Image}" alt="${apiData[i].alt}" />
        </a>
    </div>`;
    }
    bannerPos.innerHTML = htmlTag;
  }

  function makeSlide() {
    const swiper = new Swiper(".sw_banner", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },

      //     navigation: {
      //       nextEl: ".banner_slide_next",
      //       prevEl: ".banner_slide_prev",
      //     },

      //   pagination: {
      //     el: ".banner_slide_pg",
      //     clickable: true,
      //   },

      breakpoints: {
        760: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
      },
    });
    return swiper;
  }

  makeHtml();
  const swiper = makeSlide();
  // 배너 영역에 마우스가 걸친다면
  banner.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });

  // 배너 영역에 마우스가 빠져나간다면
  banner.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
});
