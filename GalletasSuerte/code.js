const cookieBTN = document.querySelector(".cookie");
const cite = document.querySelector(".cite");
const p = document.querySelector(".author");
const citeContainer = document.querySelector(".cite--container");
const reloadBTN = document.querySelector(".reload");

let veri = false;
let author;
let cites;

const appear = (content, author) => {
  if (!veri) {
    const text = document.createTextNode(content);
    const textAuthor = document.createTextNode(author);
    cite.appendChild(text);
    p.appendChild(textAuthor);
    citeContainer.classList.add("appear");
    cookieBTN.classList.add("desappear");
    veri = true;
  }
};

const loadCites = async () => {
  const request = await fetch("src/cites.txt");
  const content = await request.json();
  const arr = content.content;
  const randomNum = parseInt(Math.random() * arr.length);

  const randomCite = {
    author: arr[randomNum].author,
    cite: arr[randomNum].cite,
  };

  return randomCite;
};

const reload = () => {
  veri = false;
  cite.textContent = "";
  p.textContent = "";

  loadCites().then(randomCite => {
    author = randomCite.author;
    cites = randomCite.cite;
    appear(cites, author);
  });
};

cookieBTN.addEventListener("click", () => {
  if (cites && author) {
    appear(cites, author);
  } else {
    loadCites().then(randomCite => {
      author = randomCite.author;
      cites = randomCite.cite;
      appear(cites, author);
    });
  }
});

reloadBTN.addEventListener("click", () => {
  reload();
});


document.addEventListener("DOMContentLoaded", () => {
  const addZeros = (n) => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
  };
  const actualizarHora = () => {
    const time = new Date();
    let hora = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let seg = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
  };
  actualizarHora();
  setInterval(actualizarHora, 1000);
});