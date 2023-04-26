 const readline = require('readline')

const reader = readline.createInterface({
// will have input numbers
input: process.stdin,
output: process.stdout
})

function addNumbers(sum, numLeft){
    if (numLeft > 0){
        reader.question("Give me a number", function(input){ 
            let number =  parseInt(input)
            console.log(`Partial sum: ${sum+= number}`)
            addNumbers(sum, numLeft-1)
        })
    }
    else {
        // cb(sum)  
        console.log(`Total Sum: ${sum}`)
        reader.close()
    }
}



// sum along the way and give the partial sum
//return the total sum when the callback is done

// const totalCallback = function (sum) {
//     console.log(`Total Sum: ${sum}`)
//     reader.close()
// } 
addNumbers(0,3)


//collect input numbers

//callback function is addNumbers
//add number one at a time

//return the total sum


