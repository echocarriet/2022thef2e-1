<template>
  <NavbarModal />
  <BlockOne />
  <BlockTwo />
  <BlockThree />
  <BlockFour />
  <BlockFive />
  <BlockSix />
  <footer class="bg-dark fs-9 py-5 text-white text-center footer">
    <p>Copyright © 2022 HexSchool.All rights reserved.</p>
  </footer>
</template>

<script>
import NavbarModal from '@/components/NavbarModal.vue';
import BlockOne from '@/components/BlockOne.vue';
import BlockTwo from '@/components/BlockTwo.vue';
import BlockThree from '@/components/BlockThree.vue';
import BlockFour from '@/components/BlockFour.vue';
import BlockFive from '@/components/BlockFive.vue';
import BlockSix from '@/components/BlockSix.vue';

export default {
  components: {
    NavbarModal,
    BlockOne,
    BlockTwo,
    BlockThree,
    BlockFour,
    BlockFive,
    BlockSix,
  },
};
</script>
<style lang="scss">
.footer {
  font-family: 'Noto Sans TC', sans-serif;
}
</style>
