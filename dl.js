//自定义验证用户名的方法
			function validate_strLenght(str) {
				var regExp = /^(\w){6,20}$/;
				return regExp.test(str);
			}
			//自定义验证email方法
			function validate_email(str) {
				var regExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				return regExp.test(str);
			}
			//自定义验证密码的方法
			function validate_pwd(str) {
				var regExp = /^[a-zA-Z]\w{5,15}/;
				return regExp.test(str);
			}
			//根据表单控件的id填写
			var username = document.getElementById("username");
			//通过id获取元素
			var email = document.getElementById("email");
			//根据表单控件pwd的id填写
			var pwd = document.getElementById("pwd");
			var pwdOk = document.getElementById("pwdOk");
			//通过标签名获取元素
			var form = document.getElementsByTagName("form")[0];
			//表单提交
			function formSubmit() {
				//使用自定义方法验证用户名、验证邮箱
				if (validate_strLenght(username.value) && validate_email(email.value) && validate_pwd(pwd.value) && checkOk()) {
					//调用表单提交方法
					document.getElementById("form").submit();
					alert("登录成功");
				} else {
					//控制台输出
					console.log("验证失败");
				}
			}
			//检查用户名
			username.onblur = function() {
				if (validate_strLenght(username.value)) {
					console.log("用户名符合要求");
				} else {
					console.log("用户名不符合要求");
				}
			}
			//检查email
			email.onblur = function() {
				if (validate_email(email.value)) {
					console.log("邮箱格式符合要求");
				} else {
					console.log("邮箱格式不符合要求");
				}
			}
			//密码框失去焦点的时候
			pwd.onblur = function() {
				if (validate_pwd(pwd.value)) {
					console.log("密码符合要求");
				} else {
					console.log("密码不符合要求");
				}
			}

			function checkOk() {
				if (pwd.value == pwdOk.value) {
					console.log("密码与重复密码一致");
					return true;
				} else {
					console.log("密码与重复密码不一致");
					return false;
				}
			}
			pwdOk.onkeyup = checkOk;
