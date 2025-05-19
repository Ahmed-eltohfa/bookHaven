// signup.js
import { users, storeUsers, loadUsers, storeUser, hashPassword } from "../main.js";

loadUsers();

const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const form = document.querySelector("form");

const emailInput = document.getElementById("email");
const passInput = document.querySelectorAll("input[type='password']")[0];
const confirmInput = document.querySelectorAll("input[type='password']")[1];
const roleSelect = document.getElementById("sel");


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim().toLowerCase();
    const password = passInput.value;
    const confirmPassword = confirmInput.value;
    const role = roleSelect.value;

    if (!email || !password || !confirmPassword || !role) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("User with this email already exists.");
        // Redirect to login page
        window.location.href = "../login";
        return;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = {
        id: users.length + 1,
        firstName,
        lastName,
        profilePic: "/static/images/profile.png",
        email,
        password: hashedPassword,
        joinedSince: Date.now(),
        isAdmin: role === "admin",
        userBooks: [],
    };

    users.push(newUser);
    storeUsers();

    storeUser(newUser);
    alert("User registered successfully!");

    // clear the form
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
    confirmInput.value = "";
    roleSelect.value = "user";
    window.location.href = "../../";

});
