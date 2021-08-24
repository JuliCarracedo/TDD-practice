function capitalize(string){
    let res = string.split('');
    res[0] = res[0].toUpperCase();
    return res.join('');
}

module.exports = capitalize;