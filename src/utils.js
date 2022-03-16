const isItAPalindrome = word => {
    if(typeof word === 'undefined'){
        return false
    }

    if(word.length == 0){
        return false
    }

    const newWord = word.toString();
    const newStr = newWord.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
    return newStr === strReversed
}

const isItAId = value => {
    if(typeof value === 'undefined'){
        return false
    }

    if(value.length === 0){
        return false
    }
    return !isNaN(value)
}

module.exports = {
    isItAPalindrome,
    isItAId
}