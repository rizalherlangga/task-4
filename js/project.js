// let namaSiswa1 = " jamal";
// let namaSiswa2 = " didi";
// let namaSiswa3 = " apoy";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// // ini array
// let namaSiswa = ["apoy", "aji", "apus", "marwan"];
// console.log(namaSiswa);
// console.log(namaSiswa[2]);
// console.log(namaSiswa[0]);

// //ini object
// let nama = "rizal";
// let alamat = "jakarta pusat";
// let umur = 20;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// let dataPeronal1 = {
//   nama: "akmal",
//   alamat: "jakarta barat",
//   umur: 19,
// };
// let dataPeronal2 = {
//   nama: "yadi",
//   alamat: "jakarta pusat",
//   umur: 27,
// };
// let dataPeronal3 = {
//   nama: "darma",
//   alamat: "jakarta timur",
//   umur: 23,
// };

// console.log(dataPeronal1);
// console.log(dataPeronal2);
// console.log(dataPeronal3);
// console.log(dataPeronal3.nama);

// //arrat of object
// let dataCaleg = [
//   { nama: "joko widodo", alamat: "solo" },
//   { nama: "anies baswedan", alamat: "yogyakarta" },
//   { nama: "prabowo subianto", alamat: "jakarta" },
// ];

// console.log(dataCaleg);
// console.log(dataCaleg[2].nama);

function emptyFormAlert() {
  let projectName = document.getElementById("input-nama").value;
  let projectStart = document.getElementById("input-start").value;
  let projectEnd = document.getElementById("input-end").value;
  let projectDescription = document.getElementById("input-deskripsi").value;
  let projectImage = document.getElementById("input-image").value;

  if (projectName == "") {
    return alert("Input ProjectAnda");
  } else if (projectStart == "") {
    return alert("input tanggal mulai project");
  } else if (projectEnd == "") {
    return alert("input tanggal berakhir project");
  } else if (projectDescription == "") {
    return alert("input deskripsi project anda");
  } else if (projectImage == "") {
    return alert("input image project anda");
  }
}

let projectData = [];

function postProject(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-nama").value;
  let projectStart = document.getElementById("input-start").value;
  let projectEnd = document.getElementById("input-end").value;
  let projectDescription = document.getElementById("input-deskripsi").value;
  let projectImage = document.getElementById("input-image").files;

  const jsIcon = '<i class="fa-brands fa-square-js fa-xl fa-fw"></i>';
  const bootstrapIcon = '<i class="fa-brands fa-bootstrap fa-xl fa-fw"></i>';
  const goIcon = '<i class="fa-brands fa-golang fa-xl fa-fw"></i>';
  const reactIcon = '<i class="fa-brands fa-react fa-xl fa-fw"></i>';

  let jsIconDecide = document.getElementById("input-js").checked ? jsIcon : "";
  let bootstrapIconDecide = document.getElementById("input-bootstrap").checked
    ? bootstrapIcon
    : "";
  let goIconDecide = document.getElementById("input-golang").checked
    ? goIcon
    : "";
  let reactIconDecide = document.getElementById("input-react").checked
    ? reactIcon
    : "";

  projectImage = URL.createObjectURL(projectImage[0]);
  console.log(projectImage);

  let projectPreviewCard = {
    projectName,
    projectStart,
    projectEnd,
    projectDescription,
    jsIconDecide,
    bootstrapIconDecide,
    goIconDecide,
    reactIconDecide,
    projectImage,
  };

  projectData.push(projectPreviewCard);
  console.log(projectData);

  renderPpc();
}

function renderPpc() {
  let html = "";

  for (let index = 0; index < projectData.length; index++) {
    html += `
      <div class="project-card">
      <img src="${projectData[index].projectImage}" alt="1"/>
      <a href="project-detail.html" style="color: black">
          <h4>${projectData[index].projectName}</h4>
      </a>
      <p class="durasi">${projectData[index].projectStart} - ${projectData[index].projectEnd}</p>
      <p class="deskripsi">${projectData[index].projectDescription}</p>
      <div class="gambar">
          ${projectData[index].jsIconDecide}
          ${projectData[index].bootstrapIconDecide}
          ${projectData[index].goIconDecide}
          ${projectData[index].reactIconDecide}
      </div>
      <div class="ini-data">
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
      </div>
      </div>`;
  }

  document.getElementById("kartu-t").innerHTML = html;
}
