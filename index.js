const minNumber = 0
const maxNumber = 100
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

let guess;
let attempts = 0
let playing = true

while (playing) {
    guess = Number(prompt(`Um número entre ${minNumber} e ${maxNumber}:`));
    if (guess < minNumber || guess > maxNumber || isNaN(guess)) {
        alert(`Por favor, insira um número entre ${minNumber} e ${maxNumber}.`);
    } else {
        attempts++
        if (guess < answer) {
            alert("Número muito baixo. Tente novamente.");
        } else if (guess > answer) {
            alert("Número muito alto. Tente novamente.");
        } else {
            alert(`Parabéns! Você acertou o número ${answer} em ${attempts} tentativas.`);
            playing = false;
        }
    }
}