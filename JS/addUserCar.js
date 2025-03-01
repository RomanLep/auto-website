const btnAddUserCar = document.querySelector(".main__add-form-btn");

const addUserCar = () => {
    btnAddUserCar.addEventListener("click", (event) => {
        const btn = event.currentTarget;
        const cardCar = btn.closest(".main__add-car-form");
        cardCar.classList.toggle("form--open");
    })
}
addUserCar()