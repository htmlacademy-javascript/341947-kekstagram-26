// Функция проверки максимальной длинны строки
function checkStringLength(string, maxLength) {
    return string.length <= maxLength;
  };
  console.log(checkStringLength());

  //Функция для случайного числа
  function randomInt(min, max) {
    if (min < 0) {
   console.log('Значение не может быть меньше нуля');
      return}; 
      if (min > max) {
       console.log('Не корректное значение');
          return}; 
    return Math.floor(Math.random() * (max - min + 1) + min)
};
  console.log(randomInt());