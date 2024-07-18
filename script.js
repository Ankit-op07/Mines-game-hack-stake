const bet = document.getElementById("btn");
const mineCount = 4;
let minesArray = [];

const getProgressBar = () => {
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = `0%`;
    progressBar.innerHTML = `0%`;
    progressBar.setAttribute("aria-valuenow", "0");
  let progress = 0;
  const interval = setInterval(() => {
    progress += 25;
    progressBar.style.width = `${progress}%`;
    progressBar.innerHTML = `${progress}%`;
    progressBar.setAttribute("aria-valuenow", progress.toString());

    if (progress >= 100) {
      clearInterval(interval);
      const progressCont = document.querySelector(".progress");
      console.log(progressCont);
      progressCont.style.display = "none";

      getFinalResult();
    }
  }, 1000);
};

const getFinalResult = () => {
  const mines = document.getElementsByClassName("mine");
  minesArray = Array.from(mines);
  minesArray.forEach((mine) => {
    // mine.style.backgroundColor = "#2f4553";
    if (mine.querySelector("img") !== null) {
      mine.removeChild(mine.querySelector("img"));
      mine.style.backgroundColor = "#2f4553";
    }
  });
  minesArray = [];
  const lastNums = [];
  let count = 0;
  for (let i = 0; count !== mineCount; i++) {
    const randomNum = Math.floor(Math.random() * 25 + 1);
    if (lastNums.includes(randomNum)) {
      continue;
    }
    lastNums.push(randomNum);
    count += 1;
    const mine = document.getElementById(`mine${randomNum}`);
    minesArray.push(mine);
    // mine.style.backgroundColor = 'red';
    const img = document.createElement("img");
    img.style.borderRadius = "0.5rem";
    img.src = "./diamond.png";
    img.width = 70;
    img.height = 70;
    mine.appendChild(img);
    mine.style.backgroundColor = "#071824";
  }
  console.log(minesArray);
};

// function name was placeBet
async function placeBet() {
  const value1 = document.getElementById("activeSeed").value;
  const value2 = document.getElementById("serverSeed").value;
  if (!(value1 && value2)) {
    const msg = document.getElementById("errorMessage");
    msg.innerHTML = "Please fill both the fields with correct seeds.";
    msg.style.color = "red";
    return;
  } else {
    const msg = document.getElementById("errorMessage");
    msg.innerHTML = "";
  }
  const progressCont = document.querySelector(".progress");
  console.log(progressCont);
  progressCont.style.display = "block";

  getProgressBar();
}

// function mineOpen(id) {
//   const mineId = id;
//   const mine = document.getElementById(mineId);
//   if (minesArray.includes(mine)) {
//     console.log("you lost");
//     minesArray.forEach((mine) => {
//       // mine.style.backgroundColor = 'red';
//       const img = document.createElement('img');
//       img.style.borderRadius = '0.5rem';
//       img.src = './bomb.png';
//       img.width = 70;
//       img.height = 70;
//       mine.appendChild(img)
//       mine.style.backgroundColor = '#071824';
//     })
//     return;
//   }
//   const img = document.createElement('img');
//   img.style.borderRadius = '0.5rem';
//   img.src = './diamond.png';
//   img.width = 70;
//   img.height = 70;
//   mine.appendChild(img)
//   mine.style.backgroundColor = '#071824';
// }
