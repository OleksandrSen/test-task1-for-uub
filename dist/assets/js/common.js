document.addEventListener("DOMContentLoaded", function() {
  let swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
      navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
      },
  });

  let img = document.querySelectorAll('.item');
  
  img.forEach((el) => {
      el.addEventListener('click', openBtnFunc);
      function openBtnFunc () {
          popup.classList.remove('hide');
          popup.classList.add('show');
          swiper.update()
      }
  })
  
  let btnClose = document.querySelector('.popup-xsense__btn-close');

  // let windowClose = document.querySelector('.popup-xsense__bg');
  let popup = document.querySelector('.popup-xsense');
  // windowClose.addEventListener('click', closeBtnFunc);
  btnClose.addEventListener('click', closeBtnFunc);
  function closeBtnFunc () {
      popup.classList.remove('show');
      popup.classList.add('hide');
  }
});

//

let accordionNew = new Accordion({
  accordionContainer: '.power-supply-block__wrapper',
  accordionElement: '.power-supply-block__content',
  accordionTrigger: '.title',
  contentContainer: '.accordion-cont',
  contentBlock: '.accordion-block',
  activeClass: 'active',
  switch: '.power-supply-block__button'
});

//

function Accordion(options) {

  document.addEventListener("DOMContentLoaded", () => {

    let accordionContainer = document.querySelector(options.accordionContainer)

    let accordionElements = accordionContainer.querySelectorAll(options.accordionElement)

    let contentContainer = document.querySelector(options.accordionElement)

    let contentElement = document.querySelector(options.accordionElement)

    let switcher = document.querySelector(options.switch)

    if (options.accordionContainer) {

      accordionElements.forEach(elem => {

        let trigger = elem.querySelector(options.accordionTrigger)

        let contentBlock = elem.querySelector(options.contentContainer)

        let contentHeight = elem.querySelector(options.contentBlock).offsetHeight

        trigger.addEventListener('click', classControl)

        function classControl() {
          if (elem.classList.contains(options.activeClass)) {
            elem.classList.toggle(options.activeClass)
            contentBlock.style.maxHeight = 0
          } else {
            elem.classList.add(options.activeClass)
            contentBlock.style.maxHeight = contentHeight + 'px'
          }
        }

        function init() {
          if (elem.classList.contains(options.activeClass)) {
            contentBlock.style.maxHeight = contentHeight + 'px'
          }
        }

        init()

      })

    }

    if (options.switch && switcher != null) {

      let state = true

      switcher.addEventListener('click', () => {

        if (state) {

          accordionElements.forEach(elem => {

            let contentBlock = elem.querySelector(options.contentContainer)
            let contentHeight = elem.querySelector(options.contentBlock).offsetHeight

            elem.classList.add(options.activeClass)
            contentBlock.style.maxHeight = contentHeight + 'px'

          })

          state = false
          switcher.innerHTML = 'Згорнути всі'
        } else {

          accordionElements.forEach(elem => {

            let contentBlock = elem.querySelector(options.contentContainer)
            let contentHeight = elem.querySelector(options.contentBlock).offsetHeight

            elem.classList.remove(options.activeClass)
            contentBlock.style.maxHeight = 0 + 'px'
          })
          state = true
          switcher.innerHTML = 'Розгорнути всі'
        }
      })
    }
  });
}
