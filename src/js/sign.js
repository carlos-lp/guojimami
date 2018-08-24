$(function(){

    //不用登陆方式的按钮
    $('.login_common').on('click',function(){
        $('.login_common').css('background-color','#C30D23');
        $('.login_common').css('color','#fff');
        $('.lp').css('display','none');


        $('.login_phone').css('background-color','#FAFAFA');
        $('.login_phone').css('color','#535353');
        $('.lc').css('display','block');
    });

    $('.login_phone').on('click',function(){
        $('.lp').css('display','block');
        $('.lc').css('display','none');

        $('.login_common').css('background-color','#FAFAFA');
        $('.login_common').css('color','#535353');
        
        $('.login_phone').css('background-color','#C30D23');
        $('.login_phone').css('color','#fff');
    });

    //验证码
    //初始化验证码
    $('.show_code').html(function(){
        var code = '0123456789abcdefghijklmnopqrstuvwxyz';
        var res='';
        for(var i=0;i<4;i++){
            var num = Math.floor(Math.random()*36);
            res += code[num];
        }
        return res;
    });

    //点击重新生成验证码
    $('.show_code').on('click',function(){
        var code = '0123456789abcdefghijklmnopqrstuvwxyz';
        var res='';
        for(var i=0;i<4;i++){
            var num = Math.floor(Math.random()*36);
            res += code[num];
        }
        $('.show_code').html(res);
    });

    //验证手机号是否合格
    $phone_num = $('.phone_num');
    $('.phone_num').on('change',function(){
      if(!/^1[3-9]\d{9}$/.test($phone_num.val())){
        alert('手机格式不正确');
            return false;
        }
    });
    $('.btn_loginl').on('click',function(){
        if($('.show_code').html()!=$('.auth').val()){
            alert("验证码有误");
            return false;
        }
        console.log($('.cmt').val());

        $.ajax({
            type:'POST',
            url:'../api/sign.php',
            async:true,
            data:{
                 phone_num:$('.phone_num').val(),
            },
            dataType:'json',
            success:function($result){
                if($result=='fail'){
                    console.log(666);
                    break;
                    }
                }
        });

    });
    $('.btn_loginr').on('click',function(){

        $.ajax({
            type:'POST',
            url:'../api/sign.php',
            async:"true",
            data:{
                 "phone_num":$('.cmt').val(),
                 "password":$('.cmp').val()
            },
            dataType:'json',
            success:function($result){
                if($result=="fail"){
                    alert("666");

                    break;
                }else{
                    alert(211);
                    
                    window.location.href="http://localhost:8012/html/success.html";
                    break;
                }
            }
        });




    });

    



})