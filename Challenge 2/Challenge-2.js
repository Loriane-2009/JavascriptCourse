"use strict"

//Données de l'API
const user = {
  firstName: "   Bruce",
  lastName: "$pringsteen",
  age: "72 years old",
  isBoss: true,
  nextTourDate: new Date("May 31, 2025 20:00").getTime(),
  albums: [
    {
      title: "Greetings from Asbury Park, NJ",
      year: 1973,
      rymScore: 3.59
    },
    {
      title: "The Wild, the Innocent & the E Street Shuffle",
      year: 1973,
      rymScore: 3.76
    },
    {
      title: "Born to Run",
      year: 1975,
      rymScore: 3.98
    },
    {
      title: "Darkness on the Edge of Town",
      year: 1978,
      rymScore: 3.93
    },
    {
      title: "The River",
      year: 1980,
      rymScore: 3.76
    },
    {
      title: "Nebraska",
      year: 1982,
      rymScore: 3.87
    },
    {
      title: "Born in the U.S.A.",
      year: 1984,
      rymScore: 3.71
    },
    {
      title: "Tunnel of Love",
      year: 1987,
      rymScore: 3.52
    },
    {
      title: "Human Touch",
      year: 1992,
      rymScore: 2.97
    },
    {
      title: "The Ghost of Tom Joad",
      year: 1995,
      rymScore: 3.38
    },
    {
      title: "The Rising",
      year: 2002,
      rymScore: 3.56
    },
    {
      title: "Devils & Dust",
      year: 2005,
      rymScore: 3.42
    },
    {
      title: "We Shall Overcome: The Seeger Sessions",
      year: 2006,
      rymScore: 3.7
    },
    {
      title: "Magic",
      year: 2007,
      rymScore: 3.48
    },
    {
      title: "Working on a Dream",
      year: 2009,
      rymScore: 2.95
    },
    {
      title: "Wrecking Ball",
      year: 2012,
      rymScore: 3.27
    },
    {
      title: "High Hopes",
      year: 2014,
      rymScore: 2.97
    },
    {
      title: "Western Stars",
      year: 2019,
      rymScore: 3.27
    },
    {
      title: "Letter to You",
      year: 2020,
      rymScore: 3.42
    }
  ]
};

//Exercice 1
const cleanFirstName = user.firstName.trim()
const cleanLastName = user.lastName.replace("$", "S")
console.log("1. Cher " + cleanFirstName + " " + cleanLastName + ", bienvenue dans votre dashboard")

const age = parseInt(user.age)
console.log("Vous aurez " + (age + 1) + " ans l'année pro")

//Exercice 2
const nextDate = user.nextTourDate
const dateNow = Date.now()
const duree = nextDate - dateNow

function countDown(duree) {
  const days = Math.floor(duree / (1000 * 60 * 60 * 24));
  const hours = Math.floor((duree % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((duree % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duree % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const result = countDown(duree);
const dayText = result.days > 1 ? "jours" : "jour"

console.log(`${result.days} ${dayText}, ${result.hours} heures, ${result.minutes} minutes, ${result.seconds} secondes`);

//Exercice 3 - Tri alphabétique
const monTab = user.albums

monTab.sort((a, b) => a.title.localeCompare(b.title));

console.log(monTab)
for (const album of user.albums) {
  console.log(album.title)
}

//Ex Chat Trouver l'album avec la meilleure note
function getBestRated(albums){
  let leMeilleurAlbum = albums[0]

  for (const album of albums) {
    if(album.rymScore > leMeilleurAlbum.rymScore){
      leMeilleurAlbum = album
    }
  }
console.log(`Le meilleur album est ${leMeilleurAlbum.title} avec la note de ${leMeilleurAlbum.rymScore}`)
}
getBestRated(user.albums)


const tab = [3, 7, 2, 9, 4]
const max = Math.max(...tab)
console.log(max)