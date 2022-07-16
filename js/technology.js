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

let btns = document.querySelectorAll(".btn");
let descImg = document.querySelector(".description-img");
let descSecondHeading = document.querySelector("#description-text-h2");
let descParagraph = document.querySelector("#description-text-p");



btns.forEach((btn, i) =>{
  btn.addEventListener("click",() => {
    descSecondHeading.innerText = TECHNOLOGY[i].name;
    descParagraph.innerText = TECHNOLOGY[i].description;
    descImg.src = TECHNOLOGY[i].images.portrait;
  });
})


for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    descSecondHeading.innerText = TECHNOLOGY[i].name;
    descParagraph.innerText = TECHNOLOGY[i].description;
    descImg.src = TECHNOLOGY[i].images.portrait;
  });
}
