
const name = prompt("Bonjour, comment tu t'appelles ?");
alert(`Bienvenue ${name}! Ton nom est composé de ${name.length} lettres`);

//Demande de réitérer si c'est faux ;)
do { //EU RE KA
    var age = Number(prompt("Quel âge as-tu ?"));
        if (Number.isNaN(age)) {
            alert("Entre un nombre valide!");
        } else {
            if (!Number.isNaN(age)) {
                alert(`Tu as donc ${age} ans`);
            }
        }
} while (Number.isNaN(age));

    
 

//Mettre un nombre/chiffre String en Int

var chiffreStrF = "12.63"
var chiffreStr = "12";
var chiffre = 45;
var chiffreToStr = chiffre.toString();
var chiffreInt = parseInt(chiffreStr);
var chiffreFloat = parseFloat(chiffreStrF);
console.log(chiffreInt);
console.log(chiffreStr);
console.log(chiffreFloat);
console.log(chiffreToStr);

//L'emplacement de telle ou telle lettre

var nom = "Salut Hiomai";
console.log(`La lettre commence à cette case : ${nom.indexOf("Hiomai")}`);
