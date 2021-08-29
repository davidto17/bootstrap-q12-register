$(document).ready(function () {
  // ========== BEGIN MENU MOBILE ========== //

  $("#show-menu-mobile").on("click", function () {
    $(".nav-mobile ").addClass("show");
    $(".header--mobile-overload-shadow").addClass("show");
  });

  $("#hiden-menu-mobile").on("click", function () {
    $(".nav-mobile").removeClass("show");
    $(".header--mobile-overload-shadow").removeClass("show");
  });

  $(".header--mobile-overload-shadow").on("click", function () {
    $(".nav-mobile").removeClass("show");
    $(".header--mobile-overload-shadow").removeClass("show");
  });

  // ========== END MENU MOBILE ========== //
});
