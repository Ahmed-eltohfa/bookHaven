// login.js
import { users, loadUser, storeUser, checkPassword } from "../main.js";

loadUser();

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");

form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("pass").value;

        fetch("/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
				loadUser()
                alert("✅ Login successful! Reader ID: " + data.reader_id);
				localStorage.setItem("currentuser",data.reader_id)
				window.location.href = "/profile/";
                // Optionally redirect:
                // window.location.href = "/profile/";
            } else {
                alert("❌ Login failed: " + data.message);
            }
        })
        .catch(error => {
            alert("❌ Error: " + error);
        });
    });
