for (var num = 100; num <= 200; num++){
  if ((num % 3 === 0) && (num % 4 === 0)) {
    console.log('LoopyLighthouse')
  } else if (num % 3 === 0) {
    console.log('Loopy')
  } else if (num % 4 === 0) {
    console.log('Lighthouse')
  } else {
    console.log(num);
  }
}

var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();