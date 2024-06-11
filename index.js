/**
 * Bu funksiya arrayning ichidagi barcha raqamlarni yig'indisini hisoblab,
 * yangi qiymat qaytarib beradi
 * @param arr raqamni kiriting
 */
module.exports.sum = function sum(/** @type {number[]} */ arr) {
  let result = arr.reduce((/** @type {number} */ acc, /** @type {number} */ cur) => acc + cur);
  return result;
};

/**
 * Bu funksiya 2ta parametr qabul qiladi, 1-string,
 * 2-indeks raqam Stringdagi shu indeks raqamdagi harfni qaytarib beradi.
 * @param str string kiriting
 * @param index string uchun biror indeks kiriting kiriting
 */
module.exports.strIndex = function strIndex(
  /** @type {string} */ str,
  /** @type {string | number} */ index
) {
  return str[index];
};

/**
 * Bu funksiya 2ta parametr qabul qiladi, 1-ko'p xonali son,
 * 2-indeks raqam ko'p Xonali sondagi shu indeks raqamdagi sonni qaytarib beradi.
 * @param num ko'pxonali raqam kiriting
 * @param idx raqam uchun biror indeks kiriting kiriting
 */
module.exports.numIndex = function numIndex(/** @type {number} */ num, /** @type {number} */ idx) {
  let splitted = String(num).split("");
  return splitted[idx];
};

/**
 * Bu funksiya 1 dona array qabul qiladi parametr sifatida
 * va u array ichidagi sonlar ichidan eng kattasini qaytarib beradi
 * @param arr array kiriting
 */
module.exports.katta = function katta(/** @type {number[]} */ arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

/**
 * Bu String metodning vazifasi:
 * takrorlangan harflarni bir donadan qoldiradi va
 * alifbo bo'yicha saralab qaytaradi
 * @return saralangan va takrorlanmagan string
 * @param args agar argument bersangiz string o'z holatida qaytaradi.
 */
// @ts-ignore
module.exports = String.prototype.saralash = function (/** @type {string[]} */ ...args) {
  if (args.length) return this;

  // // harflarni takrorlanganini tekshirish
  // let unique = "";
  // for (let i = 0; i < this.length; i++) {
  //   if (unique.indexOf(this[i]) == -1) {
  //     unique += this[i];
  //   }
  // }

  // // harflarni alifbo bo'yicha saralash
  // let sorted = "";
  // for (let i = 97; i < 123; i++) {
  //   for (let j = 0; j < unique.length; j++) {
  //     if (unique[j].toLowerCase().charCodeAt() == i) {
  //       sorted += unique[j];
  //     }
  //   }
  // }

  // return sorted;

  // qisqa yo'li
  return this.split("")
    .filter((item, index, self) => self.indexOf(item) == index)
    .sort()
    .join("");
};

/**
 * Bu Array metodning vazifasi:
 * takrorlangan harflarni bir donadan qoldiradi va
 * alifbo bo'yicha saralab qaytaradi
 * @return saralangan va takrorlanmagan array
 * @param args argument bersangiz arrayni o'z holatida qaytaradi.
 */
// @ts-ignore
module.exports = Array.prototype.saralash = function (...args) {
  if (args.length) return this;

  // harflarni takrorlanganini tekshirish
  let unique = [];
  for (let i = 0; i < this.length; i++) {
    if (unique.indexOf(this[i]) == -1) {
      unique.push(this[i]);
    }
  }

  // harflarni alifbo bo'yicha saralash
  let sorted = [];
  for (let i = 97; i < 123; i++) {
    for (let j = 0; j < unique.length; j++) {
      if (unique[j].toLowerCase().charCodeAt() == i) {
        sorted.push(unique[j]);
      }
    }
  }

  return sorted;

  // qisqa yo'li
  // return this.split("").filter((item, index, self)=> self.indexOf(item) == index).sort()'
};

/**
 * Bu Array metodning vazifasi:
 * bu metod bir dona argument qabul qiladi va
 * u argument arrayning ichida necha marotaba takrorlanganini
 * sonini qaytaradi agar arrayning ichida bo'lmasa 0 qaytaradi
 * @return argument sonini qaytaradi
 * @param el arraydan qidirayotgan elementni nomini kiriting
 */
// @ts-ignore
module.exports = Array.prototype.counting = function (el) {
  if (el === undefined || el.length === 0) return 0;
  return this.reduce((acc, cur) => (acc += cur == el ? 1 : 0), 0);
};

/**
 * bu Funksiya 2ta obyektni teng ekanligini tekshirib beradi
 * agar birxil bo'lsa @returns true; aks holda @returns false;
 * @param {Object} obj1 birinichi obyektni kiriting
 * @param {Object} obj2 ikkinchi obyektni kiriting
 * @example 
  let [obj1, obj2] = [
  { name: "zokirkhon", age: 23 },
  { name: "zokirkhon", age: 23 }
];
console.log(isEqual(obj1,obj2)) @return true;

@example 2  
let [obj1, obj2] = [
  { name: "zokirkhon", age: 24 },
  { name: "zokirkhon", age: 23 }
];
console.log(isEqual(obj1,obj2)) @return false;
 */
module.exports.isEqual = function isEqual(obj1, obj2) {
  let aKeys = Object.getOwnPropertyNames(obj1);
  let bKeys = Object.getOwnPropertyNames(obj2);
  let [l1, l2] = [aKeys.length, bKeys.length];

  if (l1 !== l2) return false;

  for (let i = 0; i < l1; i++) {
    let keyName = aKeys[i];
    if (obj1[keyName] !== obj2[keyName]) {
      return false;
    }
  }

  return true;
};

/**
 * @description bu funksiyaning vazifasi ikki
 * sonni teng yoki teng emasligini aniqlab beradi
 * @example console.log(numberEquals(0.1+0.2, 0.3)) // true
 * @param {Number} x son kiriting
 * @param {Number} y son kiriting
 * @returns
 */
module.exports.numbersEquals = function numbersEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
};

/**
 * bu funksiya sonning tub son yoki murakkab
 * son ekanligin aniqlab beradi
 * @param {Number} n son kiriting
 * @example console.log(isPrime(7)) // true
 * @returns true or false
 */
module.exports.isPrime = function isPrime(n) {
  if (isNaN(n)) {
    return "iltimos raqamlarda kiriting!";
  }
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;

  // checking from 2 to n-1;
  for (var i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
};

/**
 * @description bu funksiyaning vazifasi kiritilgan id ni
 * string turiga ugurib beradi
 * @param {Number} n id ni kiriting
 * @returns encoded String or false;
 * @example console.log(encodedId(11185223574343884)) // Zokirkhon
 */
module.exports.encodedId = function encodeId(n) {
  let all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
  if (n === undefined) return false;
  let [len, encoded] = [all.length, []];
  if (n == 0) return all[0];
  while (n > 0) {
    // @ts-ignore
    encoded.push(all[n % len]);
    n = Math.floor(n / len);
  }
  // @ts-ignore
  encoded = encoded.reverse().join("");
  return encoded;
};

/**
 * @description bu funksiyaning vazifasi
 * encoded qilingan string (decoded) ya'ni raqamlarga
 * ugurib beradi.
 * @param {String} id String turidagi Id ni kiriting
 * @returns Number or false;
 * @example console.log(decodeId("Zokirkhon"))
 */
module.exports.decodedId = function decodeId(id) {
  let all = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
  if (id === undefined) return false;
  let [len, decoded] = [all.length, 0];
  let idLen = id.split("").length;
  for (let i = 0; i < idLen; i++) {
    decoded = decoded * len + all.indexOf(id.charAt(i));
  }
  return decoded;
};

/**
 * @description bu funksiyaning vazifasi
 * raqamlarni ikkilik sanoq sistemasiga ugurib beradi.
 * @returns ikkilik sanoq sistemasida;
 * @example
 */
// @ts-ignore
module.exports = Number.prototype.base10String = function base10String() {
  let binaryString = "";
  function base10StringHelper(n) {
    if (n < 2) {
      binaryString += n;
      return;
    } else {
      base10StringHelper(Math.floor(n / 2));
      base10StringHelper(n % 2);
    }
  }
  base10StringHelper(this);
  return Number(binaryString);
};

/**
 * @description bu funksiyaning vazifasi
 * stringni ichidagi raqamlarni kiritilgan character bilan bo'lib beradi
 * @param {Number} every raqam kiriting, default=3
 * @param {String} withChar string ichida character kiritin, default=","
 * @returns string;
 * @example
 * 1 : "123456".numberSplitter() => "123,456"
 * 2 : "123456.12".numberSplitter() => "123,456.12"
 * 3 : "1234567".numberSplitter(4,",") => "123,4567"
 * 4 : "1234567.12".numberSplitter(4, "-") => "123-4567.12"
 */
module.exports = String.prototype.numberSplitter = function numberSplitter(
  every = 3,
  withChar = ","
) {
  const regexPattern = `(?<=\\d)(?=(\\d{${every}})+(?!\\d))`;
  const regex = new RegExp(regexPattern, "g");
  return this.replace(regex, withCharacter);
};

/**
 * @description bu funksiyaning vazifasi
 * stringni ichidagi raqamlarni kiritilgan character bilan bo'lib beradi
 * @param {Number} every raqam kiriting, default=4
 * @param {String} withChar string ichida character kiritin, default="-"
 * @returns string;
 * @example
 * 1 : "1234QWER5678ASDF".numberSplitter() => "1234-QWER-5678-ASDF"
 * 2 : "ASDFZXCV1234".numberSplitter() => "ASDF-ZXCV-1234"
 * 3 : "ASDFZXCV1234".numberSplitter(4,"=") => "ASDF=ZXCV=1234"
 */
module.exports = String.prototype.stringSplitter = function stringSplitter(
  every = 4,
  withChar = "-"
) {
  const regexPattern = new RegExp(`.{1,${every}}`, "g");
  const regexPatternCharacter = new RegExp(`${withChar}`, "g");
  return this.replace(regexPatternCharacter, "").match(regexPattern)?.join(withChar);
};

/**
 * 
 * @param {string} date "2024-06-15"
 * @returns {number} 167 
 * @description [31, 28, 31, 30, 31, 15] = 167
 */
function dayOfYear(date) {
  let [yyyy, mm, dd] = date?.split("-");
  let result = 0;
  mm = Number(mm) - 1;
  dd = Number(dd);
  yyyy = Number(yyyy);
  if (mm === 0) {
    return dd;
  }
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 0; i < 12; i++) {
    if (i === mm) {
      result += dd;
      break;
    }
    result += month[i];
  }

  function isLeapYear(y) {
    return y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0) && mm > 1;
  }
  if (isLeapYear(yyyy)) {
    result += 1;
  }

  return result;
}

exports.dayOfYear = dayOfYear;

// npm adduser
// npm login
// npm publish
