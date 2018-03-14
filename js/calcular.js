$('#somar').click(function(event){
var valor1 = parseFloat($("#valor1").val()); 
var valor2 = parseFloat($("#valor2").val());
var resultado = valor1+valor2;
$('#resultado').val(resultado);
});

$('#subtracao').click(function(event){
var valor1 = parseFloat($("#valor1").val()); 
var valor2 = parseFloat($("#valor2").val());
var resultado = valor1-valor2;
$('#resultado').val(resultado);
});

$('#multiplicacao').click(function(event){
var valor1 = parseFloat($("#valor1").val()); 
var valor2 = parseFloat($("#valor2").val());
var resultado = valor1*valor2;
$('#resultado').val(resultado);
});

$('#divisao').click(function(event){
var valor1 = parseFloat($("#valor1").val()); 
var valor2 = parseFloat($("#valor2").val());
var resultado = valor1/valor2;
$('#resultado').val(resultado);
});

