$('.js-secondary-nav-link').click(function (e) {
    e.preventDefault()

    e.preventDefault();
    var productName = $(this).val();

    switch(productName) {
        case 'DeviantArt':
            $('.product-details-image').html(
                '<img src="/assets/images/001-deviantart.svg" alt="Slider Image DeviantArt">'
            )
            $('#DeviantArt').addClass('active')
            $('#Dribble').removeClass('active')
            $('#GitHub').removeClass('active')
            break;
        case 'Dribble':
            $('.product-details-image').html(
                '<img src="/assets/images/011-dribbble.svg" alt="Slider Image Dribble">'
            )
            $('#Dribble').addClass('active')
            $('#DeviantArt').removeClass('active')
            $('#GitHub').removeClass('active')
            break;
        case 'GitHub':
            $('.product-details-image').html(
                '<img src="/assets/images/019-github.svg" alt="Slider Image GitHub">'
            )
            $('#GitHub').addClass('active')
            $('#Dribble').removeClass('active')
            $('#DeviantArt').removeClass('active')
    }

    $('.product-details-description').html(
        '<h3>' + productName + ' Details</h3>' +
        '<p>' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n' +
        'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
        'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
        'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n' +
        'culpa qui officia deserunt mollit anim id est laborum.\n' +
        '</p>'
    )
    $('#productDetails').removeClass('hidden')

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#productDetails").offset().top
    }, 2000);

})
