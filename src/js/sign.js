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

    //正则验证表单
    var btn=document.querySelector('.btn_login');
    btn.onclick = function(){
        var code = document.querySelector('.show_code').innerHTML;
        var auth = document.querySelector('.auth').value;
        if(code != auth){
            alert('您输入的验证码不正确');
            return false;
        }

    }




})