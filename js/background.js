const images=[
     "0.jpg",
     "3.jpg",
     "4.jpg",
     "5.jpg",
     "6.jpg",
     "7.jpg",
     "9.jpg"
];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");
bgImage.src=`img/${chosenImage}`;
bgImage.className="bg";

document.body.appendChild(bgImage);