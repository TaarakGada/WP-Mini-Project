function login() {
    console.log("Login function called");
    const email = $("#loginname").val();
    const password = $("#loginpassword").val();

    console.log("Email:", email, "Password:", password);

    $.ajax({
        url: "http://localhost:3000/login",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({ email, password }),
        success: function (response) {
            console.log("Login success:", response);
            window.location.href = "GetEdu.html";
        },
        error: function (error) {
            console.error("Login error:", error);
            if (error.status === 401) {
                alert("Invalid credentials. Please try again.");
            } else {
                alert("Login failed. Please try again later.");
            }
        },
    });
}
