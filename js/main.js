

new Swiper('.explore .swiper', {
    loop: true,

    spaceBetween: 10,

    breakpoints: {
        920: {
            slidesPerView: 4
        },
        786: {
            slidesPerView: 2
        },
        564: {
            slidesPerView: 1
        }
    },

    spaceBetween: 30,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
  
    pagination: {
      el: '.explore .swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.explore .swiper-button-next',
      prevEl: '.explore .swiper-button-prev'
    },

    
  
});



const questions = document.querySelectorAll('.question'),
answer = document.querySelectorAll('.answer'),
icon = document.querySelectorAll('.question h3 i')

questions.forEach(question => {
    question.addEventListener('click', (event)=>{
        event.preventDefault;

        answer.forEach(el => {
            el.classList.remove('active')
            icon.forEach(i => {
                    i.classList.remove('active')
            });
        });

        question.querySelector('.answer').classList.toggle('active')

        event.target.querySelector('i').classList.toggle('active')
    })
});





















