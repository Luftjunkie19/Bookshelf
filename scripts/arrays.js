import Book from './initialBooks';

let currentBooks = [];
let myShelf = [
  new Book(
    "Biografia Leo Messiego",
    "Egmont Polska",
    185,
    0,
    "untouched",
    "https://ecsmedia.pl/c/messi-maly-chlopiec-ktory-stal-sie-wielkim-pilkarzem-b-iext108176917.jpg",
    `${new Date().getDate()},${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`
  ),
  new Book(
    "Od Nędzy do Pieniędzy",
    "Tad Witkiewicz",
    321,
    0,
    "untouched",
    "https://ecsmedia.pl/c/od-nedzy-do-pieniedzy-b-iext109951940.jpg",
    `${new Date().getDate()},${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`
  ),
  new Book(
    "Mądrzej, Szybciej, Lepiej",
    "Charles Duhigg",
    432,
    0,
    "untouched",
    "https://ecsmedia.pl/c/madrzej-szybciej-lepiej-sekret-efektywnosci-b-iext115598944.jpg",
    `${new Date().getDate()},${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`
  ),
  new Book(
    "Siła Nawyku",
    "Charles Duhigg",
    422,
    0,
    "untouched",
    "https://ecsmedia.pl/c/sila-nawyku-b-iext115551229.jpg",
    `${new Date().getDate()},${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`
  ),
  new Book(
    "Biografia Elona Muska",
    "Ashlee Vance",
    408,
    0,
    "untouched",
    "https://s.lubimyczytac.pl/upload/books/294000/294899/556278-352x500.jpg",
    `${new Date().getDate()},${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`
  ),
  new Book(
    "Pułapki Myślenia",
    "Daniel Kahneman",
    670,
    0,
    "untouched",
    "https://ecsmedia.pl/c/pulapki-myslenia-o-mysleniu-szybkim-i-wolnym-w-iext115551006.jpg",
    `${new Date().getDate()},${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`
  ),
  new Book(
    "Inteligencja Emocjonalna",
    "Daniel Goleman",
    528,
    0,
    "untouched",
    "https://ecsmedia.pl/c/inteligencja-emocjonalna-b-iext122787039.jpg",
    `${new Date().getDate()},${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`
  ),
  new Book(
    "Czerwona Kartka",
    "Ken Bensinger",
    490,
    0,
    "untouched",
    "https://www.wsqn.pl/wp-content/uploads/2022/10/czerwona-kartka-wsqnpl-front-1024x1024.jpg",
    `${new Date().getDate()},${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`
  ),
  new Book(
    "Potęga Podświadomości",
    "Joseph Murphy",
    270,
    0,
    "untouched",
    "https://ecsmedia.pl/c/potega-podswiadomosci-b-iext122284956.jpg",
    `${new Date().getDate()},${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`
  ),
  new Book(
    "Polska Myśl Szkoleniowa",
    "Michał Zachodny",
    390,
    0,
    "untouched",
    `https://bonito.pl/cache/0/59ed-polska-mysl-szkoleniowa_400.webp`,
    `${new Date().getDate()},${
      new Date().getMonth() + 1
    }.${new Date().getFullYear()}`
  ),
];

export default { myShelf };
