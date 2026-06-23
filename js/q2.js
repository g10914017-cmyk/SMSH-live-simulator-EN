console.log("課業", localStorage.getItem("課業"));
console.log("興趣", localStorage.getItem("興趣"));
console.log("人際", localStorage.getItem("人際"));
console.log("生涯", localStorage.getItem("生涯"));
console.log("娛樂", localStorage.getItem("娛樂"));

window.onload = function () {
  const name = localStorage.getItem("name");

  document.getElementById("story").innerText =
    `${name}高二開學過了一個學期，你發現自己選的類組跟自己想像的有點差異，有想考慮轉組，可是又要重新適應新的班級跟環境，跟好不容易認識的知心好友分開，你會怎麼做呢?`;
};

// 核心選擇邏輯
function choose(option) {
  console.log(option);
  switch (option) {
    case "A":
      add("娛樂", 5);
      add("人際", 1);
      break;

    case "B":
      add("人際", 5);
      add("課業", 1);
      break;

    case "C":
      add("課業", 3);
      add("生涯", 3);
      break;
  }
}

// localStorage 加分函式
function add(key, value) {
  console.log("+分成功");
  let current = Number(localStorage.getItem(key)) || 0;

  localStorage.setItem(key, current + value);

  console.log(key, current, value, current + value);
}
