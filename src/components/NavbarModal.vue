<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 py-lg-5 fixed-top">
    <div class="container-fluid align-items-center px-3 px-lg-5">
      <button
        class="navbar-toggler me-3 me-lg-0 border-0 py-0"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="this.toggleCollapse()"
      >
        <i class="bi bi-list text-white fs-4"></i>
      </button>
      <h1 class="mb-0">
        <router-link class="navbar-brand navbar-logo py-0" to="/">
          THE F2E
        </router-link>
      </h1>
      <a href="https://2022.thef2e.com/login" class="navbar-signUpBtn btn btn-outline-light ms-auto"
        >立即報名</a
      >
      <div class="collapse navbar-collapse" ref="bsCollapse">
        <button
          class="bnt border-0 bg-transparent d-block d-lg-none ms-auto text-white fs-3 pt-4"
          @click="this.hideCollapse()"
        >
          <i class="bi bi-x"></i>
        </button>
        <ul class="navbar-nav align-items-center ms-auto mb-2 mb-lg-0 text-center pb-5 pb-lg-0">
          <li class="nav-item w-100 w-lg-auto">
            <a class="nav-link py-3 py-lg-0 me-lg-5" aria-current="page" href="https://2022.thef2e.com/news"
            target="_blank"
              >關卡資訊</a
            >
          </li>
          <li class="nav-item w-100 w-lg-auto">
            <a
              class="nav-link py-3 py-lg-0 me-lg-5"
              href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w"
              target="_blank"
              >攻略資源</a
            >
          </li>
          <li class="nav-item w-100 w-lg-auto">
            <a class="nav-link py-3 py-lg-0" href="https://2022.thef2e.com/jobs" target="_blank"
              >求職專區</a
            >
          </li>
          <li class="nav-item w-100 w-lg-auto">
            <a
              href="https://2022.thef2e.com/login"
              class="btn btn-outline-light rounded-pill ms-lg-7 px-4 p-2 w-100 w-lg-auto"
              >登入</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import CollapseMixin from '@/mixins/CollapseMixin';

export default {
  data() {
    return {
      collapse: '',
    };
  },
  mixins: [CollapseMixin],
};
</script>
