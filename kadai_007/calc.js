// 変数numに1以上の正の数を代入
let num = Math.floor(Math.random() * 31) 

// 3と5の倍数の判定を最初に書く
if (num % 3 === 0 && num % 5 === 0){
  console.log('3と5の倍数です');
}else if (num % 3 === 0){
  console.log('3の倍数です');
}else if (num % 5 === 0){
  console.log('5の倍数です');
}else{
  console.log(num);
}
