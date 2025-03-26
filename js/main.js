// 음악 파일 경로 및 힌트 추가
const musicFiles = {
  song1: {
    file: "mp3/StrayKids-(S-Class).mp3", 
    title: "특",
    hint: "★★★★★(5-STAR)"
  },
  song2: {
    file: "mp3/BabyMonster-SHEESH.mp3", 
    title: "sheesh",
    hint: "쉬! 쉬쉬~"
  },
  song3: {
    file: "mp3/Billlie-GingaMingaYo.mp3", 
    title: "긴가민가요",
    hint: "20가지 표정을 보여주는 표정장인, '츠키'가 등장하는 곡!"
  },
  song4: {
    file: "mp3/BOYNEXTDOOR-IFISAY_ILOVEYOU.mp3", 
    title: "오늘만 I Love You",
    hint: "Love, 愛してる"
  },
  song5: {
    file: "mp3/CheersToYouth-SEVENTEEN.mp3", 
    title: "청춘찬가",
    hint: "보컬팀(정한, 조슈아, 우지, 도겸, 승관)의 곡으로 청춘을 찬미하는 노래"
  },
  song6: {
    file: "mp3/Ditto-NewJeans.mp3", 
    title: "Ditto",
    hint: "Ra-ta-ta-ta"
  },
  song7: {
    file: "mp3/earthquake-JISOO.mp3", 
    title: "earthquake",
    hint: "2번째 솔로 곡 JISOO 를 부정할 수 없게"
  },
  song8: {
    file: "mp3/EXO-FirstSnow.mp3", 
    title: "첫눈",
    hint: "❄☃"
  },
  song9: {
    file: "mp3/EXO-ButterFlyBoy.mp3", 
    title: "나비소년",
    hint: "🦋 + 🙍‍♂️"
  },
  song10: {
    file: "mp3/fromis9-Supersonic.mp3", 
    title: "Supersonic",
    hint: "초음속 🚀🎶"
  },
  song11: {
    file: "mp3/GD-TooBad.mp3", 
    title: "Too Bad",
    hint: "💘에 빠져들며 🔥감정과 열정💥"
  },
  song12: {
    file: "mp3/GoodParts-LESSERAFIM.mp3", 
    title: "Good Parts",
    hint: "💖Self-love✨"
  },
  song13: {
    file: "mp3/Hug-RIIZE.mp3", 
    title: "Hug",
    hint: "🤗"
  },
  song14: {
    file: "mp3/IHateBeingSick-(G)I-DLE.mp3", 
    title: "나는 아픈 건 딱 질색이니까",
    hint: "🚫🤧"
  },
  song15: {
    file: "mp3/ITZY-Cake.mp3", 
    title: "Cake",
    hint: "🍰"
  },
  song16: {
    file: "mp3/Jeans-BSS.mp3", 
    title: "청바지",
    hint: "👖"
  },
  song17: {
    file: "mp3/KISSOFLIFE-Sticky.mp3", 
    title: "Sticky",
    hint: "끈적임, 엉덩이 흔들기🍑"
  },
  song18: {
    file: "mp3/likeJENNIE-JENNIE.mp3", 
    title: "like JENNIE",
    hint: "제니 제니 제니"
  },
  song19: {
    file: "mp3/MAESTRO-SEVENTEEN.mp3", 
    title: "MAESTRO",
    hint: "🎼🎶"
  },
  song20: {
    file: "mp3/Magnetic-ILLIT.mp3", 
    title: "Magnetic",
    hint: "💖🧲"
  },
  song21: {
    file: "mp3/NCTWISH-Miracle.mp3", 
    title: "Miracle",
    hint: "✨,🙏,🔮"
  },
  song22: {
    file: "mp3/Poppy-STAYC.mp3", 
    title: "Poppy",
    hint: "😍💥⚡"
  },
  song23: {
    file: "mp3/QWER-MyNameIsClear.mp3", 
    title: "내 이름 맑음",
    hint: "🌞"
  },
  song24: {
    file: "mp3/REBELHEART-IVE.mp3", 
    title: "REBEL HEART",
    hint: "START🌟 to END🏆"
  },
  song25: {
    file: "mp3/SeeYouAgain-TheWind.mp3", 
    title: "다시 만나",
    hint: "Meet again, 코노 엔딩곡"
  },
  song26: {
    file: "mp3/SeeThat-NMIXX.mp3", 
    title: "별별별",
    hint: "⭐⭐⭐"
  },
  song27: {
    file: "mp3/THEBOYZ-THRILLRIDE.mp3", 
    title: "THRILL RIDE",
    hint: "💥짜릿함, 🌀중독, 🎢스릴"
  },
  song28: {
    file: "mp3/TheFirstMeetingDoesn'tGoAsPlanned-tws.mp3", 
    title: "첫 만남은 계획대로 되지 않아",
    hint: "첫 등교, 첫 미팅, 첫 출근..."
  },
  song29: {
    file: "mp3/TheSameAge-HxW.mp3", 
    title: "동갑내기",
    hint: "친구🤝"
  },
  song30: {
    file: "mp3/Unbelievable-Lucy.mp3", 
    title: "아니 근데 진짜",
    hint: "No, but really"
  },
  song31: {
    file: "mp3/WADADA-Kep1er.mp3", 
    title: "WADADA",
    hint: "와다다 와다다!"
  },
  song32: {
    file: "mp3/Whiplash-Espa.mp3", 
    title: "Whiplash",
    hint: "뒷목 잡기 안무, 윕윕플래시 안무"
  },
  song33: {
    file: "mp3/Lucy-she'sLaughing.mp3", 
    title: "그녀가 웃잖아",
    hint: "👩‍🦰 + 😄"
  },
  song34: {
    file: "mp3/Lucy-WhenTomorrowComes.mp3", 
    title: "내일이 찾아오면",
    hint: "🌅 or tomorrow"
  },
  song35: {
    file: "mp3/HwangGaram-I'mAFirefly.mp3", 
    title: "나는 반딧불",
    hint: "✨🌟 + 🐞"
  },
  song36: {
    file: "mp3/DAY6-Happy.mp3", 
    title: "Happy",
    hint: "😊"
  },
  song37: {
    file: "mp3/LadiesCode-I'mFineThankYou.mp3", 
    title: "I'm Fine Thank You",
    hint: "💔의 😢속에서도 🙏마음"
  },
  song38: {
    file: "mp3/Davichi-TwoLoves.mp3", 
    title: "두사랑",
    hint: "💖💖"
  },
  song39: {
    file: "mp3/SungSiKyung-WeLookPrettyGoodTogether.mp3", 
    title: "우린 제법 잘 어울려요",
    hint: "🙍‍♀️💖🙍‍♂️"
  },
  song40: {
    file: "mp3/N.Flying-RooftopRoom.mp3", 
    title: "옥탑방",
    hint: "🏠"
  }
};

