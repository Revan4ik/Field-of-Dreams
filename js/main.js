$(document).ready(function () {
  //создаем массив объектов, с вопросами и ответами
  const store = [
    {
      question: "В какой стране самое большое население",
      answer: "Китай",
    },
    {
      question:
        "самая холодная точка мира",
      answer: "Гренландия",
    },
    {
      question: "ближайшая планета к земле",
      answer: "Меркурий",
    },
  ];
  
  const baraban = document.querySelector('.baraban')
  const score = document.querySelector('.score')

  const opt = {
    cell: 0,
    section: 16,
    score: 0,
    timerIntervalsIds: [],
  };

  function getRandomNum(length) {
    return Math.floor(Math.random() * length);
  }

  var randomNum = getRandomNum(store.length);
  var randomValue = store[randomNum];

  $(".wrapQuest").append(randomValue.question);
  var letters = randomValue.answer.toLowerCase().split("");

  const addNumLetter = () => {
    $(".itemLetter").remove();
    letters.forEach((_letter, i) => {
      $(".wrapLetters").append("<li class='itemLetter' id='" + i + "'></li>");
    });
  };
  addNumLetter();

  let checkingletter = () => {
    var valueInput = $(".myLetter").val();

    if (valueInput === "") {
      return $(".yakubovichSay").text("Назовите букву");
    }

    letters.forEach((letter, index) => {
      if (valueInput === letter) {
        opt.timerIntervalsIds.forEach(clearInterval);
        var addLetter = $("#" + index).text(valueInput);
        addLetter.css("color", "white");
        addLetter.addClass("guessed");
        $(".yakubovichSay").text("Вы раскрыли нужную букву, крутите снова");
        $(".myLetter").val("");
        $(".send").prop("disabled", true);
      }
    });

    if (letters.length === $(".guessed").length) {
      return gameOver();
    }

    if (!letters.includes(valueInput)) {
      $(".yakubovichSay").text("Увы это не та буква, вы проиграли.");
      $(".myLetter").val("");
      gameOver();
    }
  };

  $(".send").on("click", checkingletter);
  $(".send").prop("disabled", true);

  // timer
  let timerGame = () => {
    let timerValue = $(".timer").text();
    if (timerValue > 0) {
      timerValue--;
      $(".timer").text(timerValue);
    } else {
      gameOver();
    }
  };
  // locking + reset 
  const lockplusreset = () =>{
    opt.timerIntervalsIds.push(setInterval(timerGame, 1000));
    $(".send").prop("disabled", false);
  }
  // spin
  function spinDrum(e) {
    e.preventDefault();
    opt.timerIntervalsIds.forEach(clearInterval);
    $(".timer").text(10);
    $(".yakubovichSay").text("");
    opt.cell = Math.floor(Math.random() * opt.section + 1);
    var angle =- opt.cell*18.2;
    if(opt.cell == 1){
        opt.score += 300
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle + 18) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 2){
        opt.score += 500
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle + 15.25) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 3){
        $(".yakubovichSay").text("Сектор приз на барабане")
        baraban.style.transform = 'rotate('+ (angle + 9) + 'deg)';
        lockplusreset()
    }

    else if(opt.cell == 4){
        opt.score += 0
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle + 5) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 5){
        opt.score += 900
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle + 1) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 6){
        opt.score += 400
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle - 3) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 7){
        $(".yakubovichSay").text("Откроется одна буква, крутите дальше");
           var lett = Math.floor(Math.random() * letters.length)
           letters.forEach((_el) => {
            var addLetter = $('#' + lett).text(letters[lett]);
            addLetter.css("color", "white");
           })
        baraban.style.transform = 'rotate('+ (angle - 8) + 'deg)';
        lockplusreset()
        
    }
    else if(opt.cell == 8){
        opt.score += 800
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle - 12)  + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 9){
        opt.score += 600
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle -16) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 10){
        opt.score *= 2
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle - 21) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 11){
        opt.score += 100
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle - 25) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 12){
        opt.score += 1000
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle - 30) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 13){
        opt.score += 0
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle - 35) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 14){
        opt.score += 700
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle - 38) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 15){
        opt.score *= 3
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle - 42) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
    else if(opt.cell == 16){
        opt.score += 200
        score.innerHTML = opt.score
        baraban.style.transform = 'rotate('+ (angle - 46) + 'deg)';
        $(".yakubovichSay").text("Назовите букву.");
        lockplusreset()
    }
  }
  $(".roll").on("click", spinDrum);
  

  // game over
  const gameOver = () => {
    opt.timerIntervalsIds.forEach(clearInterval);
    $(".send").prop("disabled", true);
    $(".yakubovichSay").text("Игра окончена! Ваш результат:" + opt.score);
    $(".score").text(0);
    opt.score = 0;
  };
});
