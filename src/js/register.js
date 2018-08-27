$(function(){
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
    var btn=document.querySelector('.submit');
    btn.onclick = function(){
        var show_code = document.querySelector('.show_code').innerHTML;
        var code = document.querySelector('.code').value;
        // if(code != show_code){
        //     alert('您输入的验证码不正确');
        //     return false;
        // }

    }
    $('.reg_num').on('change',function(){
      if(!/^1[3-9]\d{9}$/.test($reg_num.val())){
        alert('手机号格式不正确');
            return false;
        }
    });



    var $reg_num = $('.reg_num');
    var $code = $('.code');
    var $show_code = $('.show_code');
    var $set_psw = $('.set_psw');
    var $con_psw = $('.con_psw');
    
    //点击提交时的验证
    $('.submit').on('click',function(){
        if($code.val()!=$show_code.html()){
            alert('验证码有误');
            return false;
        }
        if($set_psw.val()!=$con_psw.val()){
            alert('两次输入的密码不一致');
            return false;
        };
        if($set_psw.val().length<6){
            alert('密码太短');
            return false;
        }
        var $checkbox = $('.agree').prop('checked');
        if($checkbox==false){
            alert('请先阅读并同意服务条款');
            return false;
        }

        $.ajax({
            type:'POST',
            url:'../api/register.php',
            async:true,
            data:{
                 reg_num:$('.reg_num').val(),
                 set_psw:$('.set_psw').val()
            },
            dataType:'text',
            success:function($result){
                if($result=='unexist'){
                    
                    alert('注册成功');
                        window.location.href="../html/success.html";
                    }else{
                        alert('用户已存在');
                    }
                }
        });

    });
    //填表单时的验证
    
    
    







})