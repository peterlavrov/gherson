// инициализация слайдера

$(
  function() {
    $('.slider-slides__list').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    })
  }

)

// работа с селектом

$('.select').each(function() {
  const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450; // длительность анимации 

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $('<div>', {
      class: 'new-select',
      text: _this.children('option:disabled').text()
  }).insertAfter(_this);

  const selectHead = _this.next('.new-select');
  $('<div>', {
      class: 'new-select__list'
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.new-select__list');
  for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
          class: 'new-select__item',
          html: $('<span>', {
              text: selectOption.eq(i).text()
          })
      })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.new-select__item');
  selectList.slideUp(0);
  selectHead.on('click', function() {
      if ( !$(this).hasClass('on') ) {
          $(this).addClass('on');
          selectList.slideDown(duration);

          selectItem.on('click', function() {
              let chooseItem = $(this).data('value');

              $('select').val(chooseItem).attr('selected', 'selected');
              selectHead.text( $(this).find('span').text() );

              selectList.slideUp(duration);
              selectHead.removeClass('on');
          });

      } else {
          $(this).removeClass('on');
          selectList.slideUp(duration);
      }
  });
});

// работа со слайдером в секции team 


const teamSlides = $('.team-member');
const teamControls = $('.team-control');
let currentSlide = -1;

teamControls.on('click', e => {
  e.preventDefault();
  currentSlide = $(e.currentTarget).index();
  teamControls.removeClass('team-control--active');
  $(e.currentTarget).addClass('team-control--active');
  teamSlides.removeClass('team-member--active');
  teamSlides.eq(currentSlide).addClass('team-member--active');
});

teamSlides.on('mouseenter', e => {
    currentSlide = $(e.currentTarget).index();
    teamSlides.removeClass('team-member--active');
    $(e.currentTarget).addClass('team-member--active');
    teamControls.removeClass('team-control--active');
    teamControls.eq(currentSlide).addClass('team-control--active');
  });
