var degerler = new URLSearchParams(window.location.search);
var ad = degerler.get('isim');
var eposta = degerler.get('eposta');

document.write("<p>Kaydınız Oluşturulmuştur. Tebrikler :) <3 <3 <3 <3</p>");
document.write("<p>Adınız: " + ad + "</p>");
document.write("<p> Eposta Adresiniz : " + eposta + "</p>");
document.write("<p> Olarak Kaydedildiniz: " + ad + " </p>");