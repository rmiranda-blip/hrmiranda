const users = [
    {username: "admin", password: "admin123", name: "Admin User", position: "HR Officer", leaveCredits: 15},
    {username: "bermiso", password: "password", name: "Chrecel Mae J. Bermiso", position: "Administrative Assistant II", leaveCredits: 10}
];

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", e => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                localStorage.setItem("loggedUser", JSON.stringify(user));
                window.location.href = "dashboard.html";
            } else {
                document.getElementById("error").textContent = "Invalid username or password.";
            }
        });
    }

    const empData = JSON.parse(localStorage.getItem("loggedUser"));
    if (empData && document.getElementById("empName")) {
        document.getElementById("empName").textContent = empData.name;
        document.getElementById("empPosition").textContent = empData.position;
        document.getElementById("leaveCredits").textContent = empData.leaveCredits.toFixed(2);
    }
});

function generateLeave() {
    window.print();
}