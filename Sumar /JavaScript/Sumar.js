  function suma(){
            var numero1 = document.getElementById("numero1").value;
            var numero2 = document.getElementById("numero2").value;
            var sumar = parseInt(numero1) + parseInt(numero2)
            document.writeln(sumar)
        }
        var arreglo = [3, 3];
    	  var suma = 0;
    	  for(var i = 0 ; i < arreglo.length; i++)
    	  {
    	  	suma += arreglo[i];
    	  }
    	  document.write("Total: " + suma);
