const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const buildingSelect = document.getElementById("building");

populateUI();

let totals = +buildingSelect.value;


// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(seat.classList.add("selected"));
      }
    });
  }

  const selectedbuildingIndex = localStorage.getItem("selectedbuildingIndex");

  if (selectedbuildingIndex !== null) {
    buildingSelect.selectedIndex = selectedbuildingIndex;
    console.log(selectedbuildingIndex)
  }
}
console.log(populateUI())
// building select event
buildingSelect.addEventListener("change", (e) => {
  total = +e.target.value;
  setbuildingData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
            
// Initial count and total set
updateSelectedCount();

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;

  if (selectedSeatsCount > 1) {
    // הסר את הסמן מהכיסאות הנוספות שנבחרו
    selectedSeats.forEach((seat) => {
      seat.classList.remove("selected");
    });

    alert("ניתן לבחור רק כיסא אחד.");
  }

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  count.innerText = selectedSeatsCount === 0 ? 0 : selectedSeatsCount;
 
  total.innerText = selectedSeatsCount > 0 ? selectedSeatsCount * total : "0";

   setbuildingData(buildingSelect.selectedIndex, buildingSelect.value);
}
