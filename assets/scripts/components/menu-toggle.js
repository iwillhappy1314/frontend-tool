export default function menuToggle() {
    $('.rs-dropdown-toggle').click(function() {
        $('body').toggleClass('f-menu-toggled');
        $('.f-body-cover').toggleClass('hidden');
        $('#site-navigation').toggleClass('is-toggled');
        $(this).toggleClass('is-toggled');
    });
}