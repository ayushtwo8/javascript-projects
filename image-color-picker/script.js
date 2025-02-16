const imageInput = document.getElementById("imageInput");
const image = document.getElementById("image");
const colorInfo = document.getElementById("colorInfo");
const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");
const toggleThemeBtn = document.getElementById("toggleTheme");

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleThemeBtn.textContent = "☀️ Light Mode";
    }
});

imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.src = e.target.result;
            image.style.display = "block";
            colorInfo.style.display = "none"; 
        };
        reader.readAsDataURL(file);
    }
});

image.addEventListener("click", (event) => {
    if (!image.src) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, image.width, image.height);

    const x = event.offsetX;
    const y = event.offsetY;

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const rgbColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    const hexColor = `#${pixel[0].toString(16).padStart(2, "0")}${pixel[1]
        .toString(16)
        .padStart(2, "0")}${pixel[2].toString(16).padStart(2, "0")}`;

    colorBox.style.background = rgbColor;
    rgbValue.textContent = rgbColor;
    hexValue.textContent = hexColor;
    colorInfo.style.display = "flex";
});

toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleThemeBtn.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleThemeBtn.textContent = "🌙 Dark Mode";
    }
});
