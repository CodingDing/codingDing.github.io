/**
 * Created by ziki on 2015/11/20.
 */
;
(function () {
    var imgArr = ['top.jpg', 'bottom.jpg'];
    var j = 0;
    for (var i = 0, len = imgArr.length; i < len; i++) {
        var img = new Image();
        img.src = imgArr[i];
        img.onload = function () {
            console.log(j);
            j++;
            if (j == imgArr.length) {
                document.querySelector('.loading-box').setAttribute('style', 'display: none');
                document.querySelector('.content').setAttribute('style', 'display: -webkit-box');
                document.querySelector('#header-img').setAttribute('src', imgArr[0]);
                document.querySelector('#footer-img').setAttribute('src', imgArr[1]);
            }
        };
    }

    var ul = document.querySelector('#msg-ul');

    function add(name, msg) {
        var li = document.createElement('li');
        li.setAttribute('class', 'fade-in');
        li.innerHTML = '<div class="head">' +
            '<img src="head.jpg" class="head-img"/>' +
            '<span class="msg-count">1</span>' +
            '</div>' +
            '<div class="msg-box">' +
            '<p class="name">' +
            name
            + '</p>' +
            '<p class="msg">' +
            msg
            + '</p>' +
            '</div>' +
            '<div>' +
            '22:22' +
            '</div>';
        ul.insertBefore(li, ul.firstElementChild);
    }

    var msgList = [
        {
            name: '马云',
            msg: '小伙子，来我这儿干吧'
        },
        {
            name: '马化腾',
            msg: '我给你double，不要听信别人的'
        }
    ];
    for (var i = 0, len = msgList.length; i < len; i++){
        var item = msgList[i];
        (function(i, item){
            setTimeout(function(){
                add(item.name, item.msg);
            }, (i+1)*2000);
        })(i, item);
    }
    })();