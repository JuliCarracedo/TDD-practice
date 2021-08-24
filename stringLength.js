function stringLength(string){
    let l = string.length;
    if(l > 10){
        return null;
    }
    if(l < 1){
        return null;
    }
    return l;
}

module.exports = stringLength;