document.addEventListener("DOMContentLoaded", function (event) {
  document
    .getElementById("show-menu-mobile")
    .addEventListener("click", function () {
      let nav_mobile = document.getElementsByClassName("nav-mobile")[0];
      // if (nav_mobile !== null && nav_mobile !== "") {
      //   alert("wtf");
      // }
      nav_mobile.classList.add("show");
      document
        .getElementsByClassName("header--mobile-overload-shadow")[0]
        .classList.add("show");
    });

  document
    .getElementById("hiden-menu-mobile")
    .addEventListener("click", function () {
      document.getElementsByClassName("nav-mobile")[0].classList.remove("show");
      document
        .getElementsByClassName("header--mobile-overload-shadow")[0]
        .classList.remove("show");
    });
  document
    .getElementsByClassName("header--mobile-overload-shadow")[0]
    .addEventListener("click", function () {
      document.getElementsByClassName("nav-mobile")[0].classList.remove("show");
      document
        .getElementsByClassName("header--mobile-overload-shadow")[0]
        .classList.remove("show");
    });
});

// $(document).ready(function () {
//   // ========== BEGIN MENU MOBILE ========== //

//   $("#show-menu-mobile").on("click", function () {
//     $(".nav-mobile ").addClass("show");
//     $(".header--mobile-overload-shadow").addClass("show");
//   });

//   $("#hiden-menu-mobile").on("click", function () {
//     $(".nav-mobile").removeClass("show");
//     $(".header--mobile-overload-shadow").removeClass("show");
//   });

//   $(".header--mobile-overload-shadow").on("click", function () {
//     $(".nav-mobile").removeClass("show");
//     $(".header--mobile-overload-shadow").removeClass("show");
//   });

//   // ========== END MENU MOBILE ========== //

//   $(".ant-input").focusout(function () {
//     if ($(this).val() != "") {
//       $(this).addClass("input-floating-label--active");
//     } else {
//       $(this).removeClass("input-floating-label--active");
//     }
//   });
//   let value = $(".ant-input").val();
//   if (value) {
//     $(".ant-input").addClass("input-floating-label--active");
//   }
//   $(".ant-input").on("focus", function () {
//     $(this).addClass("input-floating-label--active");
//     if ($(this).val() != "") {
//       $(this).addClass("input-floating-label--active");
//     } else {
//       $(this).addClass("input-floating-label--active");
//     }
//   });
// });
