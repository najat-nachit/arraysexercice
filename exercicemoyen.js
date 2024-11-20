//exercice 11
let tableau=[1, 2, 3, 4, 5];
for(let i=0; i<tableau.length; i++)
{console.log(tableau[i])};
//exercice 12
let number=[1, 2, 3, 4, 5, 6, 7, 8, 9,10]
let numberpair= number.filter(function(pair){
    return pair %2===0
});
console.log(numberpair);