function updateTime() {
    let time = new Date();
    let dayName = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let date = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    
    let am_pm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; 

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    let timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.innerHTML = `${hour}:${min}:${sec} ${am_pm}`;
    }

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let daynameElement = document.getElementById('dayname');
    if (daynameElement) {
        daynameElement.innerHTML = `${days[dayName]}, ${months[month]} ${date}, ${year}`;
    }
}

updateTime();
setInterval(updateTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("themeButton");

    if (!themeButton) return; 

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeButton.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            themeButton.textContent = "🌙 Dark Mode";
        }
    });
});
