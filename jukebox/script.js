let containerForAlbumNames = document.getElementById("container");
let genre = "";

//buttons
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

init();

function init() {
  fetchData("data/albums.json").then(function (data) {
    console.log(data);

    const albums = data.albums;
    containerForAlbumNames.innerHTML = "";
    albums.forEach(function (album) {
      if (album.tracks[0].genre.name == genre || genre == "") {
        let pElement = document.createElement("p");
        pElement.innerText = album.title;
        containerForAlbumNames.appendChild(pElement);
      }
    });
  });
}

function setGenre(e) {
  console.log(e.target.innerText);
  genre = e.target.innerText;
  init();
}

btn0.onclick = setGenre;
btn1.onclick = setGenre;
btn2.onclick = setGenre;

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
