// Code your solutions in this file
function writeCards(name, event) {
    let newarray = []
    for (let i = 0; i < name.length; i++) {
        newarray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
return newarray
    }

function countDown() {
    let i = 10
    while (i >= 0) {
        console.log(i--);
    }
}

