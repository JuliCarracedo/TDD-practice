function reverseString(string){
    let final = [];
    let base = string.split('');
    base.forEach(char => {
        final.unshift(char)
    });
    return final.join('');  
}
module.exports = reverseString;