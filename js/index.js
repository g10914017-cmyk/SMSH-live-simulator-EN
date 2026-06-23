const startBtn = document.getElementById("start-btn");
console.log(startBtn);

startBtn.addEventListener("click", startGame);

// 點擊任意地方播放音樂（只會觸發一次）
window.addEventListener(
  "click",
  () => {
    document.getElementById("bgm").play();
  },
  { once: true },
);

function startGame() {
  const name = document.getElementById("nameInput").value.trim();

  const error = document.getElementById("errorMsg");

  error.innerText = "";

  // 驗證：不可空白
  if (name.length === 0) {
    error.innerText = "姓名不可為空";
    return;
  }

  // 驗證：最多7字
  if (name.length > 7) {
    error.innerText = "Name should less than 8 words";
    return;
  }

  // 存姓名
  localStorage.setItem("name", name);

  // 初始化分數
  localStorage.setItem("課業", 0);
  localStorage.setItem("興趣", 0);
  localStorage.setItem("人際", 0);
  localStorage.setItem("生涯", 0);
  localStorage.setItem("娛樂", 0);

  // 清理舊資料（保險）
  localStorage.removeItem("answers");

  // 下一頁
  window.location.href = "q1.html";
}
