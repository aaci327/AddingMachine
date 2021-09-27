var sum = 0;
var count = 0;

function number(x)
{
  count = count + x;
  var result2 = "The number of buttons you clicked " + parseInt(count) + "!";
  document.getElementById("output2").innerHTML = result2;
}

function add(x)
{
    sum = sum + x;
    var result1 = "The sum is " + parseInt(sum) + "!";
    document.getElementById("output").innerHTML = result1;
}

function gone()
{
  sum = 0;
  count = 0;
  document.getElementById("output").innerHTML = "" ;
  document.getElementById("output2").innerHTML = "" ;

}
