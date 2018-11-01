// mui默认阻止a事件的跳转
$(function () {
    $('body').on('tap', 'a', function () {
        mui.openWindow({
            url: $(this).attr('href')
        });
    })
    
    
})