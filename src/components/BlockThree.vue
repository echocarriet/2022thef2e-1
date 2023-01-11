<template>
  <div class="handRwd-container gsapHandRwd-section">
    <div class="handRwd-header overflow-hidden">
      <p class="handRwd-text gsap-textGoL">
        <img
          class="d-inline-block me-6 mb-1"
          src="@/assets/stylesheets/images/handRwd_InteractiveWebDesignDot.png"
          alt="白色圓點圖"
        />
        INTERACTIVE WEB DESIGN
        <img
          class="d-inline-block mx-6 mb-1"
          src="@/assets/stylesheets/images/handRwd_InteractiveWebDesignDot.png"
          alt="白色圓點圖"
        />
        INTERACTIVE WEB DESIGN
        <img
          class="d-inline-block mx-6 mb-1"
          src="@/assets/stylesheets/images/handRwd_InteractiveWebDesignDot.png"
          alt="白色圓點圖"
        />
        INTERACTIVE WEB DESIGN
        <img
          class="d-inline-block mx-6 mb-1"
          src="@/assets/stylesheets/images/handRwd_InteractiveWebDesignDot.png"
          alt="白色圓點圖"
        />
      </p>
    </div>
    <div class="container py-5 pt-lg-11 pb-lg-10 position-relative overflow-hidden">
      <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <img
          class="flex-shrink-0 flex-grow-0 flex-basis-auto handRwd-mobileTHand d-block d-lg-none"
          src="@/assets/stylesheets/images/handRwd_MobileThand.png"
          alt="mobile上方手圖"
        />
        <img
          class="flex-shrink-0 flex-grow-0 flex-basis-auto handRwd-lHand d-none d-lg-block"
          src="@/assets/stylesheets/images/handRwd_Lhand.png"
          alt="桌機左手圖"
        />
        <img
          class="flex-shrink-0 flex-grow-0 flex-basis-auto handRwd-rwd"
          src="@/assets/stylesheets/images/handRwd_rwd.png"
          alt="互動式網頁設計圖"
        />
        <img
          class="flex-shrink-0 flex-grow-0 flex-basis-auto handRwd-mobileBHand d-block d-lg-none"
          src="@/assets/stylesheets/images/handRwd_MobileBhand.png"
          alt="mobile下方手圖"
        />
        <img
          class="flex-shrink-0 flex-grow-0 flex-basis-auto handRwd-rHand d-none d-lg-block"
          src="@/assets/stylesheets/images/handRwd_Rhand.png"
          alt="桌機右手圖"
        />
      </div>
      <div class="d-none d-lg-block py-0 py-lg-4 gsaphandRwd-title">
        <div class="row justify-content-center fw-bold h6">
          <div class="col-5 text-end">
            <p class="mb-0">前端工程師</p>
          </div>
          <div class="col-1 text-center">
            <p class="mb-0">x</p>
          </div>
          <div class="col-5 text-start">
            <p class="mb-0">UI 設計師</p>
          </div>
        </div>
      </div>
      <img
        class="position-absolute handRwd-Tcircle"
        src="@/assets/stylesheets/images/handRwd_Tcircle.png"
        alt="PRON-END Developers 圖示"
      />
      <img
        class="position-absolute handRwd-Bcircle"
        src="@/assets/stylesheets/images/handRwd_Bcircle.png"
        alt="PRON-END Developers 圖示"
      />
    </div>
    <div class="handRwd-footer overflow-hidden">
      <p class="handRwd-text gsap-textGoR">
        INTERACTIVE WEB DESIGN
        <img
          class="d-inline-block mx-6 mb-1"
          src="@/assets/stylesheets/images/handRwd_InteractiveWebDesignDot.png"
          alt="白色圓點圖"
        />
        INTERACTIVE WEB DESIGN
        <img
          class="d-inline-block mx-6 mb-1"
          src="@/assets/stylesheets/images/handRwd_InteractiveWebDesignDot.png"
          alt="白色圓點圖"
        />
        INTERACTIVE WEB DESIGN
        <img
          class="d-inline-block mx-6 mb-1"
          src="@/assets/stylesheets/images/handRwd_InteractiveWebDesignDot.png"
          alt="白色圓點圖"
        />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gsapTitleRun() {
      const gsapHandRwdTimeline = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.gsapHandRwd-section',
          toggleActions: 'play pause resume reset',
        },
      });
      gsapHandRwdTimeline
        .to('.gsap-textGoL', {
          x: '100vh',
          xPercent: -50,
          ease: 'power3.out',
          duration: 2,
        })
        .to(
          '.gsap-textGoR',
          {
            x: '100vh',
            xPercent: -50,
            ease: 'power3.out',
            duration: 2,
          },
          '<',
        );
    },
    gsapHandMobileRun() {
      const gsapHandRwdTimeline = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.gsapHandRwd-section',
          toggleActions: 'play pause resume reset',
        },
      });
      gsapHandRwdTimeline
        .fromTo(
          '.handRwd-mobileTHand',
          {
            autoAlpha: 0,
            yPercent: 100,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 3,
          },
        )
        .fromTo(
          '.handRwd-mobileBHand',
          {
            autoAlpha: 0,
            yPercent: -80,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 3,
          },
          '<',
        )
        .fromTo(
          '.handRwd-rwd',
          {
            autoAlpha: 0,
            scale: 0,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 4,
          },
          '<',
        );
    },
    gsapHandDesktopRun() {
      const gsapHandRwdTimeline = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.gsapHandRwd-section',
          toggleActions: 'play pause resume reset',
        },
      });
      gsapHandRwdTimeline
        .fromTo(
          '.handRwd-lHand',
          {
            autoAlpha: 0,
            xPercent: 50,
            rotate: 90,
          },
          {
            autoAlpha: 1,
            xPercent: -90,
            duration: 3,
            rotate: 0,
          },
          '<',
        )
        .fromTo(
          '.handRwd-rHand',
          {
            autoAlpha: 0,
            xPercent: -50,
            rotate: -100,
          },
          {
            autoAlpha: 1,
            xPercent: 90,
            duration: 3,
            rotate: 0,
          },
          '<',
        )
        .fromTo(
          '.handRwd-rwd',
          {
            autoAlpha: 0,
            scale: 0,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 4,
          },
          '<',
        )
        .fromTo(
          '.gsaphandRwd-title',
          {
            autoAlpha: 0,
            scale: 0,
          },
          {
            autoAlpha: 1,
            scale: 1,
            duration: 3,
          },
          '<',
        );
    },
    gsapCircleRun() {
      const gsapHandRwdTimeline = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.gsapHandRwd-section',
          toggleActions: 'play pause resume reset',
        },
      });
      gsapHandRwdTimeline
        .fromTo(
          '.handRwd-Tcircle',
          {
            top: -110,
            rotate: 150,
          },
          {
            top: 40,
            duration: 2,
            rotate: 5,
          },
        )
        .fromTo(
          '.handRwd-Bcircle',
          {
            bottom: -210,
            rotate: 150,
          },
          {
            bottom: -58,
            duration: 2,
            rotate: 5,
          },
          '<',
        );
    },
  },
  mounted() {
    this.gsapTitleRun();
    this.gsapHandMobileRun();
    this.gsapHandDesktopRun();
    this.gsapCircleRun();
  },
};
</script>
<style lang="scss" scoped>
.gsap-textGoR {
  transform: translate(-50%, 0);
}
.handRwd {
  &-lHand {
    transform: translate(100%, 0);
    opacity: 0;
  }
  &-rHand {
    transform: translate(-100%, 0);
    opacity: 0;
  }
}
</style>
