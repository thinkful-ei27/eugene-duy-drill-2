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

function decode(letter) {
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

function daysInMonth(month ,leapYear) {
    let result = " "
    switch(month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            result = `${month} has 31 days.`;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            result = `${month} has 30 days.`;
            break;
        case 'Febuary':
        if (leapYear === true) {
            result = `${month} has 29 days.`
        } 
        else {
            result = `${month} has 28 days.`
        }
        break;
    }
    return result;
}
console.log(daysInMonth('Febuary'))

function rockPaperScissors(num) {
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num === randomNo) {
        return 'Tie'
    }
    if (num === 1 && randomNo === 2) {
        return 'lose'
    }
    if (num === 2 && randomNo === 3) {
        return 'lose'
    }
    if (num === 3 && randomNo === 1) {
        return 'lose'
    }
    if (num > 3 || num < 1) {
        throw new Error('invalid number')
    }
    return 'Win'
}

try {
console.log(rockPaperScissors(3))
}
catch(e){console.log(e.message);
}