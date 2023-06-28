export function screenIsntWideEnough() {
    let status = false
    if (window.screen.width <= 1000) status = true
    return status
}

export function contarElemento(array, elemento) {
    let contador = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '' + elemento) {
            contador++;
        }
    }
    return contador;
}

export function removerPrimeiraOcorrencia(array, elemento) {
    const index = array.indexOf('' + elemento);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

export function arrangeById(array) {
    array.sort((a, b) => a.id - b.id);
    return array;
}

export function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

export function removeArrayMember(array, member) {
    return array.filter(item => item !== member);
}

export function getTotalPrice(arr1, arr2) {
    const prices = []
    for (let i = 0; i < arr1.length; i++) {
        let id = Number(arr1[i]);
        for (let j = 0; j < arr2.length; j++) {
            const movie = arr2[j];
            if (id === movie.id) {
                prices.push(movie.price);
            }
        }
    }
    return calculateSum(prices);
}
