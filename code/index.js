const API_URL = "http://localhost:5000/auto"

const cardsList = document.querySelector("#cards-list")

const car = {
    "id": "1", 
    "model": "Mercedes-Benz V-class", 
    "color": "black", 
    "availability": "Yes",
    "yearOfIssue": "2024",
    "mileage": "9 473 km",
    "gearbox": "automatic",
    "steeringWheel": "left",
    "body": "minivan",
    "img": "./img/Mercedes-Benz_V-class.png",
    "price": "$445.00",
    "seats": "7",
    "baggage": "7"
};

// сделать картинки в обькте и тд
const renderingCardCar = (car) => {
    cardsList.insertAdjacentHTML("beforeend", `
        <li class="main__card-car">
                <div class="card-car__container__left">
                    <img class="card-car__img" src="${car.img}" alt="${car.model}">
                    <div class="card-car__container__text&btn">
                        <h2 class="card-car__name">${car.model}</h2>
                        <h3 class="card-car__price">${car.price}</h3>
                        <div class="card-car__btn-container">
                            <button class="card-car__btn-left btn">
                                <svg fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.011 512.011" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
                                                s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
                                                C514.096,145.416,514.096,131.933,505.755,123.592z"/>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <h3 class="card-car__btn-text">More info</h3>
                        </div>
                    </div>
                </div>

                <div class="card__container__right">
                    <button class="card-car__btn-right btn">Select</button>
                    <ul class="card-car__about">
                        <li class="card-car__about-container">
                            <div class="card-car__about-text">${car.seats}</div>
                            <svg fill="#606060" width="26px" height="26px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#6b6b6b">
                                <path d="M.221 16.268a15.064 15.064 0 0 0 1.789 1.9C2.008 18.111 2 18.057 2 18a5.029 5.029 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.784A2.968 2.968 0 0 1 4 9a2.988 2.988 0 0 1 5.022-2.2 5.951 5.951 0 0 1 2.022-.715 4.994 4.994 0 1 0-7.913 6.085 7.07 7.07 0 0 0-2.91 4.098zM23.779 16.268a7.07 7.07 0 0 0-2.91-4.1 4.994 4.994 0 1 0-7.913-6.086 5.949 5.949 0 0 1 2.022.715 2.993 2.993 0 1 1 3.614 4.74 1 1 0 0 0 .175 1.784A5.029 5.029 0 0 1 22 18c0 .057-.008.111-.01.167a15.065 15.065 0 0 0 1.789-1.899z"/>
                                <path d="M18.954 20.284a7.051 7.051 0 0 0-3.085-5.114A4.956 4.956 0 0 0 17 12a5 5 0 1 0-8.869 3.17 7.051 7.051 0 0 0-3.085 5.114 14.923 14.923 0 0 0 1.968.849C7.012 21.088 7 21.046 7 21a5.031 5.031 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.785A2.964 2.964 0 0 1 9 12a3 3 0 1 1 6 0 2.964 2.964 0 0 1-1.408 2.537 1 1 0 0 0 .175 1.785A5.031 5.031 0 0 1 17 21c0 .046-.012.088-.013.133a14.919 14.919 0 0 0 1.967-.849z"/>
                            </svg>
                        </li>
                        <li class="card-car__about-container">
                            <div class="card-car__about-text">${car.baggage}</div>
                            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12V9C4 8.44771 4.44772 8 5 8H9M4 12V17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17V12M4 12L11 13H13L20 12M20 12V9C20 8.44771 19.5523 8 19 8H15M9 8V7C9 6.44772 9.44772 6 10 6H14C14.5523 6 15 6.44772 15 7V8M9 8H15M11 14.5H13" stroke="#606060" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </li>
                    </ul>
                </div>
            </li>
        `)
};

const getCarData = async (url) => {
    const response = await fetch(url);
    const carData = await response.json();

    return carData;
};

const start = async (url) => {
    const cars = await getCarData(url);

    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];
        renderingCardCar(car);
    }
};

start(API_URL);