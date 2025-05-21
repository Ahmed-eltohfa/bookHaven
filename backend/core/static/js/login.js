// login.js
import { user, loadUser, storeUser, checkPassword } from "../main.js";

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("pass");

form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("pass").value;

		$.ajax({
			url: "/login/",
			method: "POST",
			contentType: "application/json",
			data: JSON.stringify({
				email: email,
				password: password
			}),
			success: function(data) {
				if (data.status === "success") {
					let reader_id = data.reader_id;

					$.ajax({
						url: "/profilereq/",
						method: "GET",
						dataType: "json",
						success: function(data2) {
							localStorage.setItem("user", JSON.stringify(data2));
							alert("✅ Login successful! Reader ID: " + reader_id);
							window.location.href = "/profile/";
						},
						error: function(xhr, status, error) {
							alert("❌ Error fetching profile: " + error);
						}
					});
				} else {
					alert("❌ Login failed: " + data.message);
				}
			},
			error: function(xhr, status, error) {
				alert("❌ Error: " + error);
			}
		});

    });
