function identifikacniCislo(){
//vygenerovani jednotlivych cisel pro ICO a DIC
var a = Math.floor(Math.random() * 10);
var b = Math.floor(Math.random() * 10);
var c = Math.floor(Math.random() * 10);
var d = Math.floor(Math.random() * 10);
var e = Math.floor(Math.random() * 10);
var f = Math.floor(Math.random() * 10);
var g = Math.floor(Math.random() * 10);
//Formula for ICO and DIC
var formula = a*8 + b*7 + c*6 + d*5 + e*4 + f*3 + g*2;
var moduloCislo = formula %11;
if (moduloCislo === 0){
  var h = 1;
}
else if (moduloCislo === 1){
  var h = 0;
}
else {
    var h = 11 - moduloCislo;
};

var identifikacniCislo = "" + a + b + c + d + e + f + g + h;
console.log(formula);
console.log(moduloCislo);
console.log(h);
console.log(identifikacniCislo);

document.querySelector('.ICO').innerHTML = identifikacniCislo;
document.querySelector('.DIC').innerHTML = "CZ" + identifikacniCislo;
};
