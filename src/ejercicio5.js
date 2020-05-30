//! 5.- Slot machine.

class SlothMachine {
  constructor(coinsnumber) {
    console.log("instancia creada");
    this.coinsnumber = 0;
  }

  play() {
    this.coinsnumber++;

    let number1 = Math.trunc(Math.random() * 10);
    let number2 = Math.trunc(Math.random() * 100);
    let number3 = number1 + number2 + Math.trunc(Math.random() * 100);

    let bool1 = number1 % 2 === 0;
    let bool2 = number2 % 3 === 0;
    let bool3 = number3 % 7 === 0;

    if (bool1) {
      if (bool2) {
        if (bool3) {
          console.log(
            `Congratulations!!!. You won ${this.coinsnumber} coins!!`
          );
          this.coinsnumber = 0;
        } else {
          console.log("Good luck next time!!");
        }
      } else {
        console.log("Good luck next time!!");
      }
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
