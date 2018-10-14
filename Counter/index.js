function checkCounter(){
    let text = document.getElementById("txt").value;
    let words = text.split(' ').length;
    let lines = text.split('\n').length-1;
    let char = text.split('').length;
    char = char-(lines+words-1);
    alert("\nNumber of Words : "+(words-1)+"\nNumber of Characters : "+char+"\nNumber of Lines: "+lines);
}