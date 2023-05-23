jQuery(document).ready(function($) {
    $('#mainNavbar').load('mainNavbar.html')
    $.getScript('/assets/js/navigation.js')
    $('#slider').load('slider.html')
    $('#productPresentation').load('productPresentation.html')
    $.getScript('/assets/js/call-to-action.js')
    $('#contact-form').load('contact-form.html')
    $.getScript('/assets/js/contact-form.js')
});

