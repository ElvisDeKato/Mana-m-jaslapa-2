let artists = JSON.parse(localStorage.getItem("artists")) || [
  {
    id: 1,
    name: "STIRNA",
    genre: "Pop / Indie",
    bio: "Latvian indie pop artist.",
    photo: "https://picsum.photos/400?1",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    photo: "",
    favorite: false
  },
  {
    id: 2,
    name: "BŪŪ",
    genre: "Alternatīvā pop mūzika",
    bio: "Būū (Ilze Fārte) ir latviešu dziedātāja, kura izdevusi romantiskas balādes un 2023. gada vasarā ierakstījusi dzīvo koncertierakstu.",
    photo: "https://picsum.photos/400?2",
    video: "https://youtu.be/0OHXH-zCSLo",
    photo: "https://img.1188.lv/v4/202402/866/333/4/3cacf62a03bd86496a7d22f80b9fb68a.jpg",
    favorite: false
  }
];

display();

/* CURSOR */
document.addEventListener("mousemove", e => {
  const c = document.querySelector(".cursor");
  c.style.left = e.clientX + "px";
  c.style.top = e.clientY + "px";
});

/* SAVE */
function save(){
  localStorage.setItem("artists", JSON.stringify(artists));
  display();
}

/* ADD */
function addArtist(){
  artists.push({
    id: Date.now(),
    name: name.value,
    genre: genre.value,
    bio: bio.value,
    photo: photo.value,
    video: video.value,
    favorite: false
  });

  save();
}

/* DISPLAY */
function display(list = artists){
  const box = document.getElementById("list");
  box.innerHTML = "";

  list.forEach(a => {
    const el = document.createElement("div");
    el.className = "card";

    el.innerHTML = `<img src="${a.photo}">`;

    el.onclick = () => openModal(a);

    box.appendChild(el);
  });
}

/* MODAL */
function openModal(a){
  const m = document.getElementById("modal");
  m.style.display = "flex";

  m.querySelector(".modal-content").innerHTML = `
    <h1>${a.name}</h1>
    <p>${a.genre}</p>
    <p>${a.bio}</p>

    ${a.video ? `<iframe src="${a.video}" frameborder="0"></iframe>` : ""}
  `;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

/* SEARCH */
function searchArtists(){
  const val = search.value.toLowerCase();
  display(artists.filter(a =>
    a.name.toLowerCase().includes(val)
  ));
}

/* SCROLL */
function scrollToArtists(){
  document.querySelector(".artists")
    .scrollIntoView({behavior:"smooth"});
}