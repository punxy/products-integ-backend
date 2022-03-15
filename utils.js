export const isItAPalindrome = word => {
    if(typeof word === 'undefined'){
        return false
    }

    const newStr = word.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
    return newStr === strReversed
}

export const isItAId = value => {
    return !isNaN(value)
}