$(".item-sidebar > ul > li").click(function (e) {
    $(this).siblings().removeClass("ativada");
    $(this).toggleClass("ativada");
    $(this).find("ul").slideToggle();
    $(this).siblings().find("ul").slideup();
    $(this).siblings(),find("ul").find("li").removeClass("ativada")
});

$(".menu-menor").click(function () {
    $(".sidebar").toggleClass("ativada");
});