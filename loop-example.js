let num = 100;
for (let num=100; num<=200; num++){
  if (num %3=== 0){
    console.log("Loopy");
  }else if (num % 4 === 0){
    console.log("Lighthouse");
  }else if (num % 3=== 0 && num%4=== 0){
    console.log("LoopyLighthouse");
  }
console.log(num);
}