function copy(input){
    var code = input.parentElement.parentElement.querySelector('div:nth-child(2) > figure > pre');
    var range = document.createRange();
    range.selectNodeContents(code);
    navigator.clipboard.writeText(range);
}

function select(input){
    var code = input.parentElement.parentElement.querySelector('div:nth-child(2) > figure > pre');
    
    var range = document.createRange();
    range.selectNodeContents(code);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

