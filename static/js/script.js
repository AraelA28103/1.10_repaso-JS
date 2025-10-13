// Desafío 1
function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad < 13) {
        alert("Eres un niño!");
    } else if (edad > 13 && edad < 18) {
        alert("Eres adolecente!");
    } else {
        alert("Eres un adulto!");
    }
}

// Desafío 2
function validarPassword() {
    const correctPassword = 12345;
    let password = prompt("Ingrese la contraseña correcta");
    if (password === correctPassword) {
        alert("Acceso permitido")
    } else {
        alert("Acceso denegado")
    }
}

// Desafío 3
function letraE() {
    let palabra = prompt("ingrese una palabra");
    if (palabra.toLowerCase().includes('e')) {
        alert("Su palabra contiene la letra E")
    } else {
        alert("No contiene la letra E")
    }
}

// Desafío 4
function compararNum() {
    let firstNum = parseInt(prompt("Ingrese un primer número"))
    let secondNum = parseInt(prompt("Ingrese un segundo número"))
    if (firstNum > secondNum) {
        alert("El primer número es mayor")
    } else if (secondNum > firstNum) {
        alert("El segundo número es mayor")
    } else {
        alert("Son iguales")
    }
}

// Desafío 5
function numParImpar() {
    let num = parseInt(prompt("Ingrese un número:"));
    if (num % 2 == 0) {
        alert("Número par")
    } else {
        alert("Número impar")
    }
}

// Desafío 6
function palabraInicial() {
    let palabraA = prompt("Ingrese una palabra:")
    if (palabraA[0].toLowerCase() === 'a') {
        alert("Empieza con A")
    } else {
        alert("No empieza con A")
    }
}

// Desafío 7
function temperatura() {
    let temperatura = parseInt(prompt("Ingrese la temperatura actual:"))
    if (temperatura < 10) {
        alert("Hace frío")
    } else if (temperatura > 10 && temperatura < 25) {
        alert("Clima tempaldo")
    } else if (temperatura => 26) {
        alert("Hace calor")
    } else {
        alert("Error")
    }
}

// Desafío 8
function nombreReconocido() {
    let nombre = prompt("Ingresa un nombre:");
    if (nombre.toLowerCase().includes("dany")) {
        alert("Hola, profesor 👋")
    } else if (nombre.toLowerCase().includes("ely")) {
        alert("Hola, mamá 🌷")
    } else {
        alert("Hola, visitante")
    }
}

// Desafío 9
function notas() {
    let nota = parseInt(prompt("Ingrese una nota del 1 al 7:"));
    if (nota >= 1 && nota <= 7) {
        if (nota < 4) {
            alert("Reprobado! :(");
        } else {
            alert("Aprobado! :)");
        }
    } else {
        alert("Nota inválida :/");
    }
}

// Desafío 10
function palabraClave() {
    let clave = prompt("Ingrese una palabra o frase:")
    if (clave.toLowerCase().includes('jesús')) {
        alert("Tu frase tiene la palabra clave 🙌")
    } else {
        alert("No contiene la palabra clave")
    }
}



