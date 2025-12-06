// Mode sombre
const btn = document.getElementById("toggle-theme");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    btn.textContent = 
        document.body.classList.contains("dark-mode")
        ? "Mode clair"
        : "Mode sombre";
});

// Animation des barres de niveau
const bars = document.querySelectorAll(".bar div");

window.addEventListener("load", () => {
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.width = width;
        }, 400);
    });
});
