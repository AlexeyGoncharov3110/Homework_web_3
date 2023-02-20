const tempCel = +prompt('Введите температуру в градусах Цельсия :');

const tempFar = Math.round((9 / 5) * tempCel + 32);

alert(`Цельсий: ${tempCel} , Фаренгейт: ${tempFar}`);
