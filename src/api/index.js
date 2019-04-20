export default function getFavoriteShowsByUserId(id) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (id) return resolve(mockData.find(x => x.userId === id));
      return reject(
        new Error("you have angered the gods; UserId is a required paramater")
      );
    }, 1000);
  });
}

const mockData = [
  {
    userId: "broadwaycom",
    shows: [
      {
        title: `The Book of Mormon`,
        poster:
          "https://imaging.broadway.com/images/poster-178275/w230/222222/93157-3.png",
        category: "broadway",
        url: "https://www.broadway.com/shows/book-mormon/"
      },
      {
        title: `Avenue Q`,
        poster:
          "https://imaging.broadway.com/images/poster-178275/w230/222222/13942-3.jpg",
        category: "off-broadway",
        url: "https://www.broadway.com/shows/avenue-q-off-bway/"
      },
      {
        title: `Dear Evan Hansen`,
        poster:
          "https://imaging.broadway.com/images/poster-178275/w230/222222/102147-1.jpg",
        category: "broadway",
        url: "https://www.broadway.com/shows/dear-evan-hansen/"
      },
      {
        title: `The Lion King`,
        poster:
          "https://imaging.broadway.com/images/poster-178275/w230/222222/93607-3.jpg",
        category: "broadway",
        url: "https://www.broadway.com/shows/the-lion-king/"
      },
      {
        title: `Wicked`,
        poster:
          "https://imaging.broadway.com/images/poster-178275/w230/222222/93168-2.png",
        category: "broadway",
        url: "https://www.broadway.com/shows/wicked/"
      }
    ]
  },
  {
    userId: "testyMcgee",
    shows: [
      {
        title: `show1`,
        category: "broadway",
        url: "/show1"
      },
      {
        title: `show2`,
        category: "off-broadway",
        url: "/show2"
      },
      {
        title: `show3`,
        category: "broadway",
        url: "/show3"
      }
    ]
  }
];
