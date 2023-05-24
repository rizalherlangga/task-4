let collapseOpen = false;

function Collapse() {
  let isiCollapse = document.getElementById("isi-collapse");

  if (!collapseOpen) {
    isiCollapse.style.display = "block";
    collapseOpen = true;
  } else {
    isiCollapse.style.display = "none";
    collapseOpen = false;
  }
}
