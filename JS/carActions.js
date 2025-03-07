import { getFormData } from "../utils/getFormData.js";
import { API_URL } from "./constans.js";


const formAddCar = document.querySelector(".main__user-info-form");

formAddCar.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = getFormData(formAddCar);

    for (const key in formData) {
        if (!formData[key]) {
            return;
        }
    }

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });
});
