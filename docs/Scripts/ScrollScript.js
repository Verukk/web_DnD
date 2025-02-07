document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.createElement("button");
    scrollButton.innerText = "Наверх";
    scrollButton.classList.add("scroll-to-top");

    document.body.appendChild(scrollButton);

    scrollButton.style.display = "none";


    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    scrollButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
