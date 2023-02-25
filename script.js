const filterName = document.querySelector("header input");
const select = document.getElementById("city");
const busca = document.querySelector("header button");
const cards = document.querySelectorAll(".cards .card");

busca.addEventListener("click", filterText);

function filterText() {
  if (filterName.value != "") {
    for (let card of cards) {
      let title = card.querySelector("h3");
      title = title.textContent.toLocaleLowerCase();
      console.log(title);
      let filterTexts = filterName.value.toLocaleLowerCase();

      if (!title.includes(filterTexts)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block";
    }
  }

  if (select.value != "0") {
    for (let card of cards) {
      let titleCity = card.getElementsByClassName("location");
      titleCity = titleCity[0].innerText.toLocaleLowerCase();
      let filterTextCity = select.value;

      if (!titleCity.includes(filterTextCity)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block";
    }
  }
}
