<template>
  <div class="bg-SponSORS py-8 py-sm-9 text-center text-white">
    <div class="container">
      <h3 class="SponSORSTitle fs-5 mb-6 mb-sm-8">
        SponSORS <span class="d-block mt-2">鑽石級贊助商</span>
        <img
          class="SponSORSTitle-starL"
          src="@/assets/stylesheets/images/SponSORS_starL.png"
          alt="標題左邊星星圖"
        />
        <img
          class="SponSORSTitle-starR"
          src="@/assets/stylesheets/images/SponSORS_starR.png"
          alt="標題右邊星星圖"
        />
      </h3>
      <div class="row justify-content-center">
        <div class="col-sm-4 col-lg-3 mb-4 mb-sm-0">
          <a class="SponSORS-brand" href="https://blockstudio.tw/" target="_blank">
            <img class="mx-auto" src="@/assets/stylesheets/images/SponSORS_01.png" alt="板塊設計" />
          </a>
        </div>
        <div class="col-sm-4 col-lg-3 mb-4 mb-sm-0">
          <a class="SponSORS-brand" href="https://www.kdanmobile.com/zh-tw" target="_blank">
            <img
              class="mx-auto"
              src="@/assets/stylesheets/images/SponSORS_02.png"
              alt="凱鈿行動科技"
            />
          </a>
        </div>
        <div class="col-sm-4 col-lg-3">
          <a class="SponSORS-brand" href="https://titansoft.com/tw" target="_blank">
            <img
              class="mx-auto"
              src="@/assets/stylesheets/images/SponSORS_03.png"
              alt="新加坡商鈦坦科技"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg-SponSORS {
  background-color: #151f3f;
}
.SponSORS {
  &Title {
    position: relative;
    &-starR {
      position: absolute;
      top: -23px;
      right: 30px;
    }
    &-starL {
      position: absolute;
      bottom: 17px;
      left: 18px;
    }
  }

  &-brand > img {
    padding: 5px;
    border-radius: 32px;
    &:hover {
      background-image: linear-gradient(to bottom right, #9da4ff 0%, #55ffad 100%);
    }
  }
}
@media (min-width: 576px) {
  .SponSORSTitle {
    &-starR {
      right: 110px;
    }
    &-starL {
      left: 98px;
    }
  }
}

@media (min-width: 768px) {
  .SponSORSTitle {
    &-starR {
      right: 200px;
    }
    &-starL {
      left: 180px;
    }
  }
}
@media (min-width: 992px) {
  .SponSORSTitle {
    &-starR {
      right: 316px;
    }
    &-starL {
      left: 300px;
    }
  }
}
@media (min-width: 1200px) {
  .SponSORSTitle {
    &-starR {
      right: 400px;
    }
    &-starL {
      left: 380px;
    }
  }
}
@media (min-width: 1400px) {
  .SponSORSTitle {
    &-starR {
      right: 500px;
    }
    &-starL {
      left: 480px;
    }
  }
}
</style>
