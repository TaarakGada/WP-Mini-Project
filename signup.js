function signup() {
    const email = $("#signupname").val();
    const password = $("#signuppassword").val();

    $.ajax({
        url: "http://localhost:3000/signup",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({ email, password }),
        success: function (response) {
            console.log(response);
            window.location.href = "index.html";
        },
        error: function (error) {
            console.error(error);
            if (error.status === 400) {
                alert("Email already exists. Please use a different email.");
            } else {
                alert("Signup failed. Please try again later.");
            }
        },
    });
}

window.signup = signup;
