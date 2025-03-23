// 음악 파일 경로
const musicFiles = {
  song1: {
      file: "mp3/BOYNEXTDOOR-'today I love you'.mp4", 
      title: "오늘만 I love you"
  },
  song2: {
      file: "mp3/Same age. - Hoshi and Woozi.mp4", 
      title: "동갑내기"
  },
  song3: {
      file: "mp3/IVE -ATTITUDE.mp4", 
      title: "ATTITUDE"
  },
  song4: {
    file: "mp3/Unbelievable-Lucy.mp3", 
    title: "아니 근데 진짜"
  },
  song5: {
    file: "mp3/Whiplash-Espa", 
    title: "Whiplash"
  },
  song6: {
    file: "mp3/Ditto-NewJeans.mp3", 
    title: "Ditto"
  }
};

// 게임 설명을 표시하는 함수
function showGameDescription() {
  const description = `
    <h2>게임 설명</h2>
    <ol>
      <li>1. 선곡된 음악에 집중하세요.</li>
      <li>2. 빈칸에 곡 제목을 적어주세요.</li>
      <li>3. 정답 또는 오답을 확인합니다.</li>
      <li>4. 정답을 맞추셨다면, 다음 곡으로 넘어가세요.</li>
      <li>5. 오답일 경우, 다시 한 번 시도해 보세요.</li>
    </ol>
    <button class="play-button" onclick="startGame()">게임 시작</button>
  `;
  document.getElementById('game-description').innerHTML = description;
  document.getElementById('game-explanation-btn').style.display = 'none'; 
  document.getElementById('start-game-btn').style.display = 'none';  
}

// 게임 시작 버튼 클릭 시 호출되는 함수
function startGame() {
  // 게임 시작 후 기존 화면 처리
  document.getElementById('game-description').style.display = 'none'; 
  document.getElementById('game-content').style.display = 'block'; 

  // 게임 시작 후 버튼 숨기기
  document.getElementById('game-explanation-btn').style.display = 'none';
  document.getElementById('start-game-btn').style.display = 'none';

  // 문제 출제 (음악은 자동 재생되지 않음)
  generateQuiz();
}

// 문제를 생성하는 함수
let currentSongKey; 
function generateQuiz() {
  // 랜덤으로 음악을 선택 (이미 들었던 곡은 제외)
  const songKeys = Object.keys(musicFiles);
  const randomSongKey = songKeys[Math.floor(Math.random() * songKeys.length)];
  const randomSong = musicFiles[randomSongKey];

  // 선택된 곡을 저장
  currentSongKey = randomSongKey;

  // 퀴즈 표시
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").innerText = "";
  document.getElementById("userAnswer").value = ""; 

  // 선택된 곡 제목을 저장
  window.correctAnswer = randomSong.title;

  // "음악 듣기" 버튼을 활성화하도록 설정
  document.querySelector(".play-button").innerText = "음악 듣기";
}

// 음악을 재생하는 함수
let audio; 
function playMusic() {
  if (audio) {
    audio.pause();  
    audio.currentTime = 0; 
  }

  // 새로운 음악을 재생하기
  const randomSong = musicFiles[currentSongKey];
  audio = new Audio(randomSong.file);
  audio.play();
  audio.loop = false;

  // 음악이 끝났을 때 '다음 음악 듣기' 버튼을 활성화하기
  audio.onended = function () {
    document.querySelector(".play-button").innerText = "다음 음악 듣기";
  };
}

// 정답을 확인하는 함수
function checkAnswer() {
  const userAnswer = document.getElementById("userAnswer").value.trim();

  if (userAnswer.toLowerCase() === window.correctAnswer.toLowerCase()) {
    document.getElementById("result").innerText = "정답입니다!";
    document.getElementById("result").style.color = "green";

    // 정답 맞추면 음악을 멈추고, "다음 음악 듣기" 버튼 활성화
    audio.pause(); 
    // 입력창 초기화
    document.getElementById("userAnswer").value = "";

    // 정답 화면만 표시
    showCorrectAnswerScreen();
  } else {
    // 오답 처리
    document.getElementById("result").innerText = "틀렸습니다. 다시 시도해 주세요.";
    document.getElementById("result").style.color = "red";
  }

  // 퀴즈 숨기지 않고 계속 표시
  document.getElementById("quiz").style.display = "block";
}

// 정답 화면만 표시하는 함수
function showCorrectAnswerScreen() {
  const correctAnswerScreen = document.getElementById("correct-answer-screen");
  const correctAnswerMessage = document.getElementById("correct-answer-message");

  // 정답 화면 내용 업데이트
  correctAnswerMessage.innerText = `정답은 "${window.correctAnswer}"입니다!`;
  correctAnswerScreen.style.display = "block"; 
  document.getElementById("game-content").style.display = "none";  
}

// 다음 음악을 듣기 버튼을 클릭했을 때 호출되는 함수
function nextSong() {
  document.getElementById("correct-answer-screen").style.display = "none";  
  document.getElementById("game-content").style.display = "block"; 

  // "다음 음악 듣기" 버튼 클릭 시 새로운 음악 문제 출제
  generateQuiz();
}