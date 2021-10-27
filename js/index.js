$(document).ready(function() {

  // sticky header
  $(window).scroll(function() {
  if ($(this).scrollTop() > 40){  
      $('header').addClass("sticky");
    }
    else{
      $('header').removeClass("sticky");
    }
  });

  // header mobile menu
  $('.toggler').on('click', function() {
    $(this).toggleClass('open');
    $('.header nav').toggleClass('open');
  });

  // scroll to
  $(document).on('click', '.scroll-to', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 110
    }, 500);
    $('.toggler').toggleClass('open');
    $('.header nav').toggleClass('open');
  });

  // dynamic links in popup
  const physicalList = {
    'sweetmed': {
      title: 'Свитмед',
      img: './assets/img/svitmed.png',
      links: {
        device: 'https://sweetmed.ru/vitrina/analizatory_krovi/biohimicheskie_analizatory/accutrend_plus/?sphrase_id=23127',
        cholesterol: 'https://sweetmed.ru/vitrina/analizatory_krovi/aksessuary_dlya_analizatorov_krovi/for_accutrend/accutrend_holesterin/?sphrase_id=23128',
        triglycerides: 'https://sweetmed.ru/vitrina/analizatory_krovi/aksessuary_dlya_analizatorov_krovi/for_accutrend/accutrend_trigliceridy/?sphrase_id=23128',
        glucose: 'https://sweetmed.ru/vitrina/analizatory_krovi/aksessuary_dlya_analizatorov_krovi/for_accutrend/accutrend_glukoza/?sphrase_id=23128',
        lactate: 'https://sweetmed.ru/vitrina/analizatory_krovi/aksessuary_dlya_analizatorov_krovi/for_accutrend/accutrend_lactat/?sphrase_id=23128',
        softclix: 'https://sweetmed.ru/vitrina/analizatory_krovi/aksessuary_dlya_analizatorov_krovi/lancets/accu_check_softclix/',
        accucheck: '',
        accuchecksfotclix: 'https://sweetmed.ru/vitrina/analizatory_krovi/aksessuary_dlya_analizatorov_krovi/lancets/accu_check_softclix_25/?sphrase_id=23130'
      }
    },
    'wellsi': {
      title: 'WellSi',
      img: './assets/img/wellsi.png',
      links: {
        device: 'https://wellsi.ru/analizator-akkutrend-plyus-accutrend-plus/',
        cholesterol: 'https://wellsi.ru/test-poloski-akkutrend-5-kholesterin-kholesterin-v-krovi/',
        triglycerides: 'https://wellsi.ru/test-poloski-akkutrend-triglitseridy-accutrend-triglycerid-25-shtuk/',
        glucose: 'https://wellsi.ru/test-poloski-akkutrend-25-glyukoza-sakhar-v-krovi/',
        lactate: 'https://wellsi.ru/test-poloski-bm-laktat-bm-lactate/',
        softclix: 'https://wellsi.ru/prokalyvatel-accu-chek-softclix-akku-chek-softkliks-/',
        accucheck: '',
        accuchecksfotclix: 'https://wellsi.ru/lantsety-accu-chek-softclix-25-akku-chek-softkliks/'
      }
    },
    'alpha-diagnostics': {
      title: 'Альфа-Диагностика',
      img: './assets/img/alpha.png',
      links: {
        device: 'https://www.alpha-diagnostics.ru/catalog/samokontrol/accutrend-plus-akkutrend-plyus/',
        cholesterol: 'https://www.alpha-diagnostics.ru/catalog/samokontrol/accutrend-cholesterol-5-strips/',
        triglycerides: '',
        glucose: 'https://www.alpha-diagnostics.ru/catalog/samokontrol/accutrend-glucose-25-strips/',
        lactate: 'https://www.alpha-diagnostics.ru/catalog/sportivnaya-meditsina/accutrend-lactat-25-strips/',
        softclix: 'https://www.alpha-diagnostics.ru/catalog/ustroystva-dlya-prokalyvaniya-paltsa/accu-chek-softclix-akkuchek-softkliks/',
        accucheck: 'https://www.alpha-diagnostics.ru/catalog/ustroystva-dlya-prokalyvaniya-paltsa/accu-chek-safe-t-pro-plus/',
        accuchecksfotclix: 'https://www.alpha-diagnostics.ru/catalog/ustroystva-dlya-prokalyvaniya-paltsa/accu-chek-softclix-lancet-25-s/'
      }
    },
    'zdravcity': {
      title: 'Здравсити',
      img: './assets/img/zdravcity.png',
      links: {
        device: 'https://zdravcity.ru/p_jekspress-analizator-biohimicheskij-portativnyj-akkutrend-pljus-s-prinadlezhnastjami-0098022.html',
        cholesterol: 'https://zdravcity.ru/p_test-poloski-i-kontrolnye-rastvory-dlja-jekspress-analizatorov-portativnyh-akkutrend-holesterin-n25-0098024.html',
        triglycerides: 'https://zdravcity.ru/p_test-poloski-i-kontrolnye-rastvory-dlja-jekspress-analizatorov-portativnyh-akkutrend-trigliceridy-n2-0098038.html',
        glucose: '',
        lactate: 'https://zdravcity.ru/p_test-poloski-i-kontrolnyj-material-dlja-biohimicheskogo-jekspress-analizatora-akkutrend-laktat-n25-0098023.html',
        softclix: 'https://zdravcity.ru/p_akku-chek-softkliks-ruchka-d-prokalyvanija-palca-0015684.html',
        accucheck: '',
        accuchecksfotclix: 'https://zdravcity.ru/p_akku-chek-softkliks-lancety-n25-0015683.html'
      }
    },
    'norma-life': {
      title: 'Norma Life',
      img: './assets/img/life.png',
      links: {
        device: 'https://norma-life.ru/katalog/analizatoryi-krovi/analizator-akkutrend-plyus-317',
        cholesterol: 'https://norma-life.ru/katalog/analizatoryi-krovi/analizator-akkutrend-plyus-317',
        triglycerides: 'https://norma-life.ru/katalog/test-poloski/test-poloski-accutrend-triglycerides-25-st--374',
        glucose: 'https://norma-life.ru/katalog/test-poloski/test-poloski-accutrend-glucose-25-st--375',
        lactate: 'https://norma-life.ru/katalog/test-poloski/test-poloski-accutrend-bm-lactate-25-st--373',
        softclix: 'https://norma-life.ru/katalog/lantsetyi-i-ruchki/accuchek-softckix',
        accucheck: 'https://norma-life.ru/katalog/lantsetyi-i-ruchki/lantsetyi-AccuChek_Safe-T-Pro-Plus',
        accuchecksfotclix: 'https://norma-life.ru/katalog/lantsetyi-i-ruchki/lantsetyi-accuchek-softckix-25-306'
      }
    }
  }

  // modals
  function appendPartnerList(type) {
    let list = '';
    for (let partner in physicalList) {
      list += `
        <a class="partner ${partner}" target='_blank' href='${physicalList[partner].links[type]}'>
          <img src='${physicalList[partner].img}' alt='${physicalList[partner].title}' />
        </a>
      `
    }
    $('.popup-order .partners-wrap').html(list);
  }

  function openPopup($this) {
    $('.popup').removeClass('active');
    $('.popup').addClass('inactive');
		let at = $this.attr("data-for");
    let modal = $(`#${at}`);
		modal.addClass("active");
		modal.removeClass("inactive");
    $("html").addClass("unscrollable");
    modal.find('.close').on('click', function() {
			closePopup(modal);
		});
    modal.find('.popup-overlay').on('click', function() {
			closePopup(modal);
		});
  }

  function closePopup(modal) {
    modal.removeClass('active');
    $("html").removeClass("unscrollable");
    setTimeout(function() {
      modal.addClass('inactive');
    }, 300);
  }

  $(".more-details").click(function () {
    appendPartnerList('device');
    openPopup($(this));
	});

  $(".test").find(".main-cta").click(function() {
    const type = $(this).closest(".test").attr("data-for");
    appendPartnerList(type);
    openPopup($(this));
  });

  // banner slider
  let slidesCount = 2;
  let currentTextSlide = $('.banner-wrapper .slide.active');
  let currentTextCount = 0;
  let currentDot = $('.slider-dots .slider-dot.active');

  function slideChange() {
    slidesCount += 1;
    
    $('.slider .slider-list')
      .css({
        'width': `calc(117vw * ${slidesCount})`,
        'transform': `translateX(calc(-117vw * ${slidesCount - 2}))`,
      })
      .append(`
        <div class="slider-item">
          <div class="circle circle-left"></div>
          <div class="circle circle-center"></div>
        </div>
      `);
    if (!currentTextCount) {
      sliderChangeHandler('next')
    } else {
      sliderChangeHandler('prev')
    }
  }

  function sliderChangeHandler(direction) {
    currentTextSlide.removeClass('active');
    currentDot.removeClass('active');
    $('.slider-dot').prop('disabled', true);
    if (direction === 'next') {
      currentDot.next().addClass('active');
    } else {
      currentDot.prev().addClass('active');
    }
    currentDot = $('.slider-dots .slider-dot.active');
    if (direction === 'next') {
      currentTextSlide.next().addClass('active');
      currentTextCount += 1;
    } else {
      currentTextSlide.prev().addClass('active');
      currentTextCount -= 1;
    }
    currentTextSlide = $('.banner-wrapper .slide.active');
    $('.slider-dot').prop('disabled', false);
  }

  let timerId = setInterval(function() {
    slideChange();
  }, 5000);
  
  $('.slider').find('.slider-dot').on('click', function() {
    clearTimeout(timerId);
    if ($(this).hasClass('active')) {
      return;
    }
    slideChange();
    timerId = setInterval(function() {
      slideChange();
    }, 5000);
  });

  // spec slider
  $('.spec-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 500,
    dots: true,
  });

  // opportunities slider
  $('.opportunity').each(function() {
    $(this).mouseover(function() {
        $(this).addClass('active');
      $('.opportunities-wrap').children('.opportunity').not('.active').addClass('inactive');
    });
    $(this).mouseleave(function() {
        $(this).removeClass('active');
        $('.opportunities-wrap').children('.opportunity').not('.active').removeClass('inactive');
    });
  });

  // animate on scroll
  AOS.init();
  
  const circles1 = $('.advantages .circle');
  circles1.removeClass('transition');

  const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        circles1.addClass('transition');
        return;
      }
    });
  });

  const circles2 = $('.feedback .circle');
  circles2.removeClass('transition');
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        circles2.addClass('transition');
        return;
      }
    });
  });

  observer1.observe(document.querySelector('.advantages'));
  observer2.observe(document.querySelector('.feedback'));

  // accordion
  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      var titles = this.el.find('.title');
      titles.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
  
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
        $this = $(this),
        $next = $this.next();
  
      $next.slideToggle();
      $this.parent().toggleClass('open');
  
      if (!e.data.multiple) {
        $el.find('.info').not($next).slideUp().parent().removeClass('open');
      };
    }	
  
    var featuresAccordion = new Accordion($('#features-accordion'), false);
    var faqAccordion = new Accordion($('#faq-accordion'), false);
  });

  // Cookies
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }

  function acceptCookieConsent() {
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    document.getElementById("cookie-notice").classList.remove('open');
  }

  const btn = document.querySelector('#cookie-notice button');
  btn.addEventListener('click', acceptCookieConsent);

  let cookieConsent = getCookie("user_cookie_consent");
  if (cookieConsent != "") {
    document.getElementById("cookie-notice").classList.remove('open');
  } else {
    document.getElementById("cookie-notice").classList.add('open');
  }
});
