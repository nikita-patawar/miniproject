

  

$(document).ready(function(){
  $("#loginBtn").click(function(){
    $("#myModal").modal();
  });

});

// $('signup').click(function(){
//   window.location.replace('./')
// })

function validateForm() {
  console.log("validate");
  var un = document.getElementById('usrname').value
  console.log(un);
  var pw =  document.getElementById('psw').value
  checkUsernamePassword(un, pw);
}

function checkUsernamePassword(re, rp) {
 // alert("success ajax");
	$.ajax({
    
		url: "http://localhost:3000/users/",
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
			if (loginSuccessful) {
        alert("login successfu wsfrsdgfasdfsf l");
        console.log(window);
        window.location.replace("./index.html");
      }
			else alert("login failed");
		},
		error: (e) => {
			//alert("Error: " + e);
		},
	});
}
