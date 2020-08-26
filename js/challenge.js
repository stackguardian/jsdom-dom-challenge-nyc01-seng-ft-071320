function incrementTimer() {
    let count = document.querySelector("#counter")
    let value = parseInt(count.outerText)
    let newValue = value +1  
    count.innerHTML = newValue
}

setInterval(incrementTimer, 1000)

function decrementTimer() {
    let count = document.querySelector("#counter")
   let value = parseInt(count.outerText)
   let newValue = value -1 
    count.innerHTML = newValue
    console.log(value)
    console.dir(count)
  }

  document.addEventListener('click', function(e){
    if (e.target == document.getElementById('plus')){
        incrementTimer()
    }
    else if 
    (e.target == document.getElementById('minus')){
        decrementTimer()
    }

})
