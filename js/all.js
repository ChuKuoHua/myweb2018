$(document).ready(function() {
    $('.mytitle').on('click', function() {
        $('.content').hide(1000);
        $('.content').show(1000);
        $('.sectionti').fadeOut(1000, function() {
            location.href = "home.html";
        });

    });
});