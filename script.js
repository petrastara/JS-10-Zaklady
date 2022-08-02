console.log("JavaScript funguje!");

console.log( Math.floor(Math.random()*100));

/*let mojeBarvaVlasu = prompt ("zadej svoji barvu vlasů");*/

/*zeptám se na rok narození -> kolik je let*/

let rok = prompt ("zadejte rok svého narození");
let dnesniDatum = new Date();
let stari = dnesniDatum.getFullYear() - rok;     /*vyměnit akt. datum tak, aby se měnilo samo (rok) → vygooglit*/
console.log ("uživatel má "+ stari + " let");
