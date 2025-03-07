export const getFormData = (form) => {
    return {
        model: form.model.value,
        availability: form.availability.value,
        year: form.year.value,
        mileage: form.mileage.value,
        color: form.color.value,
        gearbox: form.gearbox.value,
        steering: form.steering.value,
        body: form.body.value,
        price: form.price.value,
        seats: form.seats.value,
        baggage: form.baggage.value,
    };
};
