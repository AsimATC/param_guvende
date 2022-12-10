$(document).ready(function () {
    $(".nex-form").click(function () {
        $("#body").addClass("form-page");
        $('.timeline').addClass("active2");
    });
});

$(document).ready(function () {
    $(".next-payment").click(function () {
        $("#body").addClass("payment-page");
        $("#body").removeClass("form-page");
        $('.timeline').addClass("active3");
    });
});

$(document).ready(function () {
    $(".next-complete").click(function () {
        $("#body").addClass("complete-page");
        $("#body").removeClass("payment-page");
        $('.timeline').addClass("active4");
    });
});

