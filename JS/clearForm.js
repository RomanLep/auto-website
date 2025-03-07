const clearBtn = document.querySelector(".form-info-add__remove");
const form = document.querySelector(".main__user-info-form");

const clearInputs = () => {
    clearBtn.addEventListener("click", () => {
        form.reset();
    });
};
clearInputs();
