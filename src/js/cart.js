jQuery(function($){
  $('#head').load('../html/sign.html header');
  $('#foot').load('../html/sign.html footer');

  //根据cookie生成商品信息表格
   var msg = JSON.parse(Cookie.get('cart'));
   // console.log(msg);
   function rander(){
    $('.cart_shop').html('');
    msg.map(function(item,idx){
      var res='';
      item.single = Number(item.single);
      item.num = Number(item.num);
      // console.log(item.num);
       res=`<tr data-guid="${idx}">
      <td class="td1"><input type="checkbox" /></td>
      <td class="td2"><a href="#"><img src="${item.goodsImg}" /></a><a href="#" class="clearfix"><p>${item.details}</p><p>1段</p><p>850g</p></a></td>
      <td class="td3"><span>${item.type}</span></td>
      <td class="td4"><span>￥${item.single}</span></td>
      <td class="td5"><img src="../img/minus.gif" class="reduce"><span class="single_num">${item.num}</span><img src="../img/plus.gif" class="increase" ></td>
      <td class="td6">￥<span>${item.single*item.num}</span></td>
      <td class="td7"><span>税费补贴</span></td>
      <td class="td8"><input type="button" value="[删除]"  /></td>
      </tr>`
      $('.cart_shop').append(res);
   })
  };
  //初始化购物车
  rander();
   
   //购物车表格操作
  var $checkbox = $('.cart_shop :checkbox');
  var $trs = $('.cart_shop tr');
  // console.log($trs);
  //全选与全不选
  $('.all').on('click',function(){
    $checkbox.prop('checked',this.checked);
    if(this.checked){
      $trs.addClass('selected');
    }else{
      $trs.removeClass('selected');
    }
    checkAll();
  });
  //单选本行
  $('.cart_shop').on('click','.td1',function(){
    var $currentTr = $(this).closest('tr');
    $currentTr.toggleClass('selected');
    $currentTr.find(':checkbox').prop('checked',$currentTr.hasClass('selected'));
    checkAll();
  });
  
  function checkAll(){
    var $checked = $checkbox.filter(':checked');
    $('.all').prop('checked',$checked.length === $checkbox.length);

    //计算结算时的价格
    var t=0;
    $checked.map(function(idx,item){
      t += Number($(item).parent().parent().find(".td6").children().html());
      
    })
    $('.total').html('￥'+t);
  }
  

//删除商品操作
$('.cart_shop').on('click','input:button',function(){
  var id= $(this).parent().parent().attr('data-guid');
    msg.map(function(item,idx){
      if(idx==id){
        msg.splice(idx,1);
        // console.log(msg);
        return
      }
    });

    //重写cookie
    Cookie.set('cart',JSON.stringify(msg));
    //重新渲染
    rander();

  });

  //结算
  //结算为清空购物车效果
  $('.caa').on('click',function(){
    alert('前往结算界面结算(清空购物车)');
    msg=[];
    Cookie.set('cart',JSON.stringify(msg));
    rander();
  })

  // console.log($('.td5 .reduce'));
  $('.td5').on('click','.reduce',function(e){
    // console.log();
      var goodsnum=Number($(this).next().html());
      console.log(goodsnum);
      if(goodsnum<=0){
          $goodsnum=0;
          // console.log(goodsnum);
      }else{
          goodsnum--;
          if(goodsnum<=0){
              goodsnum=0;
          }
          // console.log(goodsnum);
      }
      $(this).next().html(goodsnum);
  });
  $('.td5').on('click','.increase',function(){
      var goodsnum=Number($(this).prev().html());
      // console.log(goodsnum);
          goodsnum++;
          // console.log(goodsnum);
      $(this).prev().html(goodsnum);
  });




});