
/* ZADANIE 1
napisać funkcję która sprawdzi czy osoba jest pełnoletnia, funkcja posiada 1 parametr będący wiekiem
osoby(number), i zwraca true/false w zależności czy osoba jest pełnoletnia czy nie 
*/

function checkAge (age) {
    return age >= 18;
}

function printToConsole (data) {
        if(data) {
            console.log("true")
        } else {
            console.log("false")
        }
    }
    

printToConsole (checkAge (17));

// lub (?)

function checkingAge (age) {
    if (age >= 18) {
        return "true";
    } else {
        return "false";
    }

}

checkingAge (18);

/* ZADANIE 2

napisać funkcję min, która przyjmuje dwa argumenty typu number, i zwraca mniejszy z nich

*/

function min (a, b) {

    if(a > b) {
        console.log("b", b);
    } else if (a < b) {
        console.log("a", a);
    } else {
        console.log("numbers are equal");  
    }
}

min (6, 5);


//chciałam to zrobić z returnem, bez console.loga, ale nie wiem czy to poprawne:


function min2 (c, d) {

    if(c > d) {
        return d;
    } else if (c < d) {
        return c;
    } else {
        return "numbers are equal";
    }
}

min2 (5, 5);




/* ZADANIE 3
napisać funkcję wykonująca potęgowanie, przyjmuje ona 2 argumenty, a - podstawa potęgi, n - wykładnik
i zwraca a^n
Do obliczenia potęgi prosze skorzystać z petli, a nie operatora **
*/

function exponentiationLoop (a, n) {
    for(let a = 2; a < 10; ++a) {
        for(let n = a + 1; n <= 10; n++)
            console.log(a**n)
    }
}

exponentiationLoop ();

/* ZADANIE 4
mając funkcje greet która zwraca string “HELLO”, napisać funkcje name która posiada 2 parametry, user oraz
message. User jest to nazwa użytkownika, a message jest funkcja która zwraca string będący przedrostkiem
powitania, funkcja name wyświetla w konsoli string który jest połączeniem wartości zwracanej z funkcji message
z nazwa użytkownika

*/

function greet () {
    return "HELLO";
}

function userName (user, message) {
    if (user) {
        message = `HELLO ${user}`;
        console.log(message);
    } else {
        message = `Podaj prawidłową nazwę użytkownika`;
        console.log(message);
    }
}

greet(userName(""));