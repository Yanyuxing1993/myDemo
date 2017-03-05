//验证用户名输入是否正确
function unameIsready() {

    var uname = $('#username').val();
    var reg = /^\w{3,10}$/;
    //用户名为空时
    if (uname == '') {

        $('#username').next('.input-prompt')
            //修改为x图标
            .html('<span class="glyphicon glyphicon-remove"></span>');
        //提示用户名不能为空
        //弹出提示
        $('#unameWarning').html('用户名不能为空').fadeIn();

        return false;
        //用户名验证失败时
    } else if (!reg.test(uname)) {

        $('#unameWarning').html('请检查用户名格式是否正确').fadeIn();

        $(this).next('.input-prompt')
            //修改为x图标
            .html('<span class="glyphicon glyphicon-remove"></span>');

        return false;
        //用户名验证成功
    } else {

        return true;

    }


}


//当用户名表单获得焦点时

$('#username').focus(function () {

    //清除提示样式
    clearP('username');

});

//当用户密码表单获得焦点时

$('#userpwd').focus(function () {

    clearP('pwd');

});

//清除错误提示
function clearP(option) {

    if (option == 'username') {

        $('#username').next('.input-prompt')
            //修改为普通图标
            .html('<span class="glyphicon glyphicon-user"></span>');

        //错误信息隐藏
        $('#unameWarning').fadeOut();

    } else if (option == 'pwd') {

        $('#userpwd').next('.input-prompt')
            //修改为普通图标
            .html('<span class="glyphicon glyphicon-lock"></span>');

        $('#pwdWarning').fadeOut();

    }

}

//当用户名表单失去焦点时
$('#username').on('blur', function () {


    var text = $(this).val();   //用户输入值

    if (unameIsready()) {
        //不执行AJAX
        //发送AJAX验证表单数据
        $.getJSON('data/userList.php', {username: text}, function (json) {

            console.log(json);

            if (json.isExist != 'true') {   //如果用户名不存在

                $('#unameWarning').html('用户名不存在').fadeIn();

                $(this).next('.input-prompt')
                    //修改为x图标
                    .html('<span class="glyphicon glyphicon-remove"></span>');

            } else if (json.isExist) {
                //新建图片对象
                var img = $('<img>');
                img.attr('src', json.userPic);
                $('#userPic').html(img);

                $(this).next('.input-prompt')
                    //修改为x图标
                    .html('<span class="glyphicon glyphicon-ok"></span>');

            }
        });
    }
});

$("#userpwd").on('blur', function () {

    //用户输入内容
    var pwd = $('#userpwd').val();

    if (pwd == '') {

        $('#userpwd').next('.input-prompt')
            //修改为普通图标
            .html('<span class="glyphicon glyphicon-remove"></span>');

        $('#pwdWarning').html('密码不能为空').fadeIn();


    }

});

//点击登陆后的验证，以及提交

$('#submit').on('click', function (e) {
    //阻止默认事件
    e.preventDefault();

    if (unameIsready()) {

        var val = $('#loginForm').serialize();  //表单序列化

        $.get('data/login.php', val, function (result) {

            if (result == 'ok') {

                window.location.href='main.html';

            } else {

                $('#unameWarning').html('您输入的帐号或密码不正确，请重新输入').fadeIn();

            }

        });

    }
});










