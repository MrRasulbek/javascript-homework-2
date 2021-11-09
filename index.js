alert("Bu dasturdan foydalanib 3 ta berilgan sondan o'rtancha qiymadagisini topsa bo'ladi!")
console.log("Iltimos enter tugmasini bosing shunda dastur ishlay boshlaydi!")

var numberOptionOne = +prompt("Iltimos birinchi raqamni kiriting: ") 
var numberOptionTwo = +prompt("Iltimos ikkinchi raqamni kiriting: ") 
var numberOptionThree = +prompt("Iltimos uchinchi raqamni kiriting: ")
if (numberOptionOne > numberOptionTwo && numberOptionTwo > numberOptionThree){
               console.log("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionTwo+" sonidir")
               alert("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionTwo+" sonidir")
}
else if (numberOptionOne > numberOptionTwo && numberOptionTwo < numberOptionThree && numberOptionOne > numberOptionThree){
               console.log("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionThree+" sonidir")
               alert("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionThree+" sonidir")
}
else if (numberOptionOne < numberOptionTwo && numberOptionTwo > numberOptionThree && numberOptionOne > numberOptionThree){
               console.log("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionOne+" sonidir")
               alert("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionOne+" sonidir")
}
else if (numberOptionOne > numberOptionTwo && numberOptionTwo < numberOptionThree && numberOptionOne < numberOptionThree){
               console.log("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionOne+" sonidir")
               alert("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionOne+" sonidir")
}
else if (numberOptionOne < numberOptionTwo && numberOptionTwo > numberOptionThree && numberOptionOne < numberOptionThree){
               console.log("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionThree+" sonidir")
               alert("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionThree+" sonidir")
}
else if (numberOptionOne < numberOptionTwo && numberOptionTwo < numberOptionThree){
               console.log("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionTwo+" sonidir")
               alert("Siz "+numberOptionOne+", "+numberOptionTwo+", "+numberOptionThree+" sonlarini tanladingiz va bu sonlarning o'rtanchasi "+numberOptionTwo+" sonidir")
}
else if (numberOptionOne == numberOptionTwo && numberOptionTwo == numberOptionThree){
               console.log("Siz faqat bitta raqamdan foydalandingiz shuning uchun o'rtancha qiymatni topolmadik")
               alert("Siz faqat bitta raqamdan foydalandingiz shuning uchun o'rtancha qiymatni topolmadik")
}
else{
               console.log("Nimadur noto'g'ri ketib qoldi. Sizga faqat raqmlardan foydalanishingizni tafsiya qilamiz!")
               alert("Nimadur noto'g'ri ketib qoldi. Sizga faqat raqamlardan foydalanishingizni tafsiya qilamiz!")
}







