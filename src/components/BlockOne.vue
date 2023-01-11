<template>
  <header class="bg-dark text-white header-area overflow-hidden">
    <div
      class="d-flex flex-column justify-content-evenly align-items-center
      header-section gsapHeader-frame"
    >
      <div class="container">
        <div class="d-grid header-grid">
          <img
            class="header-grid-codeMark"
            src="@/assets/stylesheets/images/header_Lmark.png"
            alt="</>圖案"
          />
          <img
            class="header-grid-4th"
            src="@/assets/stylesheets/images/header_R4th.png"
            alt="4th圖片"
          />
          <img
            class="header-grid-thef2e"
            src="@/assets/stylesheets/images/header_THEF2E.png"
            alt="THE F2E圖片"
          />
          <img
            class="header-grid-rwdTex"
            src="@/assets/stylesheets/images/header_rwdDesign.png"
            alt="互動式網頁設計圖片"
          />
          <a class="header-grid-btn btn btn-warning rounded-pill" href="https://2022.thef2e.com/login" target="_blank">立即報名</a>
          <img
            class="header-grid-board"
            src="@/assets/stylesheets/images/header_Rboard.png"
            alt="board 圖示"
          />
          <img
            class="header-grid-lDot"
            src="@/assets/stylesheets/images/header_Ldot.png"
            alt="左邊點狀箭頭圖"
          />
          <img
            class="header-grid-rDot"
            src="@/assets/stylesheets/images/header_Rdot.png"
            alt="右邊點狀箭頭圖"
          />
        </div>
      </div>
      <section class="overflow-hidden">
        <p class="header-runJoinUs mb-0">
          JOIN US
          <img
            class="d-inline-block"
            src="@/assets/stylesheets/images/header_joinusstar.png"
            alt="JOIN US"
          />
          JOIN US
          <img
            class="d-inline-block"
            src="@/assets/stylesheets/images/header_joinusstar.png"
            alt="JOIN US"
          />
          JOIN US
          <img
            class="d-inline-block"
            src="@/assets/stylesheets/images/header_joinusstar.png"
            alt="JOIN US"
          />
          JOIN US
          <img
            class="d-inline-block"
            src="@/assets/stylesheets/images/header_joinusstar.png"
            alt="JOIN US"
          />
          JOIN US
          <img
            class="d-inline-block"
            src="@/assets/stylesheets/images/header_joinusstar.png"
            alt="JOIN US"
          />
          JOIN US
          <img
            class="d-inline-block"
            src="@/assets/stylesheets/images/header_joinusstar.png"
            alt="JOIN US"
          />
          JOIN US
          <img
            class="d-inline-block"
            src="@/assets/stylesheets/images/header_joinusstar.png"
            alt=""
          />
          JOIN US
          <img
            class="d-inline-block"
            src="@/assets/stylesheets/images/header_joinusstar.png"
            alt="JOIN US"
          />
          JOIN US
          <img
            class="d-inline-block"
            src="@/assets/stylesheets/images/header_joinusstar.png"
            alt="JOIN US"
          />
        </p>
      </section>
    </div>
  </header>
</template>
<script>
export default {
  mounted() {
    const headerTimeline = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.gsapHeader-frame',
      },
    });
    headerTimeline
      .fromTo(
        '.header-grid-thef2e',
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          autoAlpha: 1,
          ease: 'slow(0.7, 0.7, false)',
          duration: 2,
          y: 0,
        },
      )
      .fromTo(
        '.header-grid-4th',
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          autoAlpha: 1,
          ease: 'slow(0.7, 0.7, false)',
          duration: 2,
          y: 0,
        },
        '<',
      )
      .fromTo(
        '.header-grid-board',
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          autoAlpha: 1,
          ease: 'slow(0.7, 0.7, false)',
          duration: 2,
          y: 0,
        },
        '<',
      )
      .fromTo(
        '.header-grid-codeMark',
        {
          autoAlpha: 0,
          y: -50,
        },
        {
          autoAlpha: 1,
          ease: 'slow(0.7, 0.7, false)',
          duration: 2.5,
          y: 0,
        },
        '<',
      )
      .to('.header-runJoinUs', {
        x: '100vh',
        xPercent: -50,
        ease: 'none',
        duration: 10,
        repeat: -1,
      })
      .to(
        '.header-grid-codeMark',
        {
          y: 50,
          ease: 'slow(0.7, 0.7, false)',
          duration: 4,
          repeat: -1,
          yoyo: true,
        },
        '<',
      )
      .to('.header-grid-board', {
        y: 50,
        ease: 'slow(0.7, 0.7, false)',
        duration: 4,
        repeat: -1,
        yoyo: true,
      });
  },
};
</script>
