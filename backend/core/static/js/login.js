// login.js
import { user, loadUser, storeUser, checkPassword } from "../main.js";

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
				// loadUser()
				let reader_id = data.reader_id
				fetch("/profilereq/").then(response => response.json()).then(data2 => {
					
					localStorage.setItem("user",JSON.stringify(data2))
					alert("✅ Login successful! Reader ID: " + data.reader_id);
					window.location.href = "/profile/";
				})
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
