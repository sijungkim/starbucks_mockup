const searchElement = document.querySelector(".search");
const searchInputElement = searchElement.querySelector("input");

searchElement.addEventListener("click", function () {
  //search icon을 클릭하면 css로 지정된 input.focus를 실행
  searchInputElement.focus();
});

searchInputElement.addEventListener("focus", function () {
  searchElement.classList.add("focused");
  searchInputElement.setAttribute("placeholder", "통합검색");
});

searchInputElement.addEventListener("blur", function () {
  searchElement.classList.remove("focused");
  searchInputElement.setAttribute("placeholder", "");
});

/**
 *  _.throttle(함수, 인터벌)
 * 
 *  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
    integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
**/
const badgeElement = document.querySelector("header .badges");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //배치 숨기기
      // badgeElement.style.display = 'none';
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeElement, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      //배치 보이기
      // badgeElement.style.display = 'block';
      gsap.to(badgeElement, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 1000)
);

const fadeElements = document.querySelectorAll(".visual .fade-in");

fadeElements.forEach(function (fadeElement, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeElement, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// 스와이퍼 사용법
// new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper', {
  direction: 'horizontal',
  slidesPerView: 3, //한번에 보여줄 슬라이드 수
  spaceBetween: 10, //슬라이드 간 마진
  centeredSlides: true, //1번 슬라이드 가운데
  loop: true, //연속해서 보여줌 (가운데와 마지막 슬라이드 자리 채움(루프)
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  }else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
})



