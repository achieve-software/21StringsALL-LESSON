//*1     \' 	' 	Single quote        tek tırnak
//*2     \" 	" 	Double quote        çift tırnak
//*3      \\ 	\ 	Backslash            \ işareti koyar
//*4      \b 	    Backspace           geriye doğru bir karakter siler bazen konsolda tarayıcıdan dolayı ? görünür
//*5      \n     	New Line            yeni satıra geçer
//*6       \t    	Horizontal Tabulator bir tab boşluk bırakır

// let mtn = 'Ali\'nin "evi" ve arabası\\ çok güzel.\b Ali\n okula\t gidiyor.';

// console.log(mtn);

// let text = "Lorem ipsum";
// console.log(text.length);
// console.log(text[0]);
// console.log(text[text.length - 1]);

//ÖRNEK
//text-1 de verilen "hello world ifadesini tersten yazdırınız.//dlrow olleh"

// let text1 = "hello world";

// for (let i = text1.length - 1; i >= 0; i--) {
//   console.log(text1[i]);
//   console.log(" ");
// }

//YANYANA ÇÖZÜM
// let ters = "";
// for (let i = text1.length - 1; i >= 0; i--) {
//   ters = ters + text1[i];
// }
// console.log(ters);

//STRİNG METHODS

let text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

let sonuc = "";

sonuc = text2.toLowerCase(); // tüm texti küçük harfe çevirir
sonuc = text2.toUpperCase(); //tüm texti büyük harfe çevirir
sonuc = text2.length; //textin uzunluğunu verir
sonuc = text2.length - 1; //textin kaç indexli olduğunu verir
sonuc = text2[0]; //L
sonuc = text2[1]; //o
//------------------------------------------------------------------
sonuc = text2.slice(0, 4); //0. indexten 4 ya kadar kes ve al //Lore
sonuc = text2.slice(10); // 10.indexten basla sona kadar kes ve al
sonuc = text2.slice(-4); //-4. indexten basla sona kadar kes ve al //lit.
sonuc = text2.slice(-4, -2); //-4. indexten basla -2 ye kadar kes ve al //li
//------------------------------------------------------------------
sonuc = text2.substring(0, 4); //0. indexten 4 ya kadar kes ve al //Lore
sonuc = text2.substring(10); // 10.indexten basla sona kadar kes ve al
//--------------------------------------------------------------------
sonuc = text2.replace("Lorem", "Merhaba"); //Bulduğu ilk Lorem kelimesinin yerine Merhaba yazar
sonuc = text2.replaceAll("Lorem", "Merhaba"); //replaceAll() ise tüm kelimeleri değiştirir.
//--------------------------------------------------------------------
sonuc = text2.trim(); //metnin başında ve sonunda boşluk varsa o boşluğu siler
sonuc = text2.trimEnd(); //metnin sonunda boşluk varsa o boşluğu siler
sonuc = text2.trimStart(); //metnin başında boşluk varsa o boşluğu siler
//--------------------------------------------------------------------
sonuc = text2.charAt(0); //verilen indexteki harfi döndürür //L

//--------------------------------------------------------------------
sonuc = text2.split(""); // A string can be converted to an array with the split() method://tırnak içerisine verdiğim karaktere kadar eleman eleman böler ve dizi oluşturur
sonuc = text2.split("")[0];
//--------------------------------------------------------------------
text1 = "merhaba";
sonuc = text2.concat(text1); //iki stringi birleştirir
//--------------------------------------------------------------------
sonuc = text2.includes("Lorem"); //true // verilen kelimeyi içeriyor mu diye bakar

//--------------------------------------------------------------------
sonuc = text2.indexOf("ipsum"); //soldan sağa tarar ilk bulduğu ifadenin başladığı indexi döndürür yoksa -1 döndürür.

//--------------------------------------------------------------------
sonuc = text2.lastIndexOf("ipsum"); //soldan sağa tarar en son bulduğunun başladığı indexi verir. yoksa -1 döndürür.

//--------------------------------------------------------------------
sonuc = text2.search("ipsum"); //soldan sağa tarar ilk bulduğu ifadenin başladığı indexi döndürür yoksa -1 döndürür.

//--------------------------------------------------------------------
sonuc = text2.startsWith("Lorem"); //Lorem ile mi başlıyor true veya false döndürür.//true

//--------------------------------------------------------------------
sonuc = text2.endsWith("elit."); //elit. ile mi bitiyor true veya false döndürür.//true

// console.log(sonuc);

// SORULAR
let url = "https://www.google.com";
let str = "Lorem ipsum dolor sit amet";
//1-url kaç karakterlidir?
let sonuc1 = "";
sonuc1 = url.length;

//2-str kaç kelimeden oluşmaktadır?
sonuc1 = str.split(" ").length;

//3-url https ile mi başlıyor?
sonuc1 = url.startsWith("https");
if (sonuc1) {
  //   console.log("evet başlıyor");
}
//4-str içerisinde ipsum kelimesi var mı?

sonuc1 = str.includes("ipsum");

if (sonuc1) {
  console.log("evet var");
} else {
  console.log("hayır yok");
}

//5-url ve str değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
//https://www.google.com/lorem-ipsum-dolor-sit-amet
str = str.toLowerCase().replaceAll(" ", "-");
sonuc1 = `${url}/${str}`;
console.log(sonuc1);

// 6- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) // output: dlrow olleh

function reverseString(metin3) {
  let str1 = "";
  for (let i = metin3.length - 1; i >= 0; i--) {
    str1 += metin3[i];
  }
  return str1;
}
console.log(reverseString("hello world"));
console.log(reverseString("ali"));
console.log(reverseString("veli"));

// 7- Belirli bir string ifadenin terside aynı kelime ise buna palindrome kelime denir. Örn: NAZAN, KAZAK, TİRİT ..Girilen bir kelimenin palindrome olup olmadığını bulan fonksiyonu yazınız...

function reverseString1(dz) {
  let trs = "";
  for (let i = dz.length - 1; i >= 0; i--) {
    trs += dz[i];
  }
  return trs;
}

const isPalindrome = function (w) {
  const reversed = reverseString1(w);
  return reversed == w
    ? `${w} bir palindrome texttir`
    : `${w} bir palindrome text değildir`;
};
console.log(isPalindrome("nazan"));
console.log(isPalindrome("ali"));
console.log(isPalindrome("kazak"));

console.log(isPalindrome("talat"));
console.log(isPalindrome("veli"));

//8-konsoldan girilen harf sayısının kaç tane olduğunu aşağıda verilen metinde bulan uygulamayı yazınız.
let metin =
  "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, omnis temporibus dignissimos officia adipisci sed quasi ratione dolorum neque cumque quia quibusdam ullam possimus. Magnam facilis tenetur, laudantium a dolorum explicabo, corporis deleniti aspernatur excepturi distinctio, voluptate est! Quibusdam, blanditiis?";

let harf = prompt("harfi giriniz");
if (harf.length != 1) {
  console.log("lütfen tek haneli harf giriniz");
} else {
  function harfBul(harf) {
    let counter = 0;
    for (let i = 0; i < metin.length; i++) {
      if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) counter += 1;
    }
    return counter;
  }
}
// console.log(harfBul(harf));

// 9- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?
// console.log(findVowels('hello world')) // output: eoo
const sntc = "hello world";
function findVowels(sntc) {
  let vowels = "";
  for (let i = 0; i < sntc.length; i++) {
    if (
      sntc[i] == "a" ||
      sntc[i] == "e" ||
      sntc[i] == "ı" ||
      sntc[i] == "i" ||
      sntc[i] == "o" ||
      sntc[i] == "ö" ||
      sntc[i] == "u" ||
      sntc[i] == "ü"
    ) {
      vowels += sntc[i];
    }
  }
  return vowels;
}
console.log(findVowels(sntc));
console.log(findVowels("alex"));
console.log(findVowels("mehmet"));
console.log(findVowels("araba"));
console.log(findVowels("ahmet"));
