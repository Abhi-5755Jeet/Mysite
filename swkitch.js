const prompt=require("prompt-sync")({sight:true})
let x,y,result;
x=prompt("enter x:");
y=prompt("enter y:");
console.log("1.add  2.subtract  3.multi  4.div");
let choice=prompt("enter the choice");
switch(choice)
{   case '1':
    result=parseInt(x) + parseInt(y);
    console.log("add is =", result);
    break;
    case '2':
    result=parseInt(x) - parseInt(y);
    console.log("subtraction =", result);
    break;
    case '3':
    result=parseInt(x) * parseInt(y);
    console.log("multi =",result);
    break;
    case '4':
     result=parseInt(x) % parseInt(y);
     console.log("div =",result);
     break;
    default:
    console.log("invalid input");
}
