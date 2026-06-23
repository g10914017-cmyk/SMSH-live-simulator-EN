console.log("課業", localStorage.getItem("課業"));
console.log("興趣", localStorage.getItem("興趣"));
console.log("人際", localStorage.getItem("人際"));
console.log("生涯", localStorage.getItem("生涯"));
console.log("娛樂", localStorage.getItem("娛樂"));

window.onload = function () {
  const name = localStorage.getItem("name");

  document.getElementById("story").innerText =
    `學測考完了，恭喜你${name}來到了高中生涯的尾聲，但是時間有限，你會怎麼規劃剩下的這段時間，去努力不留遺憾呢?`;
};

// 選擇處理
function choose(option) {
  console.log(option);
  switch (option) {
    case "A":
      add("人際", 4);
      add("娛樂", 2);
      break;

    case "B":
      add("課業", 3);
      add("生涯", 3);
      break;

    case "C":
      add("興趣", 3);
      add("生涯", 3);
      break;

    case "D":
      add("娛樂", 6);
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
