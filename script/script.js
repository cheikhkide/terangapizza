document.getElementById("menu-toggle").addEventListener("click", function() { document.getElementById("mobile-menu").classList.toggle("hidden") });
const e = document.querySelectorAll(".menu-tab"),
    t = document.querySelectorAll(".pizza-card");
e.forEach(c => {
    c.addEventListener("click", function() {
        e.forEach(e => e.classList.remove("active")), this.classList.add("active");
        const c = this.getAttribute("data-category");
        t.forEach(e => { "all" === c || e.getAttribute("data-category") === c ? e.style.display = "block" : e.style.display = "none" })
    })
}), e.length > 0 && e[0].classList.add("active"), document.querySelectorAll('a[href^="#"]').forEach(e => {
    e.addEventListener("click", function(e) {
        e.preventDefault();
        const t = this.getAttribute("href"),
            c = document.querySelector(t);
        if (c) {
            window.scrollTo({ top: c.offsetTop - 80, behavior: "smooth" });
            const e = document.getElementById("mobile-menu");
            e.classList.contains("hidden") || e.classList.add("hidden")
        }
    })
});