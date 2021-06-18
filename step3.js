
// Believe this to be an O(n) time complexity

function find_longest_word(words) {
    wordLength = []
    for (let i = 0; i < words.length; i++) {
        let noSpace = words[i].replace(/\s/g, '');
        let num = noSpace.length
        wordLength.push(num)
    }
    console.log(Math.max.apply(Math, wordLength))
}

let wordArr = ['hello', 'goodbye', 'good afternoon']

find_longest_word(wordArr)



// This can be improved, as it is now it will get more inefficient the larger the array of numbers is passed in

function sumZero (nums) {
    for (let i = 0; i < nums.length; i++) {
       for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === 0) {
            let yes = true
            return yes
            }
        } 
    }
    let no = false
    return no
}

numArr = [1,2,3,-2]

console.log(sumZero(numArr))