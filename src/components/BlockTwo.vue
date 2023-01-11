<template>
  <section class="bg-dark py-8 py-xxl-11 text-white">
    <div class="container">
      <div class="d-grid dialog-grid gsapDialogFrame">
        <img
          class="dialog-grid-one gsapDialog-OneGroup"
          src="@/assets/stylesheets/images/dialog01.png"
          alt=""
        />
        <img
          class="dialog-grid-two gsapDialog-OneGroup"
          src="@/assets/stylesheets/images/dialog02.png"
          alt=""
        />
        <img
          class="dialog-grid-three gsapDialog-OneGroup"
          src="@/assets/stylesheets/images/dialog03.png"
          alt=""
        />
        <img
          class="dialog-grid-four gsapDialog-OneGroup"
          src="@/assets/stylesheets/images/dialog04.png"
          alt=""
        />
        <img
          class="dialog-grid-five gsapDialog-TwoGroup"
          src="@/assets/stylesheets/images/dialog05.png"
          alt=""
        />
        <img
          class="dialog-grid-six gsapDialog-TwoGroup"
          src="@/assets/stylesheets/images/dialog06.png"
          alt=""
        />
        <img
          class="dialog-grid-seven gsapDialog-TwoGroup"
          src="@/assets/stylesheets/images/dialog07.png"
          alt=""
        />
        <img
          class="dialog-grid-eight gsapDialog-ThreeGroup"
          src="@/assets/stylesheets/images/dialog08.png"
          alt=""
        />
        <img
          class="dialog-grid-night gsapDialog-ThreeGroup"
          src="@/assets/stylesheets/images/dialog09.png"
          alt=""
        />
        <img
          class="dialog-grid-ten gsapDialog-ThreeGroup"
          src="@/assets/stylesheets/images/dialog10.png"
          alt=""
        />
        <img
          class="dialog-grid-eleven gsapDialog-ThreeGroup"
          src="@/assets/stylesheets/images/dialog11.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    const dialogTimeline = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.gsapDialogFrame',
        toggleActions: 'play pause resume reset',
      },
    });
    dialogTimeline
      .to('.gsapDialog-OneGroup', {
        autoAlpha: 1,
        ease: 'bounce.out',
        duration: 2,
        scale: 1,
        startAt: {
          scale: 0,
        },
      })
      .to('.gsapDialog-TwoGroup', {
        autoAlpha: 1,
        ease: 'bounce.out',
        duration: 2,
        scale: 1,
        startAt: {
          scale: 0,
        },
      })
      .to('.gsapDialog-ThreeGroup', {
        autoAlpha: 1,
        ease: 'bounce.out',
        duration: 2,
        scale: 1,
        startAt: {
          scale: 0,
        },
      });
  },
};
</script>
<style lang="scss" scoped>
.gsapDialog-OneGroup,
.gsapDialog-TwoGroup,
.gsapDialog-ThreeGroup {
  opacity: 0;
}
</style>
