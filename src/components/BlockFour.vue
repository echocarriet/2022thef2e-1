<template>
  <div class="bg-dark py-9 py-md-11">
    <div class="container text-center gsapThreeThemes-section">
      <h2 class="threeThemes-title fs-4 fs-xl-1 mb-6 mb-sm-8 position-relative">
        <span class="d-none d-sm-block">年度最強合作 三大主題來襲</span>
        <span class="d-block d-sm-none mb-2 mb-sm-0">年度最強合作</span>
        <span class="d-block d-sm-none">三大主題來襲</span>
        <img
          class="threeThemes-lightning"
          src="@/assets/stylesheets/images/threeThemes_lightning.png"
          alt="閃電圖"
        />
      </h2>
      <p class="text-white fs-7 fs-sm-6 mb-8 threeThemes-text">
        <span class="d-block">各路廠商強強聯手</span>
        <span class="d-block d-sm-inline-block">共同設計出接地氣的</span>
        <span>網頁互動挑戰關卡</span>
      </p>
      <!-- clipCard -->
      <div class="row">
        <div class="col-lg-4 mb-6 mb-lg-0 d-flex justify-content-center">
          <div class="threeThemes-cardGroup">
            <div class="threeThemes-cardBack">
              <span class="threeThemes-cardBack-tag"># 板塊設計</span>
              <h5 class="threeThemes-cardBack-title">The F2E 活動網站設計</h5>
              <p class="threeThemes-cardBack-text">視覺滾動</p>
              <div class="threeThemes-cardBack-pic">
                <img
                  class="threeThemes-cardBack-pic"
                  src="../assets/stylesheets/images/threeThemes_border.png"
                  alt="視差滾動圖片"
                />
              </div>
              <div class="threeThemes-cardBack-footer">
                <p>WEEK 1</p>
                <a class="text-decoration-none"
                href="https://2022.thef2e.com/news/week1" target="_blank"
                  >查看關卡細節 <i class="bi bi-arrow-up-right"></i
                ></a>
              </div>
            </div>
            <div class="threeThemes-cardFront">
              <h5 class="threeThemes-cardFront-title text-white fs-md-6">WEEK 1</h5>
              <img src="@/assets/stylesheets/images/threeThemes_Lock.png" alt="鎖頭圖" />
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-6 mb-lg-0 d-flex justify-content-center">
          <div class="threeThemes-cardGroup">
            <div class="threeThemes-cardBack">
              <span class="threeThemes-cardBack-tag"># 凱鈿行動科技</span>
              <h5 class="threeThemes-cardBack-title">今晚，我想來點點簽</h5>
              <p class="threeThemes-cardBack-text">CANVAS</p>
              <div class="threeThemes-cardBack-pic">
                <img
                  class="threeThemes-cardBack-pic"
                  src="../assets/stylesheets/images/threeThemes_canvas.png"
                  alt="今晚，我想來點點簽圖片"
                />
              </div>
              <div class="threeThemes-cardBack-footer">
                <p>WEEK 2</p>
                <a class="text-decoration-none"
                href="https://2022.thef2e.com/news/week2" target="_blank"
                  >查看關卡細節 <i class="bi bi-arrow-up-right"></i
                ></a>
              </div>
            </div>
            <div class="threeThemes-cardFront">
              <h5 class="threeThemes-cardFront-title text-white fs-md-6">WEEK 2</h5>
              <img src="@/assets/stylesheets/images/threeThemes_Lock.png" alt="鎖頭圖" />
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-6 d-flex justify-content-center">
          <div class="threeThemes-cardGroup">
            <div class="threeThemes-cardBack">
              <span class="threeThemes-cardBack-tag"># 鈦坦科技</span>
              <h5 class="threeThemes-cardBack-title">Scrum 新手村</h5>
              <p class="threeThemes-cardBack-text">JS Draggable</p>
              <div class="threeThemes-cardBack-pic">
                <img
                  src="../assets/stylesheets/images/threeThemes_draggable.png"
                  alt="Scrum 新手村圖片"
                />
              </div>
              <div class="threeThemes-cardBack-footer">
                <p>WEEK 3</p>
                <a class="text-decoration-none"
                href="https://2022.thef2e.com/news/week3" target="_blank"
                  >查看關卡細節 <i class="bi bi-arrow-up-right"></i
                ></a>
              </div>
            </div>
            <div class="threeThemes-cardFront">
              <h5 class="threeThemes-cardFront-title text-white fs-md-6">WEEK 3</h5>
              <img src="@/assets/stylesheets/images/threeThemes_Lock.png" alt="鎖頭圖" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 活動說明 -->
  <div class="bg-activityTheme text-white py-8 py-md-9">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mb-5 mb-sm-10">
        <img src="@/assets/stylesheets/images/activity_titleS.png" alt="活動說明圖是頭" />
        <h3 class="activityTheme-title fs-4 fs-md-2 fs-xxl-1 text-center px-3 px-md-5 mb-0">
          活動說明
        </h3>
        <img src="@/assets/stylesheets/images/activity_titleE.png" alt="活動說明圖是尾" />
      </div>
      <ul
        class="d-flex flex-column flex-xl-row flex-wrap align-items-center
        align-items-xl-stretch justify-content-between list-unstyled"
      >
        <li class="activityTheme-card order-1">
          <div class="row align-items-center">
            <div class="col-md-4 mb-4 mb-md-0">
              <img
                class="m-auto"
                src="@/assets/stylesheets/images/activity_01.png"
                alt="開放報名icon"
              />
            </div>
            <div class="col-md-8 text-center text-md-start">
              <h4 class="mb-3 fs-6 fs-md-4">開放報名</h4>
              <p class="activityTheme-card-text mb-2">10/13 <span>(四) 早上 11:00</span></p>
              <span class="d-block w-100 w-md-50 w-xl-100 text-center mb-2">|</span>
              <p class="activityTheme-card-text mb-3">10/30 <span>(日) 晚上 23:59</span></p>
              <p class="activityTheme-card-text text-white mb-0">截止前可修改報名組別</p>
            </div>
          </div>
        </li>
        <li class="align-self-center order-2">
          <img
            class="d-none d-xl-block"
            src="@/assets/stylesheets/images/activity_arrowR.png"
            alt="箭頭右"
          />
          <img
            class="d-block d-xl-none py-4 py-md-8"
            src="@/assets/stylesheets/images/activity_arrowB.png"
            alt="箭頭下"
          />
        </li>
        <li class="activityTheme-card order-3">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-md-4 mb-4 mb-md-0">
              <img
                class="m-auto"
                src="@/assets/stylesheets/images/activity_02.png"
                alt="各組別開賽icon"
              />
            </div>
            <div class="col-md-8 text-center text-md-start">
              <h4 class="mb-3 fs-6 fs-md-4">各組別開賽</h4>
              <p class="activityTheme-card-text mb-2">10/31 <span>UI組、團體組開賽 </span></p>
              <p class="activityTheme-card-text mb-3">11/07 <span>前端組開賽</span></p>
              <p class="activityTheme-card-text text-white mb-0 d-none d-lg-block">
                前端工程師可採用<br />
                UI 設計師的設計稿產出完<br />整作品
              </p>
              <p class="activityTheme-card-text text-white mb-0 d-block d-lg-none">
                前端工程師可採用<br />
                UI 設計師的設計稿產出完整作品
              </p>
            </div>
          </div>
        </li>
        <li class="activityTheme-card-arrow w-100 py-8 order-4">
          <div class="activityTheme-card-arrowBody">
            <img
              class="mx-auto"
              src="@/assets/stylesheets/images/activity_arrowB.png"
              alt="箭頭下"
            />
          </div>
        </li>
        <li class="activityTheme-card order-5 order-xl-last">
          <div class="row align-items-center">
            <div class="col-md-4 mb-4 mb-md-0">
              <img
                class="m-auto"
                src="@/assets/stylesheets/images/activity_03.png"
                alt="登入作品icon"
              />
            </div>
            <div class="col-md-8 text-center text-md-start">
              <h4 class="mb-3 fs-6 fs-md-4">登入作品</h4>
              <p class="activityTheme-card-text mb-2">10/31 <span>(一) 中午 12:00 </span></p>
              <span class="d-block w-100 w-md-50 w-xl-100 text-center mb-2">|</span>
              <p class="activityTheme-card-text mb-3">11/28 <span>(一) 中午 12:00 </span></p>
              <p class="activityTheme-card-text text-white mb-0">依賽程登錄作品</p>
            </div>
          </div>
        </li>
        <li class="align-self-center order-6">
          <img
            class="d-none d-xl-block"
            src="@/assets/stylesheets/images/activity_arrowL.png"
            alt="箭頭左"
          />
          <img
            class="d-block d-xl-none py-4 py-md-8"
            src="@/assets/stylesheets/images/activity_arrowB.png"
            alt="箭頭下"
          />
        </li>
        <li class="activityTheme-card order-last order-xl-5">
          <div class="row align-items-center flex-row-reverse h-100">
            <div class="col-md-4 mb-4 mb-md-0">
              <img
                class="m-auto"
                src="@/assets/stylesheets/images/activity_04.png"
                alt="線上直播icon"
              />
            </div>
            <div class="col-md-8 text-center text-md-start">
              <h4 class="mb-3 fs-6 fs-md-4">線上直播</h4>
              <p class="activityTheme-card-text mb-2">11/03 - 11/24 <span>每週四 </span></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- 區區修練區塊 -->
  <div class="bg-dark text-white py-9 px-md-10 gsapGame-section">
    <div class="container">
      <h3 class="d-none d-xl-block text-center mb-5 mb-md-8 gsapGame-title">
        <span class="gsapGame-titleFirst">區區修煉已經無法滿足了嗎？</span>
        <span class="gsapGame-titleSecond">還有比賽等著你！</span>
      </h3>
      <h3 class="text-center mb-5 mb-md-8 d-block d-xl-none gsapGame-title">
        <span class="gsapGame-titleFirst">區區修煉已經無法滿足了嗎？</span>
        <span class="d-block gsapGame-titleSecond">還有比賽等著你！</span>
      </h3>
      <div class="gsapGame-carSection">
        <img class="gsapGame-carSectionFlag mb-3"
        src="@/assets/stylesheets/images/threeThemes_flag.png" alt="修煉區旗幟">
        <img class="gsapGame-carSectionCar"
        src="@/assets/stylesheets/images/threeThemes_car.png" alt="修煉區汽車">
        <div class="gsapGame-carSectionFloor"></div>
      </div>
      <div class="gameTheme text-white row">
        <div class="col-xl-6 mb-8 mb-xl-0">
          <div class="gameTheme-card h-xl-100">
            <div class="gameTheme-card-header">
              <img
                class="m-auto mb-2"
                src="@/assets/stylesheets/images/gameTheme_01.png"
                alt="評審機制icon"
              />
              <h4 class="fs-4 fs-sm-2 text-primary text-center">評審機制</h4>
            </div>
            <div class="gameTheme-card-content">
              <h5 class="fs-6 fw-bold">初選：</h5>
              <p class="fs-7 mb-5">將由六角學院前端、UI 評審進行第一波篩選。</p>
              <h5 class="fs-6 fw-bold">決選：</h5>
              <p class="fs-7 mb-5">
                由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="gameTheme-card h-xl-100">
            <div class="gameTheme-card-header">
              <img
                class="m-auto mb-2"
                src="@/assets/stylesheets/images/gameTheme_02.png"
                alt="獎金icon"
              />
              <h4 class="fs-4 fs-sm-2 text-primary text-center">獎金</h4>
            </div>
            <div class="gameTheme-card-content">
              <h5 class="fs-6 fw-bold">
                初選佳作： <span class="fw-normal">共六十位</span>
                <span class="fw-normal text-success"> 數位獎狀</span>
              </h5>
              <p class="text-darkLight fs-7 mb-5">每週主題個人組十位、團體組十組</p>
              <h5 class="fs-6 fw-bold">
                個人企業獎：<span class="fw-normal">共六位</span>
                <span class="fw-normal text-success"> NTD 3,000/位</span>
              </h5>
              <p class="text-darkLight fs-7 mb-5">每週主題各兩名，設計一位、前端 一位</p>
              <h5 class="fs-6 fw-bold">
                團體企業獎：<span class="fw-normal">共三位</span>
                <span class="fw-normal text-success"> NTD 10,000/組</span>
              </h5>
              <p class="text-darkLight fs-7 mb-5">每週主題各 1 組</p>
              <h5 class="fs-6 fw-bold">以上皆提供完賽數位獎狀</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gsapThreeThemesTitle() {
      const tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.gsapThreeThemes-section',
          toggleActions: 'play pause resume reset',
        },
      });
      tl.fromTo(
        '.threeThemes-title',
        {
          autoAlpha: 0,
          y: -30,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 2,
        },
      )
        .fromTo(
          '.threeThemes-lightning',
          {
            autoAlpha: 0,
            y: -30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 2,
          },
          '<',
        )
        .fromTo(
          '.threeThemes-text',
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 2,
          },
          '<',
        );
    },
    // flip card
    gsapFlipCards() {
      const tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.gsapThreeThemes-section',
          toggleActions: 'play pause resume reset',
        },
      });
      tl.to('.threeThemes-cardGroup', { rotationY: 180, stagger: 1.5 });
    },
    // 區區修練
    gsapGame() {
      const tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: '.gsapGame-section',
          toggleActions: 'play pause resume reset',
        },
      });
      // 標題與卡片由下至上出現,比賽文字出現 → 賽車跑向賽旗
      tl.fromTo(
        '.gsapGame-title',
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1, y: 0, duration: 2, ease: 'power4.out',
        },
      )
        .fromTo(
          '.gameTheme-card',
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1, y: 0, duration: 2, ease: 'power4.out',
          },
          '<',
        )
        .to(
          '.gsapGame-titleSecond',
          { opacity: 1, duration: 1.5 },
        )
        .to(
          '.gsapGame-carSectionCar',
          { left: 50 },
        )
        .to(
          '.gsapGame-carSectionFlag',
          { rotate: '-40deg' },
        );
    },
  },
  mounted() {
    this.gsapThreeThemesTitle();
    this.gsapFlipCards();
    this.gsapGame();
  },
};
</script>
<style lang="scss" scoped>
.bg-activityTheme {
  background-color: #0e1835;
}
.text-darkLight {
  color: #858993;
}
.gsapGame {
  &-titleSecond {
    opacity: 0;
  }
  &-carSection {
    position: relative;
    margin: 60px 0;
    &Car {
      position: absolute;
      bottom: 0;
      right: 0;
    }
    &Floor {
      background-color: #fff;
      height: 3px;
      width: 100%;
    }
  }
}
</style>
