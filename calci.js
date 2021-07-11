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
    if(eqn.length == 0)
    {
        if(c == '-')    return false;
        return true;
    }
    if(c == '.')
    { 
        if(eqn[eqn.length-1] == '.')    return true;
        return false;
    }
    var exp = ['/', '*', '+', '-', '%'];
    if(eqn[eqn.length-1] == '.')    return true;
    if(exp.includes(eqn[eqn.length-2])) 
        document.querySelector("#display #input").innerHTML = eqn.slice(0, eqn.length-3);
    if((document.querySelector("#display #input").innerHTML).length == 0)   return true; 
    return false;
}

function backspace()
{
    document.querySelector("#display #output").innerHTML = "";
    var eqn = document.querySelector("#display #input").innerHTML;
    document.querySelector("#display #input").innerHTML = eqn.slice(0, eqn.length-1);
}

function solve(s)
{
    if(s.length == 0)   return 0;
    var res = eval(s);
    if(String(res).length < 25)  document.querySelector("#display #output").innerHTML = eval(s);
    else    document.querySelector("#display #output").innerHTML = "NANA";
}

var allRows = document.querySelectorAll(".row");

for(var i=0; i<allRows.length; i++)
{
    var row = allRows[i].querySelectorAll("button");
    for(var j=0; j<row.length; j++)
    {
        row[j].addEventListener("click", function()
        {
            var buttonClicked = this.innerHTML;
            switch (buttonClicked)
            {
                case " AC " : clearInputOuput(); break;
                case " Backspace " : backspace(); break;
                case " 1 " : addElement('1'); break;
                case " 2 " : addElement('2'); break;
                case " 3 " : addElement('3'); break;
                case " 4 " : addElement('4'); break;
                case " 5 " : addElement('5'); break;
                case " 6 " : addElement('6'); break;
                case " 7 " : addElement('7'); break;
                case " 8 " : addElement('8'); break;
                case " 9 " : addElement('9'); break;
                case " 0 " : addElement('0'); break;
                case " % " : if(!checkLast('%'))    addElement(' % '); break;
                case " / " : if(!checkLast('/'))    addElement(' / '); break;
                case " + " : if(!checkLast('+'))    addElement(' + '); break;
                case " - " : if(!checkLast('-'))    addElement(' - '); break;
                case " * " : if(!checkLast('*'))    addElement(' * '); break;
                case " . " : if(!checkLast('.'))    addElement('.'); break;
                case " = " : solve(document.querySelector("#display #input").innerHTML); break;
            }
        });
    }
}
