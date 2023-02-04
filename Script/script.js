let container = document.querySelector(".container");
let tester = document.title;
function printCaloriseSection(name, cal) {
  let div = document.createElement("div");
  let Name = document.createTextNode(name);
  let calories = document.createTextNode(`Calories: ${cal}`);

  let spanName = document.createElement("span");
  spanName.style.fontWeight = "blod";
  spanName.style.color = "#09161d";

  let spanCalories = document.createElement("span");
  let SpanContainer = document.createElement("figure");

  spanName.appendChild(Name);
  spanCalories.appendChild(calories);

  SpanContainer.appendChild(spanName);
  SpanContainer.appendChild(spanCalories);

  div.appendChild(SpanContainer);
  container.appendChild(div);

  div.style.backgroundColor = "#80f5d2";
}

function printHexagonsWithContentForPerTab(
  num,
  symbole,
  name,
  family,
  mm,
  color
) {
  let div = document.createElement("div");
  color = "#" + color;
  // let oddColors = [
  //   "#unknowen",
  //   "#FFFFFF",
  //   "#D9FFFF",
  //   "#FFFFC7",
  //   "#D9FFC7",
  //   "#C7FFC7",
  //   "#A3FFC7",
  //   "#8FFFC7",
  // ];

  let Num = document.createTextNode(num);
  let Name = document.createTextNode(name);
  let Family = document.createTextNode(family);
  let MM = document.createTextNode(mm);
  let Symbole = document.createTextNode(symbole);

  let spanNum = document.createElement("span");
  let spanSymb = document.createElement("span");
  let spanName = document.createElement("span");
  let spanFamily = document.createElement("span");
  let spanMM = document.createElement("span");
  let SpanContainer = document.createElement("figure");

  spanNum.appendChild(Num);
  spanSymb.appendChild(Symbole);
  spanName.appendChild(Name);
  spanFamily.appendChild(Family);
  spanMM.appendChild(Num);
  SpanContainer.appendChild(spanSymb);
  SpanContainer.appendChild(spanNum);
  SpanContainer.appendChild(spanName);
  SpanContainer.appendChild(spanFamily);
  SpanContainer.appendChild(spanMM);
  div.appendChild(SpanContainer);
  container.appendChild(div);

  div.style.backgroundColor = color;
}

if (tester == "Desert Calorise") {
  // If you don't have a server :
  /*
fetch("https://mocki.io/v1/b23e6a5f-df8d-42e4-9f7d-73e335cc94da", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})

 */
  fetch("http://127.0.0.1:8000/caloriesTab", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data.data.forEach((ele) => {
        printCaloriseSection(ele.name, ele.calories.value);
      });
    });
} else {
  // If you don't have a server :
  /*
fetch("https://mocki.io/v1/4239b1b7-bd02-4257-9b9e-323bfece78ad", {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
})

 */
  fetch("http://127.0.0.1:8000/periodicTab", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      for (let key in data) {
        printHexagonsWithContentForPerTab(
          data[key].atomicNumber,
          data[key].symbol,
          data[key].name,
          data[key].group,
          data[key].atomicMass,
          data[key].cpkHexColor
        );
      }
    });
}

// data.forEach((e)=>{
//   printHexagonsWithContent(e.atomicNumber,e.name,e.group,e.atomicMass,e.cpkHexColor);
// })
