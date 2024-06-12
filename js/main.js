{
function five (a,b,c){
    let d=0
    let h=0
if(a>0){
 d++
} else {
h++
}
if(b>0){
    d++
}else {
    h++
}
if (c>0){
    d++
} else{
    h++
}
return`${d} ta manfiy ${h} ta musbat`
}
console.log(five(5,-5,5));
}
{
function six (a,b){
    
if(a>b){
 return`${a} soni katta`
} else {
return `${b} soni katta`;
}

}
console.log(six(8,5));
}
{
function eight (a,b){
    
if(a>b){
 return`${a} soni katta ${b} soni kichik`
} else  {

}
if(b>a){
 return `${b} soni katta ${a} soni kichik`;
} else  {

}

}
console.log(eight(8, 10));
}
{
function nine (a,b){
    let c=0
if(a>b){
  c=  a+b
 return`${c} `
} else  {
return`${b} soni ozi katta ekan`
}


}
console.log(nine(15,10));
}
{
function ten (a,b){
    let c=0
if(a==b){
  
 return `${c}  ${a} va ${b} sonlar o'zaro teng  ekan `;
} else  {
   c= a+b
return` javob ${c}  ${a} va ${b} sonlar o'zaro teng emas ekan`
}


}
console.log(ten(15,10));
}
{
function eleven (a,b){
    let c=0
if(a==b){
  
 return `${c}  ${a} va ${b} sonlar o'zaro teng  ekan `;
} else if(a>b) {
   
return ` javob  ${a} soni katta`
} else if(b>a){
    return`${b} soni katta`
}


}
console.log(eleven(1,15));
}