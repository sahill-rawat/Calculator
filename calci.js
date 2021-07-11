function clearInputOuput()
{
    document.querySelector("#display #input").innerHTML = "";
    document.querySelector("#display #output").innerHTML = "";
}

function addElement(c)
{
    var eqn = document.querySelector("#display #input").innerHTML;
    if(eqn.length < 25) document.querySelector("#display #input").innerHTML += c;
}

function checkLast(c)
{
    var eqn = document.querySelector("#display #input").innerHTML;
    if(eqn.length == 0) return true;
    if(eqn[eqn.length-1] == c)  return true;
    return false;
}

function backspace()
{
    var eqn = document.querySelector("#display #input").innerHTML;
    document.querySelector("#display #input").innerHTML = eqn.slice(0, eqn.length-1);
}

function solve(s)
{
    
    var res = eval(s);
    if(String(res).length < 25)  document.querySelector("#display #output").innerHTML = eval(s);
    else    document.querySelector("#display #output").innerHTML = "NANA";
}

var allRows = document.querySelectorAll(".row");
var rowOne = allRows[0].querySelectorAll("button");
rowOne[0].onclick = function() { clearInputOuput(); }
rowOne[1].onclick = function() { backspace(); }
rowOne[2].onclick = function() { if(!checkLast('%'))    addElement(' % '); }
rowOne[3].onclick = function() { if(!checkLast('/'))    addElement(' / '); }


var rowTwo = allRows[1].querySelectorAll("button");
rowTwo[0].onclick = function() { addElement(7); }
rowTwo[1].onclick = function() { addElement(8); }
rowTwo[2].onclick = function() { addElement(9); }
rowTwo[3].onclick = function() { if(!checkLast("*"))    addElement(' * '); }

var rowThree = allRows[2].querySelectorAll("button");
rowThree[0].onclick = function() { addElement(4); }
rowThree[1].onclick = function() { addElement(5); }
rowThree[2].onclick = function() { addElement(6); }
rowThree[3].onclick = function() { if(!checkLast("-"))    addElement(' - '); }

var rowFour = allRows[3].querySelectorAll("button");
rowFour[0].onclick = function() { addElement(1); }
rowFour[1].onclick = function() { addElement(2); }
rowFour[2].onclick = function() { addElement(3); }
rowFour[3].onclick = function() { if(!checkLast('+'))    addElement(' + '); }

var rowFive = allRows[4].querySelectorAll("button");
rowFive[0].onclick = function() { addElement(0); }
rowFive[1].onclick = function() { if(checkLast('.'))    addElement('.'); }
rowFive[2].onclick = function() { solve(document.querySelector("#display #input").innerHTML); }





