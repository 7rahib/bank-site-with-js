document.getElementById("login-submit").addEventListener("click", function() {

    //email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;



    // password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'rahib@gmail.com' && userPassword == 'rahib') {
        window.location.href = "banking.html";
    } else {
        alert("Enter Email: rahib@gmail.com\nEnter Password: rahib");
    }
});