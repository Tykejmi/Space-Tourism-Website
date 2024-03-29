const TECHNOLOGY = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "../imgs/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "../imgs/technology/image-spaceport-portrait.jpg",
      landscape: "./assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "../imgs/technology/image-space-capsule-portrait.jpg",
      landscape: "./assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const BTNS = document.querySelectorAll(".btn");
const DESCRIPTION_IMG = document.querySelector(".description-img");
const DESCRIPTION_H2 = document.querySelector("[description-text-h2]");
const DESCRIPTION_P = document.querySelector("[description-text-p]");



BTNS.forEach((btn, i) =>{
  btn.addEventListener("click",() => {
    DESCRIPTION_H2.innerText = TECHNOLOGY[i].name;
    DESCRIPTION_P.innerText = TECHNOLOGY[i].description;
    DESCRIPTION_IMG.src = TECHNOLOGY[i].images.portrait;
  });
})

