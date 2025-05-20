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


 document.getElementById("signupForm").addEventListener("submit", function (e) {
            e.preventDefault();

            const first_name = document.getElementById("first-name").value;
            const last_name = document.getElementById("last-name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("pass").value;
            const confirmPass = document.getElementById("confirm-pass").value;
            const role = document.getElementById("sel").value;

            if (password !== confirmPass) {
                alert("❌ Passwords do not match!");
                return;
            }

            fetch("/signup/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password,
                    role: role
                })
            })
            .then(response => response.json())
            .then(data => {
                const responseDiv = document.getElementById("response");
                if (data.status === "success") {
                    responseDiv.textContent = "✅ Account created successfully! ID: " + data.reader_id;
                    responseDiv.style.color = "green";
                } else {
                    responseDiv.textContent = "❌ " + data.message;
                    responseDiv.style.color = "red";
                }
            })
            .catch(error => {
                document.getElementById("response").textContent = "❌ Error: " + error;
                document.getElementById("response").style.color = "red";
            });
        });