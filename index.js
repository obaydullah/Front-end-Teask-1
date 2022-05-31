$(document).ready(function () {
  $(".tabs-7").jQueryTab({
    initialTab: 2,
    tabInTransition: "fadeIn",
    tabOutTransition: "fadeOut",
    cookieName: "active-tab-7",
  });

  $(".multiple-items").slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
