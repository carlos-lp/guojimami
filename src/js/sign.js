$(function(){

    //不用登陆方式的按钮
    $('.login_common').on('click',function(){
        $('.login_common').css('background-color','#C30D23');
        $('.login_common').css('color','#fff');
        $('.lp').css('display','none');


        $('.login_phone').css('background-color','#FAFAFA');
        $('.login_phone').css('color','#535353');
        $('.lc').css('display','block');
        $('.login_common').blur();
    });

    $('.login_phone').on('click',function(){
        $('.lp').css('display','block');
        $('.lc').css('display','none');

        $('.login_common').css('background-color','#FAFAFA');
        $('.login_common').css('color','#535353');
        
        $('.login_phone').css('background-color','#C30D23');
        $('.login_phone').css('color','#fff');
        $('.login_phone').blur();
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
    //手机验证码登陆
    $phone_num = $('.phone_num');
    $('.phone_num').on('change',function(){
      if(!/^1[3-9]\d{9}$/.test($phone_num.val())){
        alert('手机格式不正确');
            return false;
        }
    });
    $('.btn_loginl').on('click',function(){
        if($('.phone_num').val()==''){
            alert('请输入手机号码');
            return false;
        }
        if($('.show_code').html()!=$('.auth').val()){
            alert("验证码有误");
            return false;
        }
        

        $.ajax({
            type:'POST',
            url:'../api/signl.php',
            async:true,
            data:{
                 phone_num:$('.phone_num').val(),
            },
            dataType:'text',
            success:function($result){
                if($result=='success'){
                    window.location.href="http://localhost:8012/html/success.html";
                    return
                }else{
                    alert('登录失败:用户名或动态密码不正确');
                    return false;
                }
            }
        });

    });
    //手机号密码登陆
    //验证
    $('.btn_loginr').on('click',function(){
        $phone_num = $('.phone_num');
        $('.phone_num').on('change',function(){
            if(!/^1[3-9]\d{9}$/.test($phone_num.val())){
            alert('手机格式不正确');
                return false;
            }
        });
        if($('.cmt').val()==''){
            alert('请输入手机号码');
            return false;
        }
        if($('.cmp').val()==''){
            alert('请输入密码');
            return false;
        }

        //判断是否用户名密码都正确
        $.ajax({
            type:'POST',
            url:'../api/sign.php',
            async:"true",
            data:{
                 phone_num:$('.cmt').val(),
                 password:$('.cmp').val()
            },
            dataType:'text',
            success:function(result){
                if(result=='success'){
                   window.location.href="../html/success.html";
                   return
                }else{
                    alert('登录失败:用户名或密码不正确');
                    return false;
                }
            }
        });




    });

    



})