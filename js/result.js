console.log("課業", localStorage.getItem("課業"));
console.log("興趣", localStorage.getItem("興趣"));
console.log("人際", localStorage.getItem("人際"));
console.log("生涯", localStorage.getItem("生涯"));
console.log("娛樂", localStorage.getItem("娛樂"));
window.onload = function () {
  const name = localStorage.getItem("name");

  // 主標題
  document.getElementById("story").innerText =
    `${name}，Congratulations on completing your three years of high school. You have lived through three unforgettable and meaningful years.`;

  // 讀取分數
  const scores = {
    課業: Number(localStorage.getItem("課業")) || 0,
    興趣: Number(localStorage.getItem("興趣")) || 0,
    人際: Number(localStorage.getItem("人際")) || 0,
    生涯: Number(localStorage.getItem("生涯")) || 0,
    娛樂: Number(localStorage.getItem("娛樂")) || 0,
  };

  // 產生結果文字
  let resultText = "";

  resultText += getResult(
    "課業",
    scores.課業,
    "18 in acacdemic grades. Because I have neglected my studies for a long time, it is not surprising that I did not meet the required scores in many subjects on the entrance exam. I am now considering whether to take on the challenge of preparing for the subject-based exam, or to spend another year retaking the exam. Looking ahead, I feel completely lost and uncertain about the future...",
    "18 in acacdemic grades. While you enriched your high school life, you also managed to balance your studies well. Your exam results met expectations, and now you only need to focus on interviews and work toward your dream major as much as possible.",
    "18 in acacdemic grades. Over these three years, you focused heavily on your studies. Although you had fewer opportunities to spend time with others, your academic performance turned out even better than you expected. With tears of relief, you prepare to enter a top university program.",
  );

  resultText += getResult(
    "興趣",
    scores.興趣,
    "10 in hobby. After three years of youth, I accidentally missed out on some things I enjoyed. I sometimes feel envious when I see what others have experienced, so I plan to fully explore my interests and enjoy life in college.",
    "10 in hobby. Sometimes I have to make choices between daily responsibilities and my hobbies, but I have still been able to follow my favorite celebrities and do the things I enjoy. They have also been an important source of support for me during difficult times.",
    "10 in hobby. You have spent a lot of time doing things you are passionate about, and your understanding and experience of those passions already go far beyond that of your peers.",
  );

  resultText += getResult(
    "人際",
    scores.人際,
    "18 in relationship. After graduation, I still feel somewhat distant from others. Sometimes it is even hard to find someone to have a meal with and talk to. In the future, I hope to make more friends during college.",
    "18 in relationship. While living a serious and responsible life, I have also made many friends. Although we sometimes cannot always spend time together due to different commitments, we are always very happy whenever we do meet up.",
    "18 in relationship. You spend a lot of time making friends, and they are almost the main factor in your decisions. Because of them, your life has been enriched in many different ways, and they have become a unique and irreplaceable part of your high school youth.",
  );

  resultText += getResult(
    "生涯",
    scores.生涯,
    "12 in career. I am still a bit confused about what major to choose for the future, and I am not sure whether I will be able to complete four years of university. I ended up applying for a program that others recommended, but I am worried that I may lose interest and even risk being expelled.",
    "12 in career. I have a preliminary understanding and plan for my future. I can roughly confirm the direction I want to take, and I am also willing to explore more with an open mind.",
    "12 in career. I have a clear understanding of what I want to do in the future, as well as my development direction over the next four years and the goals for each stage. By making use of university resources, I will be able to achieve my dreams more efficiently.",
  );

  resultText += getResult(
    "娛樂",
    scores.娛樂,
    "22 in entertainment. Over the past three years, I often put myself under a lot of pressure and felt emotionally drained, leaving almost no room for leisure or relaxation. While staying focused on my goals, I also unknowingly missed out on many moments of laughter.",
    "22 in entertainment.I have been living seriously while also making time for fun. Although I have a lot going on, entertainment is something that cannot be ignored. Relaxing and taking care of my mental and physical well-being has also helped other areas of my life.",
    "22 in entertainment.You really love having fun—nice! Enjoying life is a skill in itself, and your high school life must have been really exciting. Although you might have to pay a bit of a price in the future, you’re ready for it, right?",
  );

  document.getElementById("resultBox").innerHTML = resultText;
};

// 判斷函式
function getResult(title, value, low, mid, high) {
  let text = "";

  if (title === "課業") {
    if (value <= 5) text = low;
    else if (value <= 10) text = mid;
    else text = high;
  }

  if (title === "興趣") {
    if (value <= 3) text = low;
    else if (value <= 7) text = mid;
    else text = high;
  }

  if (title === "人際") {
    if (value <= 6) text = low;
    else if (value <= 12) text = mid;
    else text = high;
  }

  if (title === "生涯") {
    if (value <= 3) text = low;
    else if (value <= 7) text = mid;
    else text = high;
  }

  if (title === "娛樂") {
    if (value <= 7) text = low;
    else if (value <= 14) text = mid;
    else text = high;
  }

  return `<p><b>${title}</b>：${value}分 → ${text}</p>`;
}
