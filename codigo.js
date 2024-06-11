var aleatório = Math.floor(Math.random() * 100);

console.log(
  "____Bem vindo ao jogo de adivinhação de Game Of Thrones, hora de testar quão bom seus instintos são!!____"
);
console.log(
  "\n E lembre-se quando você joga o Jogo dos Tronos ou você vence ou você morre!! Dê o seu melhor"
);

console.log("\nValar Morghulis, digite seu primeiro palpite.");
let palpite = "";
let tentativas = 5;

process.stdin.on("data", function (data) {
  palpite = Number(data.toString().trim());
  if (palpite == aleatório) {
    console.log(
      "E...E...EXATOO!! Você acertou!\n Valar Dohaeris, obrigado por jogar!"
    );
    process.exit();
  } else {
    tentativas--;
    console.log("E...E...ERROUU!!");

    if (Math.abs(palpite - aleatório) < 5) {
      console.log(
        "Dracarys... ONNN FIRE, você está pegando fogo, quase lá... tente novamente"
      );
    } else if (Math.abs(palpite - aleatório) < 10) {
      console.log(
        "Fogo e Sangue te lembra algo? você esta cada vez mais quente... tente novamente"
      );
    } else if (Math.abs(palpite - aleatório) < 25) {
      console.log(
        "O Sol de Westeros nasceu e você está esquentando...Tente novamente"
      );
    } else {
      console.log(
        "O inverno chegou para a sua casa! CONGELANDO...Tente novamente"
      );
    }

    console.log(
      "\nVocê ainda tem " + tentativas + " tentativas para esse valor\n"
    );
    if (tentativas == 0) {
      console.log("Seu número era: " + aleatório);
      console.log(
        "O Jogo dos Tronos foi embaralhado novamente; começe uma nova adivinhação..."
      );
      aleatório = Math.floor(Math.random() * 100);
      
      tentativas = 5;
    }
  }
});
