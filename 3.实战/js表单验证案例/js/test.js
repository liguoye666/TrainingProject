var userAccount = document.getElementById("userAccount");
var userPass = document.getElementById("userPass");
var userPass_ = document.getElementById("userPass_");
var userName = document.getElementById("userName");
var information = document.getElementById("information");
var email = document.getElementById("email");
var telephone = document.getElementById("telephone");
var handup = document.getElementById("handup");


//当鼠标离开用户名输入框，产生验证
var test1 = false; //用户名格式正确 true
var test2 = false;
var test3 = false;
var test4 = false;
var test5 = false;
var test6 = false;
var test7 = false;

var items = document.querySelectorAll(".item_"); //获取所有提示元素的下标

var reg = /正则/;

userAccount.onblur = function() { //验证用户名
    var reg = /^\w{6,18}$/;
    if (this.value == "") {
        items[0].innerHTML = "用户名不能为空";
        items[0].style.color = "red";
    } else {
        if (!reg.exec(this.value)) {
            items[0].innerHTML = "请输入6--18位数字、字母、_";
            items[0].style.color = "red";
        } else {
            items[0].innerHTML = "格式正确";
            items[0].style.color = "green";
            test1 = true;
        }
    }
}

userPass.onfocus = function() {
    items[1].innerHTML = "请输入6--18位数字、字母、_";
    items[1].style.color = "green";
}

userPass.onblur = function() {
    var reg = /^\w{6,18}$/;
    if (this.value == "") {
        items[1].innerHTML = "密码不能为空";
        items[1].style.color = "red";
    } else {
        if (!reg.exec(this.value)) {
            items[1].innerHTML = "请输入6--18位数字、字母、_";
            items[1].style.color = "red";
        } else {
            items[1].innerHTML = "密码格式正确";
            items[1].style.color = "green";
            test2 = true;
        }
    }
}

userPass_.onfocus = function() {
    items[2].innerHTML = "请确认两次密码一致";
    items[2].style.color = "green";
}

userPass_.onblur = function() {
    if (this.value == "") {
        items[2].innerHTML = "确认密码不能为空";
        items[2].style.color = "red";
    } else {
        if (this.value != userPass.value) {
            items[2].innerHTML = "两次密码不同";
            items[2].style.color = "red";
        } else {
            items[2].innerHTML = "确认密码正确";
            items[2].style.color = "green";
            test3 = true;
        }
    }
}

userName.onfocus = function() {
    items[3].innerHTML = "请输入中文姓名";
    items[3].style.color = "green";
}

userName.onblur = function() {
    var reg = /^[\u4e00-\u9fa5]{2,5}$/;
    if (this.value == "") {
        items[3].innerHTML = "姓名不能为空";
        items[3].style.color = "red";
    } else {
        if (!reg.exec(this.value)) {
            items[3].innerHTML = "请输入正确的中文名字";
            items[3].style.color = "red";
        } else {
            items[3].innerHTML = "姓名正确";
            items[3].style.color = "green";
            test4 = true;
        }
    }
}

information.onfocus = function() {
    items[4].innerHTML = "请输入身份证号码";
    items[4].style.color = "green";
}

information.onblur = function() {
    var reg = /^\d{17}[0-9x]$/;
    if (this.value == "") {
        items[4].innerHTML = "身份证不能为空";
        items[4].style.color = "red";
    } else {
        if (!reg.exec(this.value)) {
            items[4].innerHTML = "身份证格式不对";
            items[4].style.color = "red";
        } else {
            items[4].innerHTML = "身份证正确";
            items[4].style.color = "green";
            test5 = true;
        }
    }
}

email.onfocus = function() {
    items[5].innerHTML = "请输入邮箱";
    items[5].style.color = "green";
}

email.onblur = function() {
    var reg = /^\w+@\w+\.[a-zA-Z_]{2,4}$/;
    if (this.value == "") {
        items[5].innerHTML = "邮箱不能为空";
        items[5].style.color = "red";
    } else {
        if (!reg.exec(this.value)) {
            items[5].innerHTML = "邮箱格式不对";
            items[5].style.color = "red";
        } else {
            items[5].innerHTML = "邮箱正确";
            items[5].style.color = "green";
            test6 = true;
        }
    }
}

telephone.onfocus = function() {
    items[6].innerHTML = "请输入手机";
    items[6].style.color = "green";
}

telephone.onblur = function() {
    var reg = /^\d{11}$/;
    if (this.value == "") {
        items[6].innerHTML = "手机号不能为空";
        items[6].style.color = "red";
    } else {
        if (!reg.exec(this.value)) {
            items[6].innerHTML = "手机号码格式不对";
            items[6].style.color = "red";
        } else {
            items[6].innerHTML = "手机号码正确";
            items[6].style.color = "green";
            test7 = true;
        }
    }
}

//注册的时候，必须前面所有数据都是正确的 才能提交
handup.onclick = function() {
    if (test1 && test2 && test3 && test4 && test5 && test6 && test7) {
        alert("确认提交");
    } else {
        alert("你填写的信息有误！");
    }
}