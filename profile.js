
const name = localStorage.getItem("username");
const email = localStorage.getItem("email");
document.getElementById("profile-name").textContent = name || "No name";
document.getElementById("profile-email").textContent = email || "No email";
const logoutBtn = document.getElementById("signout"); 
logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    window.location.href = "index.html"; 
});
let container= document.querySelector('.container');
let card= document.querySelector('.card')
let content= document.querySelector('.content')
//let a= document.querySelector('Anchor')
document.addEventListener("DOMContentLoaded", function () {
    var html = document.documentElement;
    var icon = document.querySelector('.theme-btn i');
    var logo = document.getElementById('logo');
    var theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        icon.className = 'fas fa-sun';
        logo.src = "logodark.jpeg";
    } else {
        html.setAttribute('data-theme', 'light');
        icon.className = 'fas fa-moon';
        logo.src = "logo.jpeg";
    }
    //عشان اول ما يفتح والreload يبقى عامل saveوكمان الزرار
    document.getElementById('theme-toggle').onclick = function () {
    // الزرار
        if (html.getAttribute('data-theme') === 'dark') {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            icon.className = 'fas fa-moon';
            logo.src = "logo.jpeg";
        } else {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.className = 'fas fa-sun';
            logo.src = "logodark.jpeg";

function signOut(){
	localStorage.clear();
	window.location.href="login.html";
}
