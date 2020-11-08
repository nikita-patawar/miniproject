$(document).ready(function () {
	//console.log("init");
	$("#loginBtn").click(login);
});

function login() {
	let re = document.getElementById("loginemail").value;
	let rp = document.getElementById("loginpass").value;
	checkUsernamePassword(re, rp);
}

function checkUsernamePassword(re, rp) {
	$.ajax({
		url: "http://localhost:3001/users/",
		method: "GET",
		success: (x) => {
			let loginSuccessful = false;
			for (let i = 0; i < x.length; i++) {
				if (re == x[i].email && rp == x[i].password) {
					//console.log("Login successful");
					loginSuccessful = true;
					break;
				}
			}
			if (loginSuccessful) alert("login successful");
			else alert("login failed");
		},
		error: (e) => {
			//alert("Error: " + e);
		},
	});
}
