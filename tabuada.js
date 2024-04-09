function multiplicacao(){
var num = window.document.getElementById('num1')
var end = window.document.getElementById('num2')
if (num.value.length == 0 || end.value.length == 0){
    window.alert('[ERRO]Confira os seus dados')
} else {
var n1 = Number(num.value)
var n2 = Number(end.value)
var x = 0
var r = ''
var res = window.document.getElementById('resposta')
res.innerHTML = `A Tabuada do ${n1} é: <br>`
do {
  r = n1*x
  res.innerHTML += `${x} x ${n1} = ${r} <br>`
  x++
} while(x <= n2)
}
}