// 힌트를 보이게 하는 함수
function showHint() {
  const currentSong = musicFiles[currentSongKey];  // 현재 선택된 음악 정보를 가져옵니다.
  const hintText = currentSong.hint;  // 해당 곡의 힌트를 가져옵니다.

  // 힌트를 표시합니다.
  const hintElement = document.getElementById("hint");

  // 힌트 텍스트 설정
  hintElement.innerText = hintText;

  // 힌트를 보이도록 설정
  hintElement.style.display = "block";  // 힌트 보이게 설정

  // 추가 스타일 변경(혹시 필요하다면)
  hintElement.style.opacity = 1; // 힌트가 잘 보이도록 설정
  hintElement.style.visibility = "visible"; // 힌트가 보이도록 설정
}

// 게임 설명을 표시하는 함수
function showGameDescription() {
  const description = `
<h2>게임 설명</h2>
<ol>
  <li>1. 선곡된 음악에 집중하세요.</li>
  <li>2. 재생 버튼을 눌러 음악을 듣고 제목을 입력하세요.</li>
  <li>3. 정답 또는 오답을 확인합니다.</li>
  <li>4. 정답을 맞추셨다면, 다음 곡으로 넘어가세요.</li>
  <li>5. 오답일 경우, 다시 한 번 시도해 보세요.</li>
  <li>6. 힌트만으로 정답을 맞출 수 없고, 음악을 들어야 넘어갑니다.</li>
</ol>

    <button class="play-button" onclick="startGame()">게임 시작</button>
  `;
  document.getElementById('game-description').innerHTML = description;
  document.getElementById('game-explanation-btn').style.display = 'none'; 
  document.getElementById('start-game-btn').style.display = 'none';  
}

// 게임 시작 버튼 클릭 시 호출되는 함수
let totalQuestions = Object.keys(musicFiles).length; // 전체 문제 수
let remainingQuestions = totalQuestions; // 남은 문제 수 초기화
let usedSongs = []; // 이미 나온 곡을 저장할 배열

function startGame() {
  // 게임 시작 후 기존 화면 처리
  document.getElementById('game-description').style.display = 'none'; 
  document.getElementById('game-content').style.display = 'block'; 

  // 게임 시작 후 버튼 숨기기
  document.getElementById('game-explanation-btn').style.display = 'none';
  document.getElementById('start-game-btn').style.display = 'none';

  // 남은 문제 수 표시
  updateRemainingProblems();

  // 문제 출제 (음악은 자동 재생되지 않음)
  generateQuiz();
}

// 남은 문제 수 업데이트
function updateRemainingProblems() {
  document.getElementById('remaining-count').innerText = remainingQuestions;
}

// 문제를 생성하는 함수
let currentSongKey;
function generateQuiz() {
  if (remainingQuestions <= 0) {
    showGameOverScreen();
    return;
  }

  // 랜덤으로 음악을 선택 (이미 들었던 곡은 제외)
  const songKeys = Object.keys(musicFiles);
  const availableSongs = songKeys.filter(songKey => !usedSongs.includes(songKey));

  if (availableSongs.length === 0) {
    showGameOverScreen();
    return;
  }

  // 중복되지 않는 랜덤 음악 선택
  const randomSongKey = availableSongs[Math.floor(Math.random() * availableSongs.length)];
  const randomSong = musicFiles[randomSongKey];

  // 선택된 곡을 저장하고 사용된 곡 배열에 추가
  currentSongKey = randomSongKey;
  usedSongs.push(currentSongKey);

  // 퀴즈 표시
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").innerText = "";
  document.getElementById("userAnswer").value = ""; 

  // 선택된 곡 제목을 저장
  window.correctAnswer = randomSong.title;

  // "음악 듣기" 버튼을 활성화하도록 설정
  document.querySelector(".play-button").innerText = "음악 듣기";

  // 힌트 숨기기
  document.getElementById("hint").style.display = "none"; // 문제를 새로 시작하면 힌트 숨기기
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

  // 남은 문제 수 감소
  remainingQuestions--;
  updateRemainingProblems();
}

// 다음 음악을 듣기 버튼을 클릭했을 때 호출되는 함수
function nextSong() {
  document.getElementById("correct-answer-screen").style.display = "none";  
  document.getElementById("game-content").style.display = "block"; 

  // "다음 음악 듣기" 버튼 클릭 시 새로운 음악 문제 출제
  generateQuiz();
}

// 폭죽 효과 함수
function startConfettiEffect() {
  const numberOfPieces = 100; // 폭죽 조각 수
  const confettiContainer = document.getElementById('confetti-container');

  for (let i = 0; i < numberOfPieces; i++) {
    const confettiPiece = document.createElement('div');
    
    // 랜덤으로 원, 네모, 세모 중 하나를 선택
    const shape = ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)];
    confettiPiece.classList.add('confetti', shape);  // 폭죽 파티클에 모양 클래스 추가
    confettiContainer.appendChild(confettiPiece);

    // 랜덤 위치와 애니메이션 시간 설정
    confettiPiece.style.left = `${Math.random() * window.innerWidth}px`;
    confettiPiece.style.animationDelay = `${Math.random() * 3}s`;  // 애니메이션 지연 시간
    confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;  // 애니메이션 지속 시간

    // 랜덤 색상 설정
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#f0f033"];
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }
}

// 게임 종료 화면 표시
function showGameOverScreen() {
  // 게임 오버 메시지만 보이게 하고, 나머지 화면 요소는 모두 숨깁니다.
  document.getElementById('game-over-message').style.display = 'block';  // 게임 오버 메시지 보이기

  // 나머지 화면 요소들 숨기기
  document.getElementById('game-content').style.display = 'none';  // 게임 콘텐츠 숨기기
  document.getElementById('game-description').style.display = 'none';  // 게임 설명 숨기기
  document.getElementById('remaining-problems').style.display = 'none'; // 남은 문제 숨기기
  document.getElementById('quiz').style.display = 'none';  // 퀴즈 숨기기
  document.getElementById('hint').style.display = 'none';  // 힌트 숨기기
  document.getElementById('result').style.display = 'none';  // 결과 메시지 숨기기

  // 폭죽 효과 실행
  startConfettiEffect();
}