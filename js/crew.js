const CREW = [
  {
    name: "Douglas Hurley",
    images: {
      png: "../imgs/crew/image-douglas-hurley.png",
      webp: "./assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "../imgs/crew/image-mark-shuttleworth.png",
      webp: "./assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "../imgs/crew/image-victor-glover.png",
      webp: "./assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "../imgs/crew/image-anousheh-ansari.png",
      webp: "./assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

let buttons = document.querySelectorAll(".description-button");
let descriptionTitle = document.querySelector("#description-title");
let descriptionName = document.querySelector("#description-name");
let descriptionParagraph = document.querySelector("#description-paragraph");
let memberPhoto = document.querySelector("#member-photo");

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    removeActiveState();

    descriptionTitle.innerText = CREW[i].role;
    descriptionName.innerText = CREW[i].name;
    descriptionParagraph.innerText = CREW[i].bio;
    memberPhoto.src = CREW[i].images.png;
    button.classList.add("btn-active");
  });
});

function removeActiveState() {
  buttons.forEach((button) => {
    button.classList.remove("btn-active");
  });
}
