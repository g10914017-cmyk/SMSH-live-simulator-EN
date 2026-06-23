console.log("課業", localStorage.getItem("課業"));
console.log("興趣", localStorage.getItem("興趣"));
console.log("人際", localStorage.getItem("人際"));
console.log("生涯", localStorage.getItem("生涯"));
console.log("娛樂", localStorage.getItem("娛樂"));

window.onload = function () {
  const name = localStorage.getItem("name");

  document.getElementById("story").innerText =
    `${name}，到了高二下，社團的朋友因為自己的身心狀況不佳，想把幹部退掉，希望能力很好又對社務有興趣的你，可以幫忙接下這個機會，繼續陪大家完成這學期的活動。你自己對社團也很有興趣，可是好像又快要考試了。`;
};

// 選擇處理
function choose(option) {
  console.log(option);
  switch (option) {
    case "A":
      add("興趣", 2);
      add("生涯", 2);
      add("人際", 2);
      break;

    case "B":
      add("娛樂", 4);
      add("人際", 2);
      break;

    case "C":
      add("課業", 4);
      add("人際", 2);
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
