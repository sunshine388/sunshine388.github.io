$(function(){
    $(".notes-btn li").click(function(){
        var $this=$(this);
        $(this).addClass("on").siblings().removeClass("on");
        $(".notes-btn-box").eq($(".notes-btn li").index(this)).show().siblings(".notes-btn-box").hide();
    });
});