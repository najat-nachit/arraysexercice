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
//exercice13
let tabA=[1, 2, 3];
let tabB=[4, 5, 6];
let tabfusionne=tabA.concat(tabB);
console.log(tabfusionne);
//exercice14
let fruits=["apple", "banana", "cherry", "date"];
fruits.splice(1,1)
console.log(fruits)
//exercice15
let numbers=[5, 1, 8, 4, 7];
function croissante(a,b)
{return(a-b);}
numbers.sort(croissante);
console.log(numbers);
//exercice16
let num=[1, 2, 3, 4];
let multiplication=num.map(function(i){
    return i*2;
});
console.log(multiplication)

