function jediName(firstName, lastName) {
    return lastName.slice(0, 3) + firstName.slice(0, 2)
}  

console.log(jediName('Beyonce', 'Knowles'))

function beyond(num) {
    if (num === Infinity || num === Number.NEGATIVE_INFINITY) {
        console.log('And beyond');
    }
    else if (num > 0) {
        console.log('To infinity');
    }
    else if (num < 0) {
        console.log('To negative infinity');
    } 
    else {
        console.log('Staying home');
    }
    return num;
}
beyond(100);

function decode(uncoded) {
    const newArr = [];
    const splitArr = uncoded.split(" ");
    for (let y in splitArr) {
        if (splitArr[y][0] === "a") {
            newArr.push(splitArr[y][1])
        } else if (splitArr[y][0] === "b") {
            newArr.push(splitArr[y][2])
        } else if (splitArr[y][0] === "c") {
            newArr.push(splitArr[y][3])
        } else if (splitArr[y][0] === 'd') {
            newArr.push(splitArr[y][4])
        } else {
            newArr.push(" ")
        }
    }
    return newArr.join("");
}
console.log(decode(['craft', 'block']))
/*function decode(letter) {
    let word = letter.charAt(0);
    if (word === 'a') {
        return letter.charAt(1);
    }
    else if (word === 'b') {
        return letter.charAt(2);
    }
    else if (word === 'c') {
        return letter.charAt(3);
    }
    else if (word === 'd') {
        return letter.charAt(4);
    }
    else {
        return ' ';
    }
}

console.log(decode('craft'))
console.log(decode('block'))