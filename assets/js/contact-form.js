$('.js-submit-button').click(function (e) {
    e.preventDefault()

    if (validateForm()) {
        $('#contactForm').css("display", "none")

        $('.modal-header').html('<h5 class="modal-title">Thank you for your message!</h5>');
        $('.modal-body').html('<p>Your message has been submitted successfully. We will reply as soon as possible.</p>');
        $('#myModal').modal('show');

        $('.re-submit-button').removeClass('hidden')
        $('.re-submit-button').click(function (e) {
            e.preventDefault()

            $('#contactForm').css('display', 'block')
            $('.re-submit-button').addClass('hidden')
            $('#contactForm' ).each(function(){
                this.reset();
            });
        })
    }
})

// Form validation
function validateForm() {
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    var nameRegex = /^[A-Za-z ]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        if (name.length === 0) {
            $('.modal-header').html('<h5 class="modal-title">Your name is required!</h5>');
            $('.modal-body').html('');
        }
        if (name.length > 0) {
            $('.modal-header').html('<h5 class="modal-title">' + name + ' is not a valid name!</h5>');
            $('.modal-body').html('<p>Please only use letters and spaces!</p>');
        }

        $('#myModal').modal('show');

        return false;
    }

    if (!emailRegex.test(email)) {
        if (email.length === 0) {
            $('.modal-header').html('<h5 class="modal-title">Your email is required</h5>');
            $('.modal-body').html('');
        }
        if (email.length > 0) {
            $('.modal-header').html('<h5 class="modal-title">' + email +' is not a valid email</h5>');
            $('.modal-body').html('<p>Please fill in a valid email address</p>');
        }

        $('#myModal').modal('show');

        return false;
    }

    if (message.length === 0 ) {
        $('.modal-header').html('<h5 class="modal-title">Your message is missing!</h5>');
        $('.modal-body').html('Dont you have anything to say to us?');

        $('#myModal').modal('show');

        return false;
    }

    if (message.length > 500) {
        $('.modal-header').html('<h5 class="modal-title">Your message is to long</h5>');
        $('.modal-body').html('<p>Maximum 500 characters are allowed. Sorry for the inconvenience</p>');

        $('#myModal').modal('show');

        return false;
    }

    return true;
}
