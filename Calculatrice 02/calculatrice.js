let number = "";

function ShowValue(btn)
{  
  number += btn.value;
  console.log(number);
  document.getElementById("output").innerHTML = number;
}


function quickMath()
{
  console.log(eval(number));
  document.getElementById("output").innerHTML = eval(number);
}


function Reset(btn)
{
  document.getElementById("output").innerHTML = "0";
  number = "";
}


function rem1(btn)
{
  number= number.replace(number.slice(-1), "");
  console.log(number);
  document.getElementById("output").innerHTML = number;
}
