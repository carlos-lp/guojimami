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
                $bigImg = $('<img/>').attr({'src':bigUrl}).appendTo($big);

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

   var params = decodeURI(location.search).slice(1).split('=');
   var obj={};
   obj[params[0]]=params[1];
   // console.log(obj.id);
   $.ajax({
        type:'POST',
        url:'../api/goods.php',
        async:"true",
        data:{
             id:obj.id,
        },
        dataType:'json',
        success:function(res){
            if(res=='fail'){
                alert("undefine");
            }else{
                // console.log(res);
                // $('.smallImg1').attr({src:res[0].goodsurl});
                //如果需要换多张图片
                res.map(function(goods,idx){
                    var smallImg='.smallImg';
                     smallImg+=idx+1;
                    // console.log(smallImg);
                    $(smallImg).attr({"src":goods.goodsurl,"data-big":goods.goodsurl});
                    $('.bigImg').attr({"src":goods.goodsurl,"data-big":goods.goodsurl});
                    $('.nav_last').html(goods.details);
                    $('h2').html(goods.details);
                    $('.now_price').html('￥'+goods.price);
                });
                
                //添加到购物车
                var msg=Cookie.get('cart');
                if(msg===''){
                    msg=[];
                }else{
                    msg=JSON.parse(msg);
                }
                // console.log(msg);
                //点击加减添加或减少商品数量
                var n=1;
                $('.combo').on('click','.combo1',function(e){
                    $('.combo .combo1').removeClass('act');
                    $(this).addClass('act');
                    n = $('.act').find('.cn1').html();
                    n = Number(n);
                    // console.log(n);
                });

                $('.reduce').on('click',function(){
                    var goodsnum=Number($('.goodsnum').val());
                    // console.log(goodsnum);
                    if(goodsnum<=0){
                        $goodsnum=0;
                        // console.log(goodsnum);
                    }else{
                        goodsnum-=n;
                        if(goodsnum<=0){
                            goodsnum=0;
                        }
                        // console.log(goodsnum);
                    }
                    $('.goodsnum').val(goodsnum);
                });
                $('.increase').on('click',function(){
                    var goodsnum=Number($('.goodsnum').val());
                    // console.log(goodsnum);
                        goodsnum+=n;
                        // console.log(goodsnum);
                    $('.goodsnum').val(goodsnum);
                });
                
                //把添加商品信息写入cookie
                res.map(function(item){
                $('.btn').on('click',function(){
                    // console.log($('.goodsnum').val());
                    msg.push({
                        goodsImg:item.goodsurl,
                        details:item.details,
                        type:item.type,
                        single:$('.cp1').html(),
                        num:$('.goodsnum').val()

                    });
                    Cookie.set('cart',JSON.stringify(msg));
                    alert("商品已添加到购物车");
                    $('.btn').blur();

                    $('.cars').html($('.goodsnum').val());

                })

                })




            }
        }
   })


})