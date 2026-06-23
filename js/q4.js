console.log("課業", localStorage.getItem("課業"));
console.log("興趣", localStorage.getItem("興趣"));
console.log("人際", localStorage.getItem("人際"));
console.log("生涯", localStorage.getItem("生涯"));
console.log("娛樂", localStorage.getItem("娛樂"));

window.onload = function () {
  const name = localStorage.getItem("name");

  document.getElementById("story").innerText =
    `${name}，高三開學了，周遭開始瀰漫起準備大考的氣氛，看著同學們都漸漸開始念書，我是不是也該用功一點呢? 可是回顧過往，高中生活好像還有點遺憾…你會怎麼規劃這學期呢?`;
};

// 選擇邏輯
function choose(option) {
  console.log(option);
  switch (option) {
    case "A":
      add("課業", 5);
      add("生涯", 1);
      break;

    case "B":
      add("課業", 2);
      add("人際", 4);
      break;

    case "C":
      add("人際", 1);
      add("生涯", 2);
      add("興趣", 3);
      break;

    case "D":
      add("娛樂", 3);
      add("人際", 3);
      break;
  }
}

// 共用加分函式
function add(key, value) {
  console.log("+分成功");
  let current = Number(localStorage.getItem(key)) || 0;

  localStorage.setItem(key, current + value);

  console.log(key, current, value, current + value);
}
