function checkCounter(){
    let text = document.getElementById("txt").value;
    let words = text.split(' ').length;
    document.getElementById('word').innerHTML = "Number of Words: "+(words+1);
    let lines = text.split('\n').length-1;
    document.getElementById('lines').innerHTML = "Number of Lines: "+lines;
    //console.log("number of lines: "+ lines);
    let char = text.split('').length;
    char = char-(lines+words-1);
    document.getElementById('char').innerHTML = "Number of Characters: "+char;
    //console.log("number of chars: "+(char-lines-words+1));
}