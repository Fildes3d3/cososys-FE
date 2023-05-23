$('.js-call-to-action').click(function (e) {
    e.preventDefault();
    var productName = $(this).val();

    switch(productName) {
        case 'DeviantArt':
            $('#productDetailsMobileFirst').removeClass('hidden')
            $('#productDetailsMobileSecond').addClass('hidden')
            $('#productDetailsMobileThird').addClass('hidden')
            $('.product-details-image').html(
                '<img src="/assets/images/001-deviantart.svg" alt="Slider Image DeviantArt">'
            )
            $('#DeviantArt').addClass('active')
            $('#Dribble').removeClass('active')
            $('#GitHub').removeClass('active')
            $('.product-option-link-up').addClass('hidden')
            $('.product-option-link-down').removeClass('hidden')
            break;
        case 'Dribble':
            $('#productDetailsMobileFirst').addClass('hidden')
            $('#productDetailsMobileSecond').removeClass('hidden')
            $('#productDetailsMobileThird').addClass('hidden')
            $('.product-details-image').html(
                '<img src="/assets/images/011-dribbble.svg" alt="Slider Image Dribble">'
            )
            $('#Dribble').addClass('active')
            $('#DeviantArt').removeClass('active')
            $('#GitHub').removeClass('active')
            $('.product-option-link-up').addClass('hidden')
            $('.product-option-link-down').removeClass('hidden')
            break;
        case 'GitHub':
            $('#productDetailsMobileFirst').addClass('hidden')
            $('#productDetailsMobileSecond').addClass('hidden')
            $('#productDetailsMobileThird').removeClass('hidden')
            $('.product-details-image').html(
                '<img src="/assets/images/019-github.svg" alt="Slider Image GitHub">'
            )
            $('#GitHub').addClass('active')
            $('#Dribble').removeClass('active')
            $('#DeviantArt').removeClass('active')
            $('.product-option-link-up').addClass('hidden')
            $('.product-option-link-down').removeClass('hidden')
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
})

$('.js-call-to-action-close').click(function (e) {
    e.preventDefault()

    var productName = $(this).val();

    console.log(productName)
    switch(productName) {
        case 'DeviantArt':
            $('#productDetailsMobileFirst').addClass('hidden')
            break;
        case 'Dribble':
            $('#productDetailsMobileSecond').addClass('hidden')
            break;
        case 'GitHub':
            $('#productDetailsMobileThird').addClass('hidden')
        break;
    }
    $('.product-option-link-up').removeClass('hidden')
    $('.product-option-link-down').addClass('hidden')
})
