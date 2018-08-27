;jQuery(function($){
    $('#head').load('../html/header.html');
    $('#foot').load('../html/footer.html');


    var _qty=12;
    var _pageNo=1;
    $.ajax({
            type:'POST',
            url:'../api/goodslist.php',
            async:"true",
            data:{
                // qty:_qty,
                // page:_page
            },
            dataType:'json',
            success:function($result){
                
                if($result=="fail"){
                    alert('请求错误');
                }else{
                    // console.log($result);
                    //分页
                    
                    
                function rander(){
                    //分页
                    $('.allgoods').html('');
                    $('.pageb').html('');

                    var $res=$result.slice((_pageNo-1)*_qty,_pageNo*_qty);
                    var pageLen = Math.ceil($result.length/_qty);
                    // console.log(pageLen);
                    for(var i=0;i<pageLen;i++){
                        $('.pageb').append($('<a href="#" class="pn"/>').html(i+1));
                    }
                    $('.pageNum').html(pageLen);
                    $('.pn').eq(_pageNo-1).addClass('active');
                    $('.pageb').on('click','a',function(){
                        $('a').removeClass('active');
                        $(this).addClass('active');
                    })
                    
                    //详细列表
                    let list =$res.map(function(item){
                        return  `<a data-id="${item.id}"><img src="${item.goodsurl}" data-big="${item.goodsurl}">
                        <p><span class="temai">【限时特卖】</span>${item.details}</p>
                        <span class="price">￥${item.price}</span>
                        <span class="type">${item.type}</span></a>`
                    });
                    
                    $('.allgoods').append(list);
                    
                }
                rander();//初始化列表

                $('.pageb').on('click','span',function(){
                    _pageNo = $(this).html();
                    rander();
                });
                $('.nextpage').on('click',function(){
                    if(_pageNo<Math.ceil($result.length/_qty)){
                        _pageNo++;
                        rander();
                    }
                   
                });
                $('.sure').on('click',function(){
                    if(Number($('.topage').val())<=Math.ceil($result.length/_qty)){
                        _pageNo = $('.topage').val();
                        rander();
                    }else{
                        return
                    }
                   
                })
                    //时间排序
                    $('.zuixin').on('click',function(){
                    let list =$result.sort(function(a,b){
                        return a.date<b.date?1:-1
                    }).slice((_pageNo-1)*_qty,_pageNo*_qty).map(function(item){
                        // console.log(item);
                            return  $('<a/>').html(`<img src="${item.goodsurl}" data-big="${item.goodsurl}">
                            <p><span class="temai">【限时特卖】</span>${item.details}</p>
                            <span class="price">￥${item.price}</span>
                            <span class="type">${item.type}</span>`)
                        });
                    $('.allgoods').html('');
                    $('.allgoods').append(list);
                    });

                    $('.jiage').on('click',function(){
                    //价格排序
                    let list =$result.sort(function(a,b){
                        return b.price<a.price?1:-1
                    }).slice((_pageNo-1)*_qty,_pageNo*_qty).map(function(item){
                        // console.log(item);
                            return  $('<a/>').html(`<img src="${item.goodsurl}" data-big="${item.goodsurl}">
                            <p><span class="temai">【限时特卖】</span>${item.details}</p>
                            <span class="price">￥${item.price}</span>
                            <span class="type">${item.type}</span>`)
                        });
                    $('.allgoods').html('');
                    $('.allgoods').append(list);
                    });


                }
            }
        });

$('.allgoods').on('click',"a",function(e){
    let id = $(e.target).parent().attr('data-id');
    window.location.href="../html/goods.html?"+'id='+id;
})

});