// login.js
import { users, loadUsers, storeUser, checkPassword } from "../main.js";

loadUsers();

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const password = passInput.value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return;
    }

    const foundUser = users.find(user => user.email === email);
    if (!foundUser || !(await checkPassword(password, foundUser.password))) {
        alert("Invalid email or password.");
        return;
    }

    storeUser(foundUser);
    alert(`Welcome back, ${foundUser.firstName}!`);
    window.location.href = "../../index.html"; // redirect to homepage
});
