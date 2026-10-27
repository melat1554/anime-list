const animeList = [
  {
    id: 1,
    title: "Serial Experiments Lain",
    releaseDate: "July 6, 1998",
    image: "images/lain.jpg",
    why: "In a world where technology blurs the line between reality and the digital world, who are we really? Serial Experiments Lain explores identity, isolation, and human connection, questioning whether being connected to everyone means truly knowing anyone."
  },
  {
    id: 2,
    title: "Fullmetal Alchemist: Brotherhood",
    releaseDate: "April 5, 2009",
    image: "images/Fullmetal Alchemist.jpg",
    why: "Every choice has consequences. Through the Elric brothers' journey, we explore sacrifice, responsibility, and the limits of human ambition. It reminds us that the things that matter most cannot always be gained through power."
  },
  {
    id: 3,
    title: "Death Note",
    releaseDate: "October 4, 2006",
    image: "images/death note.jpg",
    why: "What happens when someone believes they have the right to decide who deserves to live? Death Note challenges our understanding of justice and morality, revealing how easily the pursuit of a perfect world can become an excuse for cruelty."
  },
  {
    id: 4,
    title: "Psycho-Pass",
    releaseDate: "October 12, 2012",
    image: "images/Psycho-Pass.jpg",
    why: "Can a system truly measure a person's potential for evil? Psycho-Pass questions whether security is worth sacrificing freedom and individuality, challenging us to consider who should have the power to define what is right."
  },
  {
    id: 5,
    title: "Mob Psycho 100",
    releaseDate: "July 12, 2016",
    image: "images/Mob psycho 100.jpg",
    why: "Being powerful doesn't automatically make you a better person. Mob's journey shows that emotional maturity, kindness, and genuine relationships matter more than talent. Our worth comes from who we choose to become."
  },
  {
    id: 6,
    title: "Violet Evergarden",
    releaseDate: "January 11, 2018",
    image: "images/Violet Evergarden.jpg",
    why: "Some feelings are difficult to understand until we experience the stories of others. Through grief, love, and healing, Violet learns what words cannot always explain: understanding another person's pain can change the way we see the world."
  },
  {
    id: 7,
    title: "Vinland Saga",
    releaseDate: "July 8, 2019",
    image: "images/vinland saga.jpg",
    why: "Revenge can consume a person until nothing remains of who they once were. Vinland Saga explores redemption, forgiveness, and the meaning of true strength, asking whether we can choose peace in a world shaped by violence."
  },
  {
    id: 8,
    title: "Monster",
    releaseDate: "April 7, 2004",
    image: "images/monster.jpg",
    why: "What makes someone a monster: their actions, their past, or the world that shaped them? Monster explores morality, trauma, and the value of human life, forcing us to confront the darkness within humanity without losing sight of its capacity for good."
  }
];

const catalog = document.getElementById("catalog");
const searchInput = document.querySelector("#search");
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

function renderCards(list) {
  catalog.textContent = "";

  if (list.length === 0) {
    catalog.textContent = "No anime found.";
    return;
  }

  list.forEach((anime) => {
    const card = document.createElement("article");
    card.className = "card";
    if (anime.favorite) card.classList.add("favorite");

    const img = document.createElement("img");
    img.src = anime.image;
    img.alt = anime.title;

    const info = document.createElement("div");
    info.className = "info";

    const title = document.createElement("h3");
    title.textContent = anime.title;

    const date = document.createElement("p");
    date.className = "date";
    date.textContent = `Released: ${anime.releaseDate}`;

    const label = document.createElement("h4");
    label.textContent = "Why it's meaningful:";

    const why = document.createElement("p");
    why.className = "why";
    why.textContent = anime.why;

    const button = document.createElement("button");
    button.className = "fav-btn";
    button.textContent = anime.favorite ? "♥ Favorited" : "♡ Favorite";
    button.addEventListener("click", () => {
      anime.favorite = !anime.favorite;
      card.classList.toggle("favorite", anime.favorite);
      button.textContent = anime.favorite ? "♥ Favorited" : "♡ Favorite";
    });

    info.appendChild(title);
    info.appendChild(date);
    info.appendChild(label);
    info.appendChild(why);
    info.appendChild(button);

    card.appendChild(img);
    card.appendChild(info);
    catalog.appendChild(card);
  });
}

function searchAnime() {
  const text = searchInput.value.toLowerCase();

  const filtered = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(text)
  );

  renderCards(filtered);
}

searchInput.addEventListener("input", searchAnime);

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

renderCards(animeList);