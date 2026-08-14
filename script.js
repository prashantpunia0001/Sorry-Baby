const jokes = [
    "Humari chats ka 10% conversation aur 90% “kuch nahi” hota hai. 😂",

    "Relationship ka golden rule: “Main gussa nahi hoon” ka matlab usually… kuch toh gadbad hai. 😭😂",

    "Tum: Bas 5 minute baat karungi. Also tum: 2 ghante later 👀😂",

    "Hum dono ek dusre ko irritate bhi karte hain aur phir khud hi hasne lagte hain. 😂❤️",

    "Tumhara gussa aur meri manana ki skill… dono ka competition chal raha hai. 😭",

    "Relationship status: ek dusre ko tang karo, phir ek dusre ke bina bhi nahi rehna. 🤝😂"
];

let jokeIndex = 0;


/* =========================
   SCREEN NAVIGATION
========================= */

function showScreen(id) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(id);

    if (nextScreen) {

        nextScreen.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
}


/* =========================
   NEXT JOKE
========================= */

function nextJoke() {

    jokeIndex++;

    if (jokeIndex >= jokes.length) {
        jokeIndex = 0;
    }

    const jokeBox = document.getElementById("joke");

    if (!jokeBox) return;

    jokeBox.style.opacity = "0";

    setTimeout(() => {

        jokeBox.textContent = jokes[jokeIndex];

        jokeBox.style.opacity = "1";

    }, 200);
}


/* =========================
   CUTE FLOATING ELEMENTS
========================= */

function createFloatingElement() {

    const element = document.createElement("div");

    const symbols = [
        "🤍",
        "✨",
        "🌸",
        "🍊",
        "🌹"
    ];

    element.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    element.style.position = "fixed";
    element.style.left = Math.random() * 100 + "vw";
    element.style.bottom = "-30px";

    element.style.fontSize =
        (15 + Math.random() * 15) + "px";

    element.style.opacity = "0.7";

    element.style.pointerEvents = "none";

    element.style.zIndex = "10";

    element.style.transition =
        "transform 5s linear, opacity 5s linear";

    document.body.appendChild(element);


    setTimeout(() => {

        element.style.transform =
            `translateY(-110vh) rotate(${Math.random() * 360}deg)`;

        element.style.opacity = "0";

    }, 50);


    setTimeout(() => {

        element.remove();

    }, 5200);
}


/* =========================
   START FLOATING EFFECT
========================= */

setInterval(createFloatingElement, 900);
