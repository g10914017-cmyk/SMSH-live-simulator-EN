console.log("課業", localStorage.getItem("課業"));
console.log("興趣", localStorage.getItem("興趣"));
console.log("人際", localStorage.getItem("人際"));
console.log("生涯", localStorage.getItem("生涯"));
console.log("娛樂", localStorage.getItem("娛樂"));

window.onload = function () {
  // 🔥 每次進入 q1 先清空（重玩機制）
  localStorage.removeItem("課業");
  localStorage.removeItem("興趣");
  localStorage.removeItem("人際");
  localStorage.removeItem("生涯");
  localStorage.removeItem("娛樂");

  // 重新初始化分數
  initScores();

  const name = localStorage.getItem("name");

  document.getElementById("story").innerText =
    `${name}你高二開學了，現在開始會幫自己擬定開學的計畫，你會如何安排高二這段時間的生活重心?`;
};

// 初始化（如果第一次進來確保存在）
function initScores() {
  localStorage.setItem("課業", 0);
  localStorage.setItem("興趣", 0);
  localStorage.setItem("人際", 0);
  localStorage.setItem("生涯", 0);
  localStorage.setItem("娛樂", 0);
}

// 選擇處理
function choose(option) {
  console.log(option);
  switch (option) {
    case "A":
      add("課業", 3);
      add("人際", 1);
      add("生涯", 2);
      break;

    case "B":
      add("興趣", 1);
      add("人際", 1);
      add("娛樂", 4);
      break;

    case "C":
      add("興趣", 2);
      add("人際", 1);
      add("生涯", 2);
      add("課業", 1);
      break;

    case "D":
      add("人際", 3);
      add("生涯", 1);
      add("興趣", 1);
      add("娛樂", 1);
      break;
  }
}

// 加分函式
function add(key, value) {
  console.log("+分成功");
  let current = Number(localStorage.getItem(key)) || 0;

  localStorage.setItem(key, current + value);

  console.log(key, current, value, current + value);
}
