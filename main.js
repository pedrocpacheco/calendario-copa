function creategame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeiro do ${player2}">
     </li>
`;
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
`;
}

//Botão para deixar amarelo
document.getElementById("btnAmarelo").addEventListener("click", function () {
  document.querySelector("body").setAttribute("class", "yellow");
});

//Botão para deixar azul
document.getElementById("btnAzul").addEventListener("click", function () {
  document.querySelector("body").setAttribute("class", "blue");
});

//Botão para deixar verde
document.getElementById("btnVerde").addEventListener("click", function () {
  document.querySelector("body").setAttribute("class", "green ");
});

document.querySelector("#cards").innerHTML =
  //Primeira Rodada
  createCard(
    "21/11",
    "monday",
    creategame("england", "10:00", "iran") +
      creategame("senegal", "10:00", "netherlands") +
      creategame("usa", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "tuesday",
    creategame("argentina", "07:00", "arabia") +
      creategame("denmark", "10:00", "tunisia") +
      creategame("mexico", "13:00", "poland") +
      creategame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "wednesday",
    creategame("morocco", "07:00", "croatia") +
      creategame("germany", "10:00", "japan") +
      creategame("spain", "13:00", "costa") +
      creategame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "thursday",
    creategame("swit", "07:00", "cameroon") +
      creategame("uruguay", "10:00", "corea") +
      creategame("portugal", "13:00", "gana") +
      creategame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "friday",
    creategame("wales", "07:00", "iran") +
      creategame("qatar", "10:00", "senegal") +
      creategame("netherlands", "07:00", "iran") +
      creategame("england", "16:00", "usa")
  ) +
  createCard(
    "26/11",
    "saturday",
    creategame("tunisia", "07:00", "australia") +
      creategame("poland", "10:00", "arabia") +
      creategame("france", "13:00", "denmark") +
      creategame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "sunday",
    creategame("japan", "07:00", "costa") +
      creategame("belgium", "10:00", "morocco") +
      creategame("croatia", "13:00", "canada") +
      creategame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "monday",
    creategame("cameroon", "07:00", "serbia") +
      creategame("corea", "10:00", "gana") +
      creategame("brazil", "13:00", "swit") +
      creategame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "tuesday",
    creategame("ecuador", "12:00", "senegal") +
      creategame("netherlands", "12:00", "qatar") +
      creategame("iran", "16:00", "usa") +
      creategame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "wednesday",
    creategame("tunisia", "12:00", "france") +
      creategame("australia", "12:00", "denmark") +
      creategame("poland", "16:00", "argentina") +
      creategame("arabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "thursday",
    creategame("croatia", "12:00", "belgium") +
      creategame("canada", "12:00", "morocco") +
      creategame("japan", "16:00", "spain") +
      creategame("costa", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "friday",
    creategame("corea", "12:00", "portugal") +
      creategame("gana", "12:00", "uruguay") +
      creategame("serbia", "16:00", "swit") +
      creategame("cameroon", "16:00", "brazil")
  );
