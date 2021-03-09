const content = document.getElementById('content');
const visor = document.getElementById('visor');
const point = document.getElementsByClassName('point');
const n9 = document.getElementsByClassName('n9');
const n8 = document.getElementsByClassName('n8');
const n7 = document.getElementsByClassName('n7');
const n6 = document.getElementsByClassName('n6');
const n5 = document.getElementsByClassName('n5');
const n4 = document.getElementsByClassName('n4');
const n3 = document.getElementsByClassName('n3');
const n2 = document.getElementsByClassName('n2');
const n1 = document.getElementsByClassName('n1');
const n0 = document.getElementsByClassName('n0');
const mas = document.getElementsByClassName('mas');
const menos = document.getElementsByClassName('menos');
const mult = document.getElementsByClassName('mult');
const divid = document.getElementsByClassName('divid');
const equal = document.getElementsByClassName('equal');
const retr = document.getElementsByClassName('retr');
const footdate = document.getElementById('footerdate');



// Fecha 

const date = new Date();
let time = date.toString().slice(0,15);
console.log(date);
console.log(time);
footdate.textContent=(time);


// const year = date.getFullYear();
// const month = date.getMonth()+1;
// const day = date.getDay();

// console.log(`${year}/${month}/${day}`);
// console.log(foot.children[1]);

// foot.textContent=`${year}/${month}/${day}`;


first_num="";
second_num="";
let operation="";

const operate = (operation) =>{
    if(first_num.length>0 && second_num.length>0){
    switch(operation){
        case "+":
            result = parseFloat(first_num)+parseFloat(second_num);
            visor.textContent=result;
            first_num=result.toString();
            second_num="";
            
            break;
        case "-":
            result = parseFloat(first_num)-parseFloat(second_num);
            visor.textContent=result;
            first_num=result.toString();
            second_num="";
            break;
        case "*":
            result = parseFloat(first_num)*parseFloat(second_num);
            visor.textContent=result;
            first_num=result.toString();
            second_num="";
            break;
        case "/":
            if(first_num != "0" && second_num != "0"){
            result = parseFloat(first_num)/parseFloat(second_num);
            visor.textContent=result;
            first_num=result.toString();
            second_num="";
            }else{
                visor.textContent="Error";
                setTimeout(function() {
                    visor.textContent="0";
                    }, 1000);
                first_num="";
                second_num="";
            }

            break;
        default:
            break;
        }
    }
}

const clear = () =>{
    first_num="";
    second_num ="";
    operation="";
    visor.textContent="0";
}

const input_value =(value) =>{
    
    if(operation=="" || first_num==""){
        
        if((visor.textContent=="0" || parseInt(visor.textContent)==0) && value!="."){
            visor.textContent="";
        }   
        visor.textContent+=value;
        first_num+=(value);
    }
    else{
        if((second_num.length==0 || parseInt(visor.textContent)==0) && value!="."){
            visor.textContent="";
        }   
        else if(second_num.length==0 && value=="."){
            visor.textContent="0";
        }   
        visor.textContent+=value;
        second_num+=(value);
    
    }
}

const retro =() =>{

    if(operation==""){
        
        if(visor.textContent.length>1)
        {
            visor.textContent=visor.textContent.slice(0, -1);
            first_num=visor.textContent;
        }
        else 
        {
            visor.textContent="0";
            first_num="0";
        }
    }
    else
    {
        if(visor.textContent.length>1)
        {
            visor.textContent=visor.textContent.slice(0, -1);
            second_num=visor.textContent;
        }
        else 
        {
            visor.textContent="0";
            second_num="0";
        }
    }
}

document.addEventListener('keydown', (e) =>{
    
    switch(e.key){
        case "+":
            efect(mas[0]);
            break;
        case "-":
            efect(menos[0]);
            break;
        case "/":
            efect(divid[0]);
            break;
        case "*":
            efect(mult[0]);
            break;
        case "1":
            efect(n1[0]);
            break;
        case "2":
            efect(n2[0]);
            break;
        case "3":
            efect(n3[0]);
            break;
        case "4":
            efect(n4[0]);
            break;
        case "5":
            efect(n5[0]);
            break;
        case "6":
            efect(n6[0]);
            break;
        case "7":
            efect(n7[0]);
            break;
        case "8":
            efect(n8[0]);
            break;
        case "9":
            efect(n9[0]);
            break;
        case "0":
            efect(n0[0]);
            break;
        default:
            break;
    }


    if (e.key < 48 || e.key > 57)
    {
        input_value(e.key);
    }
    
    operationes = ["+","-","/","*"];
    
    
    if(operationes.indexOf(e.key) > -1)
    {
        if (first_num.charAt(first_num.length-1) == ".")
        {
            first_num=first_num.slice(0, -1);
        }
        operation=(e.key);
    }
    
   
    if(e.key=="Enter")
    {
        if (second_num.charAt(second_num.length-1) == ".")
        {
            second_num=second_num.slice(0, -1);
        }
        operate(operation);
        efect(equal[0]);
        
    }
    if(e.key==".")
    {
        if (visor.textContent.charAt(visor.textContent.length-1) !=".")
        {
            input_value(e.key);
        }
        efect(point[0]);
    }
    
    if(e.key=="Backspace")
    {
        retro();
        efect(retr[0]);
    }
});

const efect =(element)=>{
    element.style.boxShadow="0 0 15px black";
    element.style.transform="scale(0.95)";
    setTimeout(function()
    {
        element.style.boxShadow="none";
        element.style.transform="scale(1)";
    }, 200);
}
    


content.addEventListener('click', (e)=>
{
    if (e.target.classList[1] =='number' || e.target.classList[1] =='point')
    {
        input_value(e.target.textContent);
        efect(e.target);
    }
        
    if(e.target.classList[1] =='clear')
    {
        efect(e.target);
        if (e.target.textContent=="C")
        {
            clear();
        }
        else if (e.target.textContent=="←")
        {
            retro();
        }
    }
    
    if (e.target.classList[1] =='operations')
    {
        efect(e.target);
        if (e.target.textContent!="=" && first_num.length>0)
        {
            if (first_num.charAt(first_num.length-1) == ".")
            {
                first_num=first_num.slice(0, -1);
            }
            operation=(e.target.textContent);
        }
        else if (e.target.classList[0]=="equal")
        {
            if (second_num.charAt(second_num.length-1) == ".")
            {
                second_num=second_num.slice(0, -1);
            }      
            operate(operation);
        }
    }  
});