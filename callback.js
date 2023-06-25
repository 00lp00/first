function gaumarjos(text) {
    console.log(`jos ${text}`)
    
}

function runXTimes(times, gaumarjos) {
    for(let i = 0; i < times; i++) {
        gaumarjos(i);
    }
}

runXTimes(3, (text) => {
    console.log('jos ' + text)
})

// ForEach

const arr = [1,2,3,4,5];

arr.forEach((item , indx,) => {
    console.log(`ინფორმაცია : ${item} ჩაწერილია ინდექსზე: ${indx} `)
})




