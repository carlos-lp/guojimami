;jQuery(function($){
    $('#head').load('../html/header.html');
    $('#foot').load('../html/footer.html');


$.ajax({
            type:'POST',
            url:'../api/goodslist.php',
            async:"true",
            data:{
                 
            },
            dataType:'json',
            success:function($result){
                if($result=="fail"){
                    // alert("666");
                }else{
                    let list =$result.map(function(item){
                            return  $('<a href="#"/>').html(`<img src="${item.goodsurl}" data-big="${item.goodsurl}">
                            <p><span class="temai">【限时特卖】</span>${item.details}</p>
                            <span class="price">￥${item.price}</span>
                            <span class="type">${item.type}</span>`)
                        })
                    
                    $('.allgoods').append(list);

                }
            }
        });

    $('.zuixin').on('click',function(){
        $('.zuixin').html('<img src=../img/goods_id_ASC.gif>');
        $('.renqi').html('<img src=../img/click_count_default.gif>');
        $.ajax({
            type:'POST',
            url:'../api/goodslist.php',
            async:"true",
            data:{
                 
            },
            dataType:'json',
            success:function($result){
                if($result=="fail"){
                }else{
                    $result.sort();
                    console.log($result);
                    let list =$result.sort(function(a,b){
                        return a.date<b.date?1:-1
                    }).map(function(item){
                            return  $('<a href="#"/>').html(`<img src="${item.goodsurl}" data-big="${item.goodsurl}">
                            <p><span class="temai">【限时特卖】</span>${item.details}</p>
                            <span class="price">￥${item.price}</span>
                            <span class="type">${item.type}</span>`)
                        })
                    $('.allgoods').html('');
                    $('.allgoods').append(list);

                }
            }
        });
    })

    $('.jiage').on('click',function(){
        $.ajax({
            type:'POST',
            url:'../api/goodslist.php',
            async:"true",
            data:{
                 
            },
            dataType:'json',
            success:function($result){
                if($result=="fail"){
                }else{
                    $result.sort();
                    console.log($result);
                    let list =$result.sort(function(a,b){
                        return b.price<a.price?1:-1
                    }).map(function(item){
                            return  $('<a href="#"/>').html(`<img src="${item.goodsurl}" data-big="${item.goodsurl}">
                            <p><span class="temai">【限时特卖】</span>${item.details}</p>
                            <span class="price">￥${item.price}</span>
                            <span class="type">${item.type}</span>`)
                        })
                    $('.allgoods').html('');
                    $('.allgoods').append(list);

                }
            }
        });
    })

});