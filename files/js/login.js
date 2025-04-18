function checkLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Hardcoded admin credentials
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
        alert("Welcome, Admin!");
        // location.href = 'admin-dashboard.html'; // optional redirection
    } else {
        alert("Welcome, User!");
        // location.href = 'user-dashboard.html'; // optional redirection
    }
}
