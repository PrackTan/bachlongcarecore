$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height);
  $(".fitscreen").css("height", fitscreen);

  //------- Active Nice Select --------//

  $("select").niceSelect();

  $(".navbar-nav li.dropdown").hover(
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeIn(500);
    },
    function () {
      $(this).find(".dropdown-menu").stop(true, true).delay(200).fadeOut(500);
    }
  );

  $(".img-pop-up").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $("#search_input_box").slideUp(500);
  });

  /*==========================
		javaScript for sticky header
		============================*/
  $(".sticky-header").sticky();

  /*=================================
    Javascript for banner area carousel
    ==================================*/
  $(".active-banner-slider").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    navText: [
      "<img src='img/banner/prev.png'>",
      "<img src='img/banner/next.png'>",
    ],
    dots: false,
  });

  /*=================================
    Javascript for product area carousel
    ==================================*/
  $(".active-product-area").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    navText: [
      "<img src='img/product/prev.png'>",
      "<img src='img/product/next.png'>",
    ],
    dots: false,
  });

  /*=================================
    Javascript for single product area carousel
    ==================================*/
  $(".s_Product_carousel").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: false,
    dots: true,
  });

  /*=================================
    Javascript for exclusive area carousel
    ==================================*/
  $(".active-exclusive-product-slider").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    navText: [
      "<img src='img/product/prev.png'>",
      "<img src='img/product/next.png'>",
    ],
    dots: false,
  });

  //--------- Accordion Icon Change ---------//

  $(".collapse")
    .on("shown.bs.collapse", function () {
      $(this)
        .parent()
        .find(".lnr-arrow-right")
        .removeClass("lnr-arrow-right")
        .addClass("lnr-arrow-left");
    })
    .on("hidden.bs.collapse", function () {
      $(this)
        .parent()
        .find(".lnr-arrow-left")
        .removeClass("lnr-arrow-left")
        .addClass("lnr-arrow-right");
    });

  // Select all links with hashes
  $('.main-menubar a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 70,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // -------   Mail Send ajax

  $(document).ready(function () {
    var form = $("#booking"); // contact form
    var submit = $(".submit-btn"); // submit button
    var alert = $(".alert-msg"); // alert div for show alert message

    // form submit event
    form.on("submit", function (e) {
      e.preventDefault(); // prevent default form submit

      $.ajax({
        url: "booking.php", // form action url
        type: "POST", // form submit method get/post
        dataType: "html", // request type html/json/xml
        data: form.serialize(), // serialize form data
        beforeSend: function () {
          alert.fadeOut();
          submit.html("Sending...."); // change submit button text
        },
        success: function (data) {
          alert.html(data).fadeIn(); // fade in response data
          form.trigger("reset"); // reset form
          submit.attr("style", "display: none !important"); // reset submit button text
        },
        error: function (e) {
          console.log(e);
        },
      });
    });
  });

  $(document).ready(function () {
    $("#mc_embed_signup").find("form").ajaxChimp();
  });

  // if (document.getElementById("js-countdown")) {
  //   var countdown = new Date("October 17, 2018");

  //   function getRemainingTime(endtime) {
  //     var milliseconds = Date.parse(endtime) - Date.parse(new Date());
  //     var seconds = Math.floor((milliseconds / 1000) % 60);
  //     var minutes = Math.floor((milliseconds / 1000 / 60) % 60);
  //     var hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  //     var days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

  //     return {
  //       total: milliseconds,
  //       seconds: seconds,
  //       minutes: minutes,
  //       hours: hours,
  //       days: days,
  //     };
  //   }

  //   function initClock(id, endtime) {
  //     var counter = document.getElementById(id);
  //     var daysItem = counter.querySelector(".js-countdown-days");
  //     var hoursItem = counter.querySelector(".js-countdown-hours");
  //     var minutesItem = counter.querySelector(".js-countdown-minutes");
  //     var secondsItem = counter.querySelector(".js-countdown-seconds");

  //     function updateClock() {
  //       var time = getRemainingTime(endtime);

  //       daysItem.innerHTML = time.days;
  //       hoursItem.innerHTML = ("0" + time.hours).slice(-2);
  //       minutesItem.innerHTML = ("0" + time.minutes).slice(-2);
  //       secondsItem.innerHTML = ("0" + time.seconds).slice(-2);

  //       if (time.total <= 0) {
  //         clearInterval(timeinterval);
  //       }
  //     }

  //     updateClock();
  //     var timeinterval = setInterval(updateClock, 1000);
  //   }

  //   initClock("js-countdown", countdown);
  // }

  $(".quick-view-carousel-details").owlCarousel({
    loop: true,
    dots: true,
    items: 1,
  });

  //----- Active No ui slider --------//

  $(function () {
    if (document.getElementById("price-range")) {
      var nonLinearSlider = document.getElementById("price-range");

      noUiSlider.create(nonLinearSlider, {
        connect: true,
        behaviour: "tap",
        start: [500, 4000],
        range: {
          // Starting at 500, step the value by 500,
          // until 4000 is reached. From there, step by 1000.
          min: [0],
          "10%": [500, 500],
          "50%": [4000, 1000],
          max: [10000],
        },
      });

      var nodes = [
        document.getElementById("lower-value"), // 0
        document.getElementById("upper-value"), // 1
      ];

      // Display the slider value and how far the handle moved
      // from the left edge of the slider.
      nonLinearSlider.noUiSlider.on(
        "update",
        function (values, handle, unencoded, isTap, positions) {
          nodes[handle].innerHTML = values[handle];
        }
      );
    }
  });

  //-------- Have Cupon Button Text Toggle Change -------//

  $(".have-btn").on("click", function (e) {
    e.preventDefault();
    $(".have-btn span").text(function (i, text) {
      return text === "Have a Coupon?" ? "Close Coupon" : "Have a Coupon?";
    });
    $(".cupon-code").fadeToggle("slow");
  });

  $(".load-more-btn").on("click", function (e) {
    e.preventDefault();
    $(".load-product").fadeIn("slow");
    $(this).fadeOut();
  });

  //------- Start Quantity Increase & Decrease Value --------//

  var value,
    quantity = document.getElementsByClassName("quantity-container");

  function createBindings(quantityContainer) {
    var quantityAmount =
      quantityContainer.getElementsByClassName("quantity-amount")[0];
    var increase = quantityContainer.getElementsByClassName("increase")[0];
    var decrease = quantityContainer.getElementsByClassName("decrease")[0];
    increase.addEventListener("click", function () {
      increaseValue(quantityAmount);
    });
    decrease.addEventListener("click", function () {
      decreaseValue(quantityAmount);
    });
  }

  function init() {
    for (var i = 0; i < quantity.length; i++) {
      createBindings(quantity[i]);
    }
  }

  function increaseValue(quantityAmount) {
    value = parseInt(quantityAmount.value, 10);

    console.log(quantityAmount, quantityAmount.value);

    value = isNaN(value) ? 0 : value;
    value++;
    quantityAmount.value = value;
  }

  function decreaseValue(quantityAmount) {
    value = parseInt(quantityAmount.value, 10);

    value = isNaN(value) ? 0 : value;
    if (value > 0) value--;

    quantityAmount.value = value;
  }

  init();

  //------- End Quantity Increase & Decrease Value --------//

  /*----------------------------------------------------*/
  /*  Google map js
    /*----------------------------------------------------*/

  if ($("#mapBox").length) {
    var $lat = $("#mapBox").data("lat");
    var $lon = $("#mapBox").data("lon");
    var $zoom = $("#mapBox").data("zoom");
    var $marker = $("#mapBox").data("marker");
    var $info = $("#mapBox").data("info");
    var $markerLat = $("#mapBox").data("mlat");
    var $markerLon = $("#mapBox").data("mlon");
    var map = new GMaps({
      el: "#mapBox",
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
      styles: [
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#dcdfe6",
            },
          ],
        },
        {
          featureType: "transit",
          stylers: [
            {
              color: "#808080",
            },
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#dcdfe6",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ffffff",
            },
            {
              weight: 1.8,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d7d7d7",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ebebeb",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#a7a7a7",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#efefef",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#696969",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#737373",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#d6d6d6",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {},
        {
          featureType: "poi",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#dadada",
            },
          ],
        },
      ],
    });
  }

  // ----------------------JQUERY CAROSALE -----------------///
  $("#myCarousel").carousel({
    interval: 4000,
  });

  var clickEvent = false;
  $("#myCarousel")
    .on("click", ".nav a", function () {
      clickEvent = true;
      $(".nav li").removeClass("active");
      $(this).parent().addClass("active");
    })
    .on("slid.bs.carousel", function (e) {
      if (!clickEvent) {
        var count = $(".nav").children().length - 1;
        var current = $(".nav li.active");
        current.removeClass("active").next().addClass("active");
        var id = parseInt(current.data("slide-to"));
        if (count == id) {
          $(".nav li").first().addClass("active");
        }
      }
      clickEvent = false;
    });
  $("#mobileCarousel").carousel({
    interval: 2000, // thời gian giữa các slide
    ride: "carousel",
  });
  // ---------------------------------------SEARCH BAR-------------------//
  document.getElementById("search-box").addEventListener("focus", function () {
    // Khi người dùng nhấp vào hộp tìm kiếm, hiển thị bảng sản phẩm/từ khóa hot
    document.getElementById("suggestions").style.display = "block";
  });

  document.addEventListener("click", function (event) {
    // Đóng bảng gợi ý khi người dùng nhấp ra ngoài
    if (!event.target.closest(".search-container")) {
      document.getElementById("suggestions").style.display = "none";
    }
  });
  // ---------------------------------------------------- FLASH SALE -----------------------///
  // Countdown timer logic
  const countdown = () => {
    let now = new Date().getTime();
    let eventDate = new Date("Aug 31, 2024 23:59:59").getTime(); // Cập nhật thời gian kết thúc sale
    let timeLeft = eventDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    $("#days").text(`${days}d`);
    $("#hours").text(`${hours}h`);
    $("#minutes").text(` ${minutes}m`);
    $("#seconds").text(`${seconds}s`);

    if (timeLeft < 0) {
      clearInterval(countdownTimer);
      $("#timer").text("EXPIRED");
    }
  };

  let countdownTimer = setInterval(countdown, 1000);
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  //-------------------------detail product---------------------//
//   const urlParams = new URLSearchParams(window.location.search);
//   console.log("check param", urlParams);
//   const productId = urlParams.get("id");
//   console.log("check param", productId);

//   // URL của API (thay thế YOUR_API_URL bằng URL của API bạn đã triển khai)
//   const apiUrl = `https://script.google.com/macros/s/AKfycbzTfOc66Fgy3ov5q4uJOX4pleuSyDUuYLznrSiRwB2JKjXXrYDajkodcQtmSJ8wmpZNKw/exec?id=${productId}`;

//   // Hàm fetch dữ liệu từ API
//   async function fetchProductDetails() {
//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       const productDetails = await response.json();

//       // Hiển thị chi tiết sản phẩm
//       displayProductDetails(productDetails);
//     } catch (error) {
//       console.error("Fetch error:", error);
//       $("productDetails").innerText =
//         "Có lỗi xảy ra khi lấy dữ liệu sản phẩm.";
//     }
//   }
//   function renderPrice(pinType) {
//     const price = productDetails[pinType];
//     $(`.price`).html (`${price}.000đ`);
//     $(`.productTitle`).html (`THAY PIN ${pinType.toUpperCase()} CHO ${productDetails.model}`);
// }

//   // Hàm hiển thị chi tiết sản phẩm
//   function displayProductDetails(productDetails) {
  
//     if (productDetails.error) {
//       console.log("error")
//       $('.s_product_text').text(details.error);
//     } else {
//       console.log($('.s_product_text'));
//       $('.s_product_text').html(` <h3 class="productTitle">THAY PIN PISEN CHÍNH HÃNG IPHONE 11 PRO MAX</h3>
// 						<div>
// 							   <button class="btn btn-warning text" onclick="renderPrice('pisenDLChuan')">Pisen DL Chuẩn</button>
//                   <button class="btn btn-warning text" onclick="renderPrice('pisenDLCao')">Pisen DL Cao</button>
//                   <button class="btn btn-warning text" onclick="renderPrice('pisenDLSieuCao')">Pisen DL Siêu Cao</button>
//                   <button class="btn btn-warning text" onclick="renderPrice('orizin')">Orizin</button>
//                   <button class="btn btn-warning text" onclick="renderPrice('eu')">EU</button>
//                   <button class="btn btn-warning text" onclick="renderPrice('zinChinhHang')">Zin Chính Hãng</button>
//                   <button class="btn btn-warning text" onclick="renderPrice('pinABC')">Pin ABC</button>
//                   <button class="btn btn-warning text" onclick="renderPrice('pinXYC')">Pin XYC</button>
// 						</div>
// 						<div class="">
// 							<span class="price"color: black;">${productDetails.pisenDLChuan}.000đ</span>
// 							<span class="cost" style="color: gray;">1.960.000đ</span>
// 							<span class="sale-off"> Giảm 50%</span>
// 						</div>
// 						<ul class="list">
// 							<li>
// 								<a href="#">
// 									<span>Thời gian bảo hành : </span>
// 									<span class="making-time">12 tháng</span>
// 								</a>
// 							</li>
// 							<li>
// 								<a href="#">
// 									<span>Thời gian sữa chữa :</span>
// 									<span class="making-time">15 - 30 phút</span>
// 								</a>
// 							</li>
// 							<li>
// 								<div><img alt="123" style="width: 100%; border-radius: .8rem;" src="img/BANNER-LAPTOP-BOTTOM-HOME-T8-1200-010824.png"/></div>
// 							</li>
// 							<li>
// 								<div style="border: 1px solid #ff6c00; padding:10px;background: linear-gradient(90deg, #ffba00 0%, #ff6c00 100%);border-radius: .8rem; color: #fff;">
// 									<h3 style="background: linear-gradient(90deg, #ffba00 0%, #ff6c00 100%); padding:10px;border-radius: .8rem;color: white;">Tiện ích khuyến mãi</h3>
// 									<div > 
// 										<span><i style="color: red;" class="fa fa-bookmark-o"></i> Thay pin pisen tặng dán màn hình và bộ cáp sạc</span>
// 										<br/>
// 										<span><i style="color: red;" class="fa fa-bookmark-o"></i> Vệ sinh máy miễn phí</span>
// 									</div>
// 								</div>
// 							</li>
// 						</ul>
// 						<p>
// 							<span><b>Điều kiện bảo hành</b> : Pin hoạt động không ổn định như phần trăm pin báo ảo khi sử dụng , máy nóng bất thường khi sạc pin , máy tự động sụp nguồn khởi động liên tục . Pin còn nguyên vẹn không bị rách , phù , lủng , gãy chấu , đứt dây.</span>
// 							<br/>
// 							<span> <b>Không bảo hành</b> : khi tem dán linh kiện sửa chửa bị rách biến dạng , mất tem , máy bị rơi rớt – vô nước , can thiệp bởi bên thứ 3</span>
// 						<p>
						
// 						<div class="product_count">
// 							<label for="qty">Quantity:</label>
// 							<input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:"
// 								class="input-text qty">
// 							<button
// 								onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
// 								class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
// 							<button
// 								onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
// 								class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
// 						</div>
// 						<div class="card_area d-flex align-items-center">
// 							<a class="primary-btn" href="#">Đặt lịch sửa chửa</a>
// 						</div>`)
//     }
//   }

//   // Gọi hàm fetchProductDetails khi tải trang
//   fetchProductDetails();
//   renderPrice('pisenDLChuan');

$(document).ready(function () {
 
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  const keyMapping = {
    "Pisen": "Pisen DL Chuẩn",
    "PisenCao": "Pisen DL Cao",
    "PisenSieuCao": "Pisen DL Siêu Cao",
    "Orizin": "Orizin",
    "EU": "EU",
    "Zin": "Zin Chính Hãng",
    "Pinabc": "Pin ABC",
    "Pininner": "Pin XYC"
  };
  // URL của API
  const apiUrl = `https://script.google.com/macros/s/AKfycby_qwIAXkWAtNT9CmhVBHNEJ1R8Q_qEvrym7QNKTNRDxkD7sqeIoGVXvhB_JPEpIG7XNg/exec?id=${productId}`;
  // const apiUrl = `https://script.google.com/macros/s/AKfycbzTfOc66Fgy3ov5q4uJOX4pleuSyDUuYLznrSiRwB2JKjXXrYDajkodcQtmSJ8wmpZNKw/exec?id=${productId}`;
  // Hàm fetch dữ liệu từ API
  async function fetchProductDetails() {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const productDetails = await response.json();
      console.log("check product details",productDetails);
      // Hiển thị chi tiết sản phẩm
      displayProductDetails(productDetails);
    } catch (error) {
      console.error("Fetch error:", error);
      $("#productDetails").text("Có lỗi xảy ra khi lấy dữ liệu sản phẩm.");
    }
  }

  // Hàm render giá khi nhấp vào loại pin
  function renderPrice(pinType, productDetails) {
    console.log("checl prductdetail in renderPrice", productDetails);
    const price = productDetails[pinType];
    console.log("check price",price);
    $(".price").html(`${price}.000đ`);
    $(".productTitle").html(`THAY PIN ${pinType.toUpperCase()} CHO ${productDetails.Model}`);

  }

  // Hàm hiển thị chi tiết sản phẩm
  function displayProductDetails(productDetails) {
    if (productDetails.error) {
      $('.s_product_text').text(productDetails.error);
    } else {
      $('.s_product_text').html(`
        <h3 class="productTitle">THAY PIN PISEN CHÍNH HÃNG IPHONE 11 PRO MAX</h3>
        <div class="button-type">
          

        </div>
        <div class="">
          <span class="price" style="color: black;">${productDetails.pisenDLChuan}.000đ</span>
          <span class="cost" style="color: gray;">1.960.000đ</span>
          <span class="sale-off"> Giảm 50%</span>
        </div>
        <ul class="list">
          <li>
            <a href="#">
              <span>Thời gian bảo hành : </span>
              <span class="making-time">12 tháng</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Thời gian sữa chữa :</span>
              <span class="making-time">15 - 30 phút</span>
            </a>
          </li>
          <li>
            <div><img alt="123" style="width: 100%; border-radius: .8rem;" src="img/BANNER-LAPTOP-BOTTOM-HOME-T8-1200-010824.png"/></div>
          </li>
          <li>
            <div style="border: 1px solid #ff6c00; padding:10px;background: linear-gradient(90deg, #ffba00 0%, #ff6c00 100%);border-radius: .8rem; color: #fff;">
              <h3 style="background: linear-gradient(90deg, #ffba00 0%, #ff6c00 100%); padding:10px;border-radius: .8rem;color: white;">Tiện ích khuyến mãi</h3>
              <div> 
                <span><i style="color: red;" class="fa fa-bookmark-o"></i> Thay pin pisen tặng dán màn hình và bộ cáp sạc</span>
                <br/>
                <span><i style="color: red;" class="fa fa-bookmark-o"></i> Vệ sinh máy miễn phí</span>
              </div>
            </div>
          </li>
        </ul>
        <p>
          <span><b>Điều kiện bảo hành</b> : Pin hoạt động không ổn định như phần trăm pin báo ảo khi sử dụng , máy nóng bất thường khi sạc pin , máy tự động sụp nguồn khởi động liên tục . Pin còn nguyên vẹn không bị rách , phù , lủng , gãy chấu , đứt dây.</span>
          <br/>
          <span> <b>Không bảo hành</b> : khi tem dán linh kiện sửa chữa bị rách biến dạng , mất tem , máy bị rơi rớt – vô nước , can thiệp bởi bên thứ 3</span>
        <p>
        <div class="product_count">
          <label for="qty">Quantity:</label>
          <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty">
          <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;" class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
          <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) && sst > 0 ) result.value--;return false;" class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
        </div>
        <div class="card_area d-flex align-items-center">
          <a class="primary-btn" href="#">Đặt lịch sửa chữa</a>
        </div>
      `);
      let buttonContainer = $('.button-type');
      console.log(buttonContainer);
      for (let key in productDetails) {
        if (key !== "id" && key !== "Model") { // Loại bỏ các trường không phải là loại pin
          let button = $('<button></button>')
            .addClass('btn btn-warning text pin-button')
            .attr('data-pin', key)
            .attr('data-price', productDetails[key])
            .text(key);

          // Thêm sự kiện click cho mỗi button
          button.click(function() {
            renderPrice(key, productDetails[key]);
          });

          buttonContainer.append(button);
        }
      }

      // $('.s_product_text').html(buttonContainer);
      // Thiết lập giá ban đầu khi hiển thị sản phẩm lần đầu
      // renderPrice('pisenDLChuan', productDetails);
      renderPrice('Pisen DL Chuẩn', productDetails);
      // Thêm sự kiện click cho các nút pin để cập nhật giá
      $('.pin-button').click(function() {
        const pinType = $(this).data('pin');
        renderPrice(pinType, productDetails);
      });
    }
  }

  // Gọi hàm fetchProductDetails khi tải trang
  fetchProductDetails();
});


});
