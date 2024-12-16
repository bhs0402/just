const track = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const slideCount = slides.length;

// 슬라이드 이동 함수
function moveToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    updateDots(index);
    currentIndex = index;
}

// 점 상태 업데이트
function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// 이전 버튼 클릭 이벤트
prevBtn.addEventListener("click", () => {
    const newIndex = currentIndex === 0 ? slideCount - 1 : currentIndex - 1;
    moveToSlide(newIndex);
});

// 다음 버튼 클릭 이벤트
nextBtn.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % slideCount;
    moveToSlide(newIndex);
});

// 점 클릭 이벤트
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        moveToSlide(index);
    });
});

// 자동 슬라이드
setInterval(() => {
    const newIndex = (currentIndex + 1) % slideCount;
    moveToSlide(newIndex);
}, 5000); // 5초마다 슬라이드 이동
