function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  $(document).ready(function() {
    $(window).scroll(function() {
      var scrollPos = $(window).scrollTop();
      $('.scroll-section').css('background-position', '50% ' + (-scrollPos / 2) + 'px');
    });
  });