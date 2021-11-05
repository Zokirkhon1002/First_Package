/**
 * Bu funksiya arrayning ichidagi barcha raqamlarni yig'indisini hisoblab,
 * yangi qiymat qaytarib beradi
 * @param arr raqamni kiriting
 */
module.exports.sum = function sum(arr) {
  let result = arr.reduce((acc, cur) => acc + cur);
  return result;
};
/**
 * Bu funksiya 2ta parametr qabul qiladi, 1-string,
 * 2-indeks raqam Stringdagi shu indeks raqamdagi harfni qaytarib beradi.
 * @param str string kiriting
 * @param index string uchun biror indeks kiriting kiriting
 */
module.exports.strIndex = function strIndex(str, index) {
  let splitted = str.split("");
  return splitted[index];
};

/**
 * Bu funksiya 2ta parametr qabul qiladi, 1-ko'p xonali son,
 * 2-indeks raqam ko'p Xonali sondagi shu indeks raqamdagi sonni qaytarib beradi.
 * @param num ko'pxonali raqam kiriting
 * @param idx raqam uchun biror indeks kiriting kiriting
 */
module.exports.numIndex = function numIndex(num, idx) {
  let splitted = String(num).split("");
  return splitted[idx];
};

/**
 * Bu funksiya 1 dona array qabul qiladi parametr sifatida
 * va u array ichidagi sonlar ichidan eng kattasini qaytarib beradi
 * @param arr array kiriting
 */
module.exports.katta = function katta(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

// npm adduser
// npm login
// npm publish
