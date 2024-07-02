$(function () {
    //首頁BANNER
    $('.ixslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
         }
         ]
    });
    //首頁當季
    $('.seasn').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
         },{
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
         }
         ]
    });
    //首頁熱門產品PC版
    $('.ixpdwrap-pc').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
         }
         ]
    });
    //首頁熱門產品手機板
    $('.ixpdwrap-mb .ixpd').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
         },{
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
         }
         ]
    });
    //首頁最佳青農
    $('.bestsld').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        //        centerMode: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
         },{
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
         }
         ]
    });
    //首頁友站連結
    $('.linkslider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
//        centerMode: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
         },{
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
         }
         ]
    });
    //智慧農場內頁照片slider
    $('.smartslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
         }
         ]
    });

    //產品內頁slider
    $('.mainpd').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.pdslide'
    });
    $('.pdslide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.mainpd',
        dots: false,
        //        centerMode: true,
        focusOnSelect: true,
        vertical: true
    });


    $(".font-sma").click(function () {
        $("body").css("font-size", "12px");
    });
    $(".font-med").click(function () {
        $("body").css("font-size", "16px");
    });
    $(".font-lag").click(function () {
        $("body").css("font-size", "20px");
    });

    $(".btnsrch").click(function () {
        $('.srchnav').show();
    });
    $(".btnshowft").click(function () {
        $('.showlkwp').slideToggle();
    });
    $(".businfo .tab a").click(function () {
        var index = $(this).index(); // 獲取被點擊的索引
        $(".businfo .tab a").removeClass("active"); // 移除所有標籤的 active 類
        $(this).addClass("active"); // 對被點擊的標籤添加 active 類
        $(".tbwrap .showtb").removeClass("active"); // 移除所有標籤的 active 類
        $(".tbwrap .showtb").eq(index).addClass('active'); // 顯示索引對應的 .showtb 元素
    });

    $(".srchnav .list > div").click(function () {
        $('.srchnav .result').fadeIn();
    });
    $(".srchnav .result").click(function () {
        $(this).hide();
    });
    $(".srchnav .srcont .close").click(function () {
        $('.srchnav').hide();
    });
    $(".mapinfo .close").click(function () {
        $('.mapinfo').hide();
    });
    


    $(".backtop .top").click(function () {
        $('html,body').animate({
                scrollTop: 0
            },
            'slow');
    });

    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })

    wow.init();
    var btn = $('.btnnav');
    btn.on('click', function () {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
        $('nav').fadeToggle();
    });





    $(window).scroll(function () {


    });


    var window_w = $(window).width();
    if (window_w < 1000) {
        // mobile
        $("nav >div.ar").click(function () {
            $(this).toggleClass('active');
            $(this).find('ul').fadeToggle();
        });


    } else {

        $("nav >div").hover(function () {
            $(this).find('ul').fadeIn();
        }, function () {
            $(this).find('ul').fadeOut();
        });



    }

    //首頁農業場域slider
    var currentIndex = 0;
    var items = $('.v-slider .item');
    var dots = $('.v-slider .dot span');
    var totalItems = items.length;
    var autoPlayInterval = 3000; // 自動輪播間隔，單位：毫秒
    var timer;

    // 顯示第一個 item 和 dot
    $(items[currentIndex]).fadeIn();
    $(dots[currentIndex]).addClass('active');

    // 切換到指定的 item
    function goToItem(index) {
        $(items[currentIndex]).fadeOut();
        $(dots[currentIndex]).removeClass('active');
        currentIndex = index;
        $(items[currentIndex]).fadeIn();
        $(dots[currentIndex]).addClass('active');
    }

    // 自動輪播
    function autoPlay() {
        timer = setInterval(function () {
            var nextIndex = (currentIndex + 1) % totalItems;
            goToItem(nextIndex);
        }, autoPlayInterval);
    }

    // 啟動自動輪播
    autoPlay();

    // 停止自動輪播
    function stopAutoPlay() {
        clearInterval(timer);
    }

    // 點擊 dot 切換到相應的 item
    dots.click(function () {
        var index = $(this).index();
        goToItem(index);
        stopAutoPlay(); // 停止自動輪播
    });

});
