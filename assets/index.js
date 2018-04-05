/////////////////// TITLE FADE-IN //////////////////////////

$(document).ready(function() {
    setTimeout(function() {
        $(".scroll").animate({ 'opacity': '1' }, 1000);
    }, 2500);

    setTimeout(function() {
        $(".scroll1").animate({ 'opacity': '1' }, 2000);
    }, 3000);

    setTimeout(function(){
        $(".scroll1").animate({'opacity': '0'}, 2000);
    }, 20000)

    setTimeout(function() {
        $("#video_overlays").animate({ 'opacity': '1' }, 1000);
    }, 900);


})



/////////////////// SCROLL TO BOTTOM //////////////////////

$("#landing-button").on("click touchstart", function(event) {
    $('html, body').animate({
        scrollTop: $("#post-section").offset().top
    }, 800);
    toggleForm();
    bindFormClick();
})
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}


/////////////////// "ABOUT BTN" SCROLL ////////////////////////

$("#about").on("click touchstart", function(event) {
    $('html, body').animate({
        scrollTop: $("#post-section").offset().top
    }, 800);
})
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}


/////////////////// "CONTACT BTN" SCROLL ////////////////////////

$("#contact").on("click touchstart", function(event) {
    $('html, body').animate({
        scrollTop: $("#post-section").offset().top
    }, 800);
    toggleForm();
    bindFormClick();
})
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}


/////////////////// "PORTFOLIO BTN" SCROLL ////////////////////////

$("#portfolio").on("click touchstart", function(event) {
    $('html, body').animate({
        scrollTop: $('.portfolio-section').offset().top - ($(window).height() - $('.portfolio-section').outerHeight(true)) / 2
    }, 800);

})
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

/////////////////////// SCROLL TO TOP /////////////////////////

$('.fa-arrow-up').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});



///////////////////////// MODAL //////////////////////////////////

var formContainer = $("#form-container");

bindFormClick();
//Opening the form
function bindFormClick() {
    $(formContainer).on("click", function(e) {
        e.preventDefault();
        toggleForm();
        //Ensure container doesn't togleForm when open
        $(this).off();
    });
}

//Closing the form
$("#form-close, .form-overlay").click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    toggleForm();
    bindFormClick();
});

function toggleForm() {
    $(formContainer).toggleClass("expand");
    $(formContainer)
        .children()
        .toggleClass("expand");
    $("body").toggleClass("show-form-overlay");
    $(".form-submitted").removeClass("form-submitted");
}

//Form validation
$("form").submit(function() {
    var form = $(this);
    form.find(".form-error").removeClass("form-error");
    var formError = false;

    form.find(".input").each(function() {
        if ($(this).val() == "") {
            $(this).addClass("form-error");
            $(this).select();
            formError = true;
            return false;
        } else if ($(this).hasClass("email") && !isValidEmail($(this).val())) {
            $(this).addClass("form-error");
            $(this).select();
            formError = true;
            return false;
        }
    });

    if (!formError) {
        $("body").addClass("form-submitted");
        $("#form-head").addClass("form-submitted");
        setTimeout(function() {
            $(form).trigger("reset");
        }, 1000);
    }
    return false;
});

function isValidEmail(email) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(email);
}


///////////////////////// CAROUSEL ///////////////////////////////
(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function() { $('.carousel').carousel('next'); return false; });
    $('.prev').click(function() { $('.carousel').carousel('prev'); return false; });

})(jQuery);

