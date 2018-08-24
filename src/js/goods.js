;jQuery(function($){
    $('#head').load('../html/header.html');
    $('#foot').load('../html/footer.html');
    $.prototype.glass = function(options){
        var defaults = {
            width:400,
            height:300,
            gap:15
        }
        this.each(function(){
            var opt = $.extend({},defaults,options);
            // 小图容器
            var $small = $(this);
            $small.addClass('small-zoom');
            var $smallImg = $small.children('img');
            var ratio;

            // 创建大图容器
            var $big = $('<div/>').addClass('big-zoom').appendTo('body');
            var $bigImg;

            // 大图显示位置：
            var bigLeft,bigTop;
                bigLeft = $small.offset().left + $smallImg.outerWidth() + opt.gap;
                bigTop = $small.offset().top+190;
            $big.css({
                width:opt.width,
                height:opt.height,
                top:bigTop,
                left:bigLeft
            });

            // 创建放大镜，并写入小图位置
            var $zoom = $('<div/>').addClass('zoom').appendTo($small);
            $small.on('mouseover',function(){
                $zoom.show();
                $big.show();
                var bigUrl = $smallImg.attr('data-big');
                //大图写入显示区域
                $big.empty();
                $bigImg = $('<img/>').attr('src',bigUrl).appendTo($big);

                // 创建临时图片，以解决图片加载慢而产生的比例计算错误的问题 
                var img = new Image();
                img.src = bigUrl;
                img.onload = function(){
                
                    // 大图与小图的比例
                    ratio = $bigImg.outerWidth()/$smallImg.outerWidth();
                    // 放大镜的尺寸
                    $zoom.css({
                        width:opt.width/ratio,
                        height:opt.height/ratio
                    });
                }
                
            }).on('mouseout',function(){
                $zoom.hide();
                $big.hide();
            })

            // 鼠标移动
            .on('mousemove',function(e){
                // 计算left,top
                var left = e.pageX - $zoom.outerWidth()/2 - $small.offset().left;
                var top = e.pageY - $zoom.outerHeight()/2 - $small.offset().top;

                // 限定放大镜的top,left值
                if(left < 0){
                    left = 0;
                }else if(left > $smallImg.outerWidth() - $zoom.outerWidth()){
                    left = $smallImg.outerWidth() - $zoom.outerWidth();
                }

                if(top<0){
                    top = 0;
                }else if(top > $smallImg.outerHeight() - $zoom.outerHeight()){
                    top = $smallImg.outerHeight() - $zoom.outerHeight()
                }

                $zoom.css({
                    left:left,
                    top:top
                });

                // 移动大图
                $bigImg.css({
                    left:-left*ratio,
                    top:-top*ratio
                });
            })
        });

        return this;
    }

    $('.big').glass();

    $('.small').on('click','img',function(){
        $('.big img').attr({
            'src':this.src,
            'data-big':this.dataset.big
        });
    })
})