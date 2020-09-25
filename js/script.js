// التنثل بأسلوب سلس إلى الفقرة الهدف

$(document).ready(function(){
    $("a.scroll").on('click', function(event){

        var hash = this.hash;

        $('html,body').animate({scrollTop: $(hash).offset().top},800,function(){})
    });

    //للعداد في قسم إحصائيات الشركة
    $('.timer').countTo();

    //ضبط عناصر التحقق لدخل المستخدم
    $('#commentForm').validate();
});
