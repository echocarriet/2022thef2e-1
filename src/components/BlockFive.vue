<template>
  <div class="bg-dark py-9 py-md-11">
    <div class="container">
      <h3 class="fs-2 fs-xl-1 text-white text-center mb-5 mb-lg-8">Q&A</h3>
      <ul
        class="nav nav-pills mb-3 overflow-auto flex-nowrap overflowX-auto justify-content-between"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item white-space-nowrap" role="presentation">
          <button
            class="nav-link active fs-7"
            id="qa-tab"
            data-bs-toggle="pill"
            data-bs-target="#qa"
            type="button"
            role="tab"
            aria-controls="qa"
            aria-selected="true"
          >
            常見問題
          </button>
        </li>
        <li class="nav-item white-space-nowrap" role="presentation">
          <button
            class="nav-link fs-7"
            id="uiQa-tab"
            data-bs-toggle="pill"
            data-bs-target="#uiQa"
            type="button"
            role="tab"
            aria-controls="uiQa"
            aria-selected="false"
          >
            UI 設計師常見問題
          </button>
        </li>
        <li class="nav-item white-space-nowrap" role="presentation">
          <button
            class="nav-link fs-7"
            id="f2eQa-tab"
            data-bs-toggle="pill"
            data-bs-target="#f2eQa"
            type="button"
            role="tab"
            aria-controls="f2eQa"
            aria-selected="false"
          >
            前端工程師常見問題
          </button>
        </li>
        <li class="nav-item white-space-nowrap" role="presentation">
          <button
            class="nav-link fs-7"
            id="groupQa-tab"
            data-bs-toggle="pill"
            data-bs-target="#groupQa"
            type="button"
            role="tab"
            aria-controls="groupQa"
            aria-selected="false"
          >
            團體組常見問題
          </button>
        </li>
      </ul>
      <div class="tab-content mb-5 mb-lg-8" id="pills-tabContent">
        <section
          class="tab-pane fade show active"
          id="qa"
          role="tabpanel"
          aria-labelledby="qa-tab"
          tabindex="0"
          ref="bsTab"
        >
          <div class="row">
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q1</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？
              </h4>
              <p class="fs-7 mb-0">
                可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q2</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作業
              </h4>
              <p class="fs-7 mb-0">
                這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q3</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                我不確定自己的版型有沒有符合過關門檻，要寫到什麼程度才有過關門檻？
              </h4>
              <p class="fs-7 mb-0">
                主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q4</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">我已經寫到一半了，但時間快來不及，可以先投稿嗎？</h4>
              <p class="fs-7 mb-0">可以，有投稿表示你還會持續努力在這次活動上。</p>
            </div>
          </div>
        </section>
        <section
          class="tab-pane fade"
          id="uiQa"
          role="tabpanel"
          aria-labelledby="uiQa-tab"
          tabindex="0"
          ref="bsTab"
        >
          <div class="row">
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q1</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                到時候投稿的平台是提供什麼呢？我也不像是工程師可以有Codepen 上傳
              </h4>
              <p class="fs-7 mb-0">
                其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD
                便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q2</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web
                介面，那授權部分可以設定嗎？
              </h4>
              <p class="fs-7 mb-0">
                會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI
                作品權益。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q3</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">一定要上傳「線上標示文件」嗎？</h4>
              <p class="fs-7 mb-0">
                是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用
                Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google
                Drive)。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q4</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">不能使用 PS、Illustrator 設計嗎？</h4>
              <p class="fs-7 mb-0">
                只要您能找到 PS 或 Illustrator
                產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q5</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                當每週一題目出來後，我有一些設計進度也可以先投稿嗎？
              </h4>
              <p class="fs-7 mb-0">
                可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過
                FB 社團來溝通進度即可。
              </p>
            </div>
          </div>
        </section>
        <section
          class="tab-pane fade"
          id="f2eQa"
          role="tabpanel"
          aria-labelledby="f2eQa-tab"
          tabindex="0"
          ref="bsTab"
        >
          <div class="row">
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q1</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                我可以不依照設計稿，自己做版面嗎？因為我自己想多練習js / 後端
              </h4>
              <p class="fs-7 mb-0">
                其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD
                便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q2</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">前端介面一定要長得一模一樣嗎？</h4>
              <p class="fs-7 mb-0">不用，依照自己的想法來開發也可以</p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q3</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好</h4>
              <p class="fs-7 mb-0">
                這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS
                並非是自己習慣的 Layout 反而會更花時間。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q4</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                那我只想要練習 JS，HTML / CSS 我用陽春版，不依照設計稿開發可以嗎？
              </h4>
              <p class="fs-7 mb-0">
                只要您能找到 PS 或 Illustrator
                產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q5</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                當每週一題目出來後，我有一些設計進度也可以先投稿嗎？
              </h4>
              <p class="fs-7 mb-0">
                可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。
              </p>
            </div>
          </div>
        </section>
        <section
          class="tab-pane fade"
          id="groupQa"
          role="tabpanel"
          aria-labelledby="groupQa-tab"
          tabindex="0"
          ref="bsTab"
        >
          <div class="row">
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q1</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">請問團體組最多幾人？</h4>
              <p class="fs-7 mb-0">最多 4 人，投稿作品時請派一位組長來投稿即可。</p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q2</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">我對獎項有興趣，可以只做第三道主題就好嗎？</h4>
              <p class="fs-7 mb-0">
                可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q3</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                團體組投稿第三週 UI 最晚投稿時間為 11/21(一) 中午 12 點，前端最晚投稿期限為
                11/28(一) 中午 12 點。
              </h4>
              <p class="fs-7 mb-0">
                這段我們不會提供，畢竟每個人習慣的 Coding style 又不一樣，產出的 HTML、CSS
                並非是自己習慣的 Layout 反而會更花時間。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q4</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                我們團體組比較想做手機 APP ，可以投稿並符合並符合評審門檻嗎？
              </h4>
              <p class="fs-7 mb-0">
                您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限 Web
                瀏覽器應用開發，Android、iOS APP 則不在評審範圍內，故不符合評審門檻。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q5</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                請問除了前端開發、 UI 設計外，還能做其他加值應用嗎？例如後端動態應用整合？
              </h4>
              <p class="fs-7 mb-0">
                可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API 的任何一個
                API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部
                API 也是可以的。
              </p>
            </div>
            <div class="col-lg-2">
              <span class="fs-6 fs-lg-4 text-primary fw-bold">Q6</span>
            </div>
            <div class="tab-content-answer col-lg-10 mb-8 mb-lg-9">
              <h4 class="fs-6 fw-bold mb-3">
                團體組的 UI 設計稿，可以讓『個人組 - 前端工程師』組別採用嗎？
              </h4>
              <p class="fs-7 mb-0">不能，預設是不能讓『個人組-前端工程師』採用。</p>
            </div>
          </div>
        </section>
      </div>
      <div class="text-center">
        <a
          class="btn btn-warning rounded-pill fw-bold fs-7 fs-lg-6 px-8 py-3"
          href="https://2022.thef2e.com/login"
          target="_blank"
        >
          立即報名
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import TabMixin from '@/mixins/TabMixin';

export default {
  mixins: [TabMixin],
};
</script>
<style lang="scss" scoped>
.white-space-nowrap {
  white-space: nowrap;
}
.overflowX-auto {
  overflow-x: auto;
}
.nav-pills .nav-link {
  color: #858993;
  border-bottom: 4px solid transparent;
  position: relative;
  &.active,
  .nav-pills .show > .nav-link {
    background-color: transparent;
  }
  &.active::after,
  .nav-pills .show > .nav-link {
    position: absolute;
    content: '';
    width: 12px;
    height: 4px;
    background-color: #55ffad;
    bottom: -3px;
    left: 45%;
  }
  &:hover::after {
    position: absolute;
    content: '';
    width: 12px;
    height: 4px;
    background-color: #55ffad;
    bottom: -3px;
    left: 45%;
  }
}
.tab-content {
  padding: 16px 24px;
  border-radius: 32px;
  background-color: #fff;
  color: #06102b;

  &-answer {
    font-family: 'Noto Sans TC', sans-serif;
  }
}

@media (min-width: 992px) {
  .tab-content {
    padding: 80px;
  }
}
</style>
