const DESTINATIONS = [
  {
    name: "Moon",
    images: {
      png: "../imgs/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "../imgs/destination/image-mars.png",
      webp: "./assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "../imgs/destination/image-europa.png",
      webp: "./assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "../imgs/destination/image-titan.png",
      webp: "./assets/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const DESCRIPTION_BTNS = document.querySelectorAll(".description-button");
const PLANET_PICTURE = document.querySelector("#planet-picture");
const PLANET_HEADING = document.querySelector("#description-heading");
const PLANET_P = document.querySelector("#description-paragraph");
const PLANET_DISTANCE = document.querySelector("#distance");
const PLANET_TIME = document.querySelector("#time");



DESCRIPTION_BTNS.forEach((button, i) => {
  button.addEventListener("click", () => {
    PLANET_PICTURE.src = DESTINATIONS[i].images.png;
    PLANET_HEADING.innerText = DESTINATIONS[i].name;
    PLANET_P.innerText = DESTINATIONS[i].description;
    PLANET_DISTANCE.innerText = DESTINATIONS[i].distance;
    PLANET_TIME.innerText = DESTINATIONS[i].travel;
  })
});




