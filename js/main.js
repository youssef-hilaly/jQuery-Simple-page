// nav open and close
$('nav .open i').on('click', function () {
    $('nav').animate({left:0},1000);
});

$('nav .close i').on('click', function () {
    let width = $('nav').outerWidth() * -1;
    $('nav').animate({left:width},1000);
});

// nav link active
$('a[href^="#"]').on('click', function (e) {
    $(this).addClass('active')
    $(this).parent().siblings().children().removeClass('active');
});

// accordion 
$('#accordion .item h3').on('click', function () {

    $('#accordion .item .content').slideUp();
    let content = $(this).next();
    
    if(content.css('display') == 'none'){
        content.slideDown();
    }
    else{
        content.slideUp();
    }
});

// text area character count
$('form textarea').on('keyup', function () {
    let max = 100;
    let length = $(this).val().length;
    console.log(length);
    console.log($(this).val());
    let char = max - length;
    if (char <= 0) {
        char = "your available character finished";
    }
    $(this).next().children().text(char);

});



// event counter
setInterval(remainingTime, 1000);
// remaining time
function remainingTime() {
    let now = new Date();
    let eventDate = new Date(2025, 1, 25);

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTime;

    let s = Math.floor(remTime / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    $('.days').text(d + 'd');
    $('.hours').text(h + 'h');
    $('.minutes').text(m + 'm');
    $('.seconds').text(s + 's');
}