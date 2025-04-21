import { user } from "../main.js";

// <div class="profile-header">
// <img src="../images/profile.png" alt="Profile Picture" class="profile-pic">
// <div class="profile-info">
//     <h2>John Doe</h2>
//     <p>john.doe@example.com</p>
//     <p>Member since January 2020</p>
// </div>
// </div>

const profileHeader = document.querySelector('.profile-header');
const profilePic = document.createElement('img');
profilePic.src = user.profilePic;
profilePic.alt = 'Profile Picture';
profilePic.classList.add('profile-pic');
const profileInfo = document.createElement('div');
profileInfo.classList.add('profile-info');
const userName = document.createElement('h2');
userName.innerHTML = user.firstName + ' ' + user.lastName;
const userEmail = document.createElement('p');
userEmail.innerHTML = user.email;
const userMemberSince = document.createElement('p');
const joinedSince = new Date(user.joinedSince);
const options = { weekday: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = joinedSince.toLocaleDateString('en-US', options);
userMemberSince.innerHTML = `Member since ${formattedDate}`;
console.log(formattedDate)

userMemberSince.innerHTML = `Member since`;
profileInfo.appendChild(userName);
profileInfo.appendChild(userEmail);
profileInfo.appendChild(userMemberSince);
profileHeader.appendChild(profilePic);
profileHeader.appendChild(profileInfo);
// const borrowedBooks = user.borrowedBooks;
// const wishlistedBooks = user.wishlistedBooks;
// const borrowedBooksContainer = document.querySelector('.borrowed-books');
// const wishlistedBooksContainer = document.querySelector('.wishlisted-books');