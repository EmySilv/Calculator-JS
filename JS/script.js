const Back = () => {
    var resultado = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = resultado.substring(
      0, resultado.length - 1
    );
  };

  const Calc = () => {
    var resultado = document.getElementById("result").innerHTML;
    if (resultado) {
      document.getElementById("result").innerHTML = eval(resultado);
    }
  };

  const Clean = () => {
    document.getElementById("result").innerHTML = "";
  };

  const Insert = (num) => {
    var number = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = number + num;
  };