
var resourceName = null;
var lastClicked = null;

$('.js-nav-link').click(function (e) {
    e.preventDefault();

    resourceName = $(this).text();

    if (resourceName !== lastClicked) {
        if ($.trim(resourceName) == 'Products') {
            $('#secondaryNavbar').html(
                '<div>' +
                '<ul id="secondaryNavbar" class="navbar-nav navbar-nav-scroll ms-auto p-1">' +
                '<li class="nav-item ps-3 pe-3"><button class="nav-link js-secondary-nav-link" value="DeviantArt">DeviantArt</button></li>' +
                '<li class="nav-item ps-3 pe-3"><button class="nav-link js-secondary-nav-link" value="Dribble">Dribble</button></li>' +
                '<li class="nav-item ps-3 pe-3"><button class="nav-link js-secondary-nav-link" value="GitHub">GitHub</button></li></ul></div>'
            );

            $.getScript('/assets/js/secondary-navigation.js')
        }

        if ($.trim(resourceName) !== 'Products') {
            $('#secondaryNavbar').html(
                '<div>' +
                '<ul id="secondaryNavbar" class="navbar-nav navbar-nav-scroll ms-auto p-1">' +
                '<li class="nav-item ps-3 pe-3"> <a class="nav-link" href="#">' + resourceName + ' 1</a></li>' +
                '<li class="nav-item ps-3 pe-3"> <a class="nav-link" href="#">' + resourceName + ' 2</a></li>' +
                '<li class="nav-item ps-3 pe-3"> <a class="nav-link" href="#">' + resourceName + ' 3</a></li>' +
                '<li class="nav-item ps-3"> <a class="nav-link" href="#">' + resourceName + ' 4</a></li></ul></div>'
            );
        }
    }

    if (resourceName === lastClicked) {
        $('#secondaryNavbar').html('');
    }

    lastClicked = resourceName;
});

$('.js-body').click(function (e) {
    var container = $('.js-header');

    if (container.has(e.target).length === 0) {
        $('#secondaryNavbar').html('');
    }
})




