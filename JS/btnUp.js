const backToTop = document.querySelector("#btnUp");

const scrollUp = () => {
    backToTop.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
};
scrollUp()
