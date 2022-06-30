/* 
VAMOS AS INSTRUÇÕES? 

//Crie 3 variáveis, cada uma com um array:
- Comedy
-Action
-Fantasy 

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
-title:
-director:
-year: 

*/

let comedy = [{
        title: "Sing 2",
        director: "Garth Jennings",
        year: 2022
    },
    {
        title: "Minions",
        director: "Pierre Coffin and Kyle Balda",
        year: 2015
    },
    {
        title: "Inside Out (Divertida Mente)",
        director: "Pete Docter",
        year: 2015
    }
]
console.log(comedy)

let action = [{
        title: "The Tomorrow War",
        director: "Chris McKay",
        year: 2021
    },
    {
        title: "John Wick",
        director: "Chad Stahelski",
        year: 2014
    },
    {
        title: "Matrix",
        director: "Lana Wachowski and Lilly Wachowski",
        year: 1999
    }
]
console.log(action)

let fantasy = [{
        title: "Doctor Strange in the Multiverse of Madness",
        director: "Sam Raimi",
        year: 2022
    },
    {
        title: "Harry Potter",
        director: "Alfonso Cuarón, David Yates, Chris Columbus, Mike Newell",
        year: 2001
    },
    {
        title: "The Lord of the Rings",
        director: "Peter Jackson",
        year: 2001
    }
]
console.log(fantasy)

/*
*DESAFIO EXTRA* 

//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a 
seguinte mensagem ao console: 
IF: "MY FAVORIT MOVIE IS..."
ELSE: "NOT EVEN 5 STARS..." 
*/
//Tentei fazer com as variaveis ja criadas mas nao consegui, entao criei outra variavel.

let animation = "Frozen"

if (animation == "Froen") {
    console.log(`My favorite Movie is ${animation}`)
} else {
    console.log(`Not even 5 Stars...`)
}