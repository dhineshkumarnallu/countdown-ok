function one(cb = () => {}) {
  console.log(10)
  countdown("10")
  cb();
}

function two(cb = () => {}) {
  console.log(9)
countdown("9")
  cb();
}

function three(cb = () => {}) {
  console.log(8)
countdown("8")
  cb();
}

function four(cb = () => {}) {
  console.log(7)
countdown("7")
  cb();
}

function five(cb=() => {}) {
  console.log(6)
  countdown("6")
  cb()
} 
function six(cb = () => {}) {
  console.log(5)
  countdown("5")
  cb()
}
function seven(cb = () => {}) {
  console.log(4)
  countdown("4")
  cb();
} 
function eight(cb = () => {}) {
  console.log(3)
  countdown("3")
  cb();
}
function nine(cb = () => {}) {
  console.log(2)
  countdown("2")
  cb();
} function ten(cb = () => {}) {
  console.log(1)
  countdown("1")
  cb();
} function zero() {
  console.log("happy new year")
  countdown("happy new ways");
} 


function countdown(message){
  var count=document.getElementById("dhinesh")
  console.log(count)
  count.innerText=message
}

// one(() => two(() => three(() => four(() => five()) )));

function greet() {
one(() => setTimeout(() => {
   two(() => setTimeout(() => {
     three(() => setTimeout(() => {
     four(() => setTimeout(() => {
     five(()=> setTimeout(() => {
     six(()=> setTimeout(() =>{
     seven(()=> setTimeout(() => {
     eight(()=> setTimeout(() => {
     nine(()=> setTimeout(() => {
     ten(()=> setTimeout(() => {
     zero();
     },1000));
     },1000));
     },1000));
     },1000));
     },1000));
     },1000));
     },1000));
     },1000))
   }, 1000));
}, 1000));
}

greet();





















































































//  function one(cb = () => {}) {
//     console.log(10)
    
//     updatecoundown(10)
// }

// function two(cb = () => {}) {
//     console.log(9)

//     updatecoundown(9)
// }

// function three(cb = () => {}) {
//     console.log(8)

//     updatecoundown(8)
// }

// function four(cb = () => {}) {
//     console.log(7)

//     updatecoundown(7)
// }

// function five(uptatecoundown=() => {}) {
//     console.log(6)
// 		updatecoundown(6)
// } 
// function six(cb = () => {}) {
//     console.log(5)
// 		updatecoundown(5)
// }
//  function seven(cb = () => {}) {
//     console.log(4)
// 		updatecoundown(4)
// } 
// function eight(cb = () => {}) {
//     console.log(3)
// 		updatecoundown(3)
// }
//  function nine(cb = () => {}) {
//     console.log(2)
// 		updatecoundown(2)
// } function ten(cb = () => {}) {
//     console.log(1)
// 		updatecoundown(1)
// } function zero() {
//     console.log("happy new year")
// 		updatecoundown("happy new year")
// } 

// function updatecoundown(message){ 
//   let p = document.getElementById("coundown")
//   p.innerText=message
// }
// // one(() => two(() => three(() => four(() => five()) )));

//  function greet() {
//   one(() => setTimeout(() => {
//      two(() => setTimeout(() => {
//        three(() => setTimeout(() => {
//        four(() => setTimeout(() => {
//        five(()=> setTimeout(() => {
//        six(()=> setTimeout(() =>{
//        seven(()=> setTimeout(() => {
//        eight(()=> setTimeout(() => {
//        nine(()=> setTimeout(() => {
//        ten(()=> setTimeout(() => {
//        zero();
//        },1000));
//        },1000));
//        },1000));
//        },1000));
//        },1000));
//        },1000));
//        },1000));
//        },1000))
//      }, 1000));
//   }, 1000));
// }

// greet();