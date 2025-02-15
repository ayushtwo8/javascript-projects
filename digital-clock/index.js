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
    hour = hour % 12 || 12; // 12-hour format

    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    document.getElementById('time').innerHTML = `${hour}:${min}:${sec} ${am_pm}`;

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById('dayname').innerHTML = `${days[dayName]}, ${months[month]} ${date}, ${year}`;
}

updateTime();
setInterval(updateTime, 1000);

const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
