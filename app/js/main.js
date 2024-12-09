/* Consult form ============================================================== */
$(function () {
  $('.popup-consult form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $form.addClass('thanks');
        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

/* Brochure form */
$(function () {
  $('.popup-brochure form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $form.addClass('thanks');
        window.location.href = "https://cdn.metropolitan.realestate/brochures/Ocean%20House%20Hero-Book.pdf";
        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

/* Floor form */
$(function () {
  $('.popup-floor form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $form.addClass('thanks');
        window.location.href = "https://cdn.metropolitan.realestate/brochures/Ocean%20house%20Floorplans.pdf";
        $form.removeClass('sending');
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

/* Sign up form ====================================================================== */
$(function () {
  $('.sign-up form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $('.form__succsess').css('display', 'flex');
        $form.removeClass('sending');
        setTimeout(() => {
          $('.form__succsess').css('display', 'none');
        }, 5000);
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

/* Footer form ====================================================================== */
$(function () {
  $('.footer__form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(this);
    $form.addClass('sending');
    var data = new FormData($form[0]);

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data: data,
      contentType: false,
      processData: false,
      success: (function (data) {
        $('.form__succsess').css('display', 'flex');
        $form.removeClass('sending');
        setTimeout(() => {
          $('.form__succsess').css('display', 'none');
        }, 5000);
        dataLayer.push({
          event: 'userEvent',
          eventCategory: 'conversions',
          eventAction: 'formSubmit',
          eventLabel: 'allLeads',
          eventNonInteraction: false,
          firingOptions: 'oncePerEvent'
        });
      }),
      error: (function () {
        alert('Oops... There was an error');
      })
    })
  });
});

// Invalid input
function invalidInput() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    const popupFormInputs = form.querySelectorAll('input');
    const popupFormBtn = form.querySelector('button[type="submit"]');

    popupFormBtn.addEventListener('click', () => {
      popupFormInputs.forEach(footerInput => {
        if (!footerInput.value && !footerInput.checked) {
          footerInput.classList.add('invalid-input')
        } else {
          footerInput.classList.remove('invalid-input');
        }
      })
    });

    popupFormInputs.forEach(input => {
      input.addEventListener('change', () => {
        if (!input.value) {
          input.classList.remove('input-valid');
        } else {
          input.classList.add('input-valid');
        }
      })
    })
  })
}

invalidInput();


function floorSlider() {
  const floorInfo = document.querySelectorAll('.floor__left-info'),
      floorImages = document.querySelectorAll('.floor__images-item'),
      floorArrowPrev = document.querySelector('.floor__arrow-prev'),
      floorArrowNext = document.querySelector('.floor__arrow-next');
  let currentSlide = 0;

  floorArrowPrev.addEventListener('click', () => {
    if (currentSlide === 0) {
      currentSlide = floorInfo.length - 1;
    } else {
      currentSlide = currentSlide - 1;
    }
    renderSlides();
  })

  floorArrowNext.addEventListener('click', () => {
    if (currentSlide === floorInfo.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide = currentSlide + 1;
    }
    renderSlides();
  })

  /* Add "active" class to current content block */
  function renderSlides() {
    floorInfo.forEach(info => {
      info.classList.contains('active') && info.classList.remove('active');
    })
    floorInfo[currentSlide].classList.add('active');

    floorImages.forEach(img => {
      img.classList.contains('active') && img.classList.remove('active');
    })
    floorImages[currentSlide].classList.add('active');
  }

  renderSlides();
}

floorSlider();


/* Move element on scroll ======================== */
gsap.registerPlugin(ScrollTrigger);

const scrollAnimation = document.querySelectorAll('.scroll-animation');
const innerWidthDoc = innerWidth;

scrollAnimation.forEach(item => {
  const animLeft1 = document.querySelector('.anim-left-1'),
      animLeft2 = document.querySelector('.anim-left-2');

  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: animLeft1,
      // markers: true,
      start: 'top 90%',
      end: 'bottom 60%',
      scrub: 0,
    }
  });

  if (innerWidthDoc > 770) {
    t1.to(animLeft1, {x: '-80%'});
    t1.to(animLeft2, {x: '-170%'});
  } else if (innerWidthDoc > 562) {
    t1.to(animLeft1, {x: '-80%'});
    t1.to(animLeft2, {x: '-170%'});
  } else if (innerWidthDoc > 1) {
    t1.to(animLeft1, {x: '80%'});
    t1.to(animLeft2, {x: '170%'});
  }
})

scrollAnimation.forEach(item => {
  const animLeft3 = document.querySelector('.anim-left-3'),
      animLeft4 = document.querySelector('.anim-left-4');

  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: animLeft3,
      // markers: true,
      start: 'top 90%',
      end: 'bottom 60%',
      scrub: 0,
    }
  });

  if (innerWidthDoc > 770) {
    t2.to(animLeft3, {x: '80%'});
    t2.to(animLeft4, {x: '170%'});
  } else if (innerWidthDoc > 560) {
    t2.to(animLeft3, {x: '-80%'});
    t2.to(animLeft4, {x: '-170%'});
  } else if (innerWidthDoc > 1) {
    t2.to(animLeft3, {x: '80%'});
    t2.to(animLeft4, {x: '170%'});
  }
})


// Popup video
function videoPopup() {
  const body = document.querySelector('body');
  const videoPopup = document.querySelector('.video__overlay');
  const videoPopupClose = document.querySelector('.video__overlay-close');
  const openVideoPopup = document.querySelector('.video-button');
  const video = document.querySelector('.video');

  openVideoPopup.addEventListener('click', () => {
    videoPopup.classList.add('active');
    body.style.overflowY = 'hidden';

    video.innerHTML = `
    <video class="t1013__iframe" id="html5video527987055" width="100%" height="100%" controls="">
      <source src="https://cdn.metropolitan.realestate/Ocean-House-Video.mp4" type="video/mp4">Your browser does not support the video tag
    </video>
    `;
  })

  videoPopup.addEventListener('click', (e) => {
    if (e.target == videoPopup || e.target == videoPopupClose) {
      videoPopup.classList.remove('active');
      body.style.overflowY = 'auto';

      video.innerHTML = ``;
    }
  })
};
videoPopup();


/* Open and Close Popup */
function openPopups() {
  const popups = document.querySelectorAll('.popup');
  const popupClose = document.querySelectorAll('.popup-close');
  const popupBtn = document.querySelectorAll('.popup-button');

  popupBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      popups.forEach(popup => {
        if (btn.dataset.popup == popup.dataset.popup) {
          popup.classList.add('active');
          document.body.classList.add('active');
        }
      })
    })
  })

  popupClose.forEach(closeItem => {
    closeItem.addEventListener('click', e => {
      popups.forEach(popup => {
        popup.classList.remove('active');
        document.body.classList.remove('active');
      })
    })
  })
}

openPopups();

/* Limit number and email */
const limitNumber = e => {
  const value = e.value;
  e.value = value.replace(/[A-Za-zА-Яа-яЁё]/g, '');
}

const limitEmail = e => {
  const value = e.value;
  e.value = value.replace(/[А-Яа-яЁё]/g, '');
}

/* Form succsess =============================== */
const formSuccsess = document.querySelector('.form__succsess');
document.querySelector('.form__succsess-close').addEventListener('click', () => {
  formSuccsess.style.display = 'none';
})

/* For All Sites ================================== */
$(document).ready(function () {
  let userPower = {};
  $(document).on('input', 'input', function () {
    let name = $(this).attr('name');
    if (typeof userPower[name] !== "undefined") {
      userPower[name] = userPower[name] + 1;
    } else {
      userPower[name] = 1;
    }
  }).on('focus', 'input', function () {
    if (typeof userPower['focus'] !== "undefined") {
      userPower['focus'] = userPower['focus'] + 1;
    } else {
      userPower['focus'] = 1;
    }
  }).on('click', 'button, a', function () {
    if (typeof userPower['click'] !== "undefined") {
      userPower['click'] = userPower['click'] + 1;
    } else {
      userPower['click'] = 1;
    }
  });
  $('form').submit(function () {
    userPoints(userPower);
  });
});

function userPoints(userPower) {
  let user_ses = 0,
      input_score = 0;
  user_ses = user_ses + (Object.keys(userPower).length / 10);

  if (typeof userPower['focus'] !== "undefined" && userPower['focus'] >= (Object.keys(userPower).length - 2)) {
    user_ses = user_ses + 0.2;
  }
  if (typeof userPower['click'] !== "undefined") {
    user_ses = user_ses + 0.1;
  }
  for (const [key, value] of Object.entries(userPower)) {
    if (key != 'focus' && key != 'click') {
      input_score = input_score + value;
    }
  }
  if (typeof userPower['focus'] !== "undefined" && input_score >= (Object.keys(userPower).length - 2)) {
    user_ses = user_ses + 0.2;
  }
  saveCookie('user_score', user_ses);

  return user_ses;
}

function saveCookie(n, v, t = 30) {
  let saveDate = new Date(Date.now() + (60 * 60 * 24 * t * 1000));
  document.cookie = n + "=" + v + "; path=/; expires=" + saveDate.toGMTString();
}

function readCookie(name) {
  let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}