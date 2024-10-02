function wordCount(){
    let text = 
    document.getElementById("textarea").value;
    let count = 0;
    let split = text.split(' ');
    for(let i = 0; i< split.length; i++){
        if(split[i] != ""){
            count ++;
        }
    } 
    document.getElementById("showCount").innerHTML = count;
}