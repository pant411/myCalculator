var strNum1 = '2433845';
var strNum2 = '12094569534';
if(strNum1.length<strNum2.length){
    //console.log("num2");
    let tmp = strNum2;
    strNum2 = strNum1;
    strNum1 = tmp;
}
var text = ''
for(var i=0;i<strNum1.length;i++){
    //text += strNum1[i];
}
console.log(text);