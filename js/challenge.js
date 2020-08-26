let likeCount = 0
let likeStatement
let timerGoing = true

function incrementTimer() {
    let count = document.querySelector("#counter")
    let value = parseInt(count.outerText)
    let newValue = value +1  
    count.innerHTML = newValue
    likeCount = 0
    likeStatement = document.createElement('li')
}

let timer = setInterval(incrementTimer, 1000)

function decrementTimer() {
    let count = document.querySelector("#counter")
    let value = parseInt(count.outerText)
    let newValue = value -1 
    count.innerHTML = newValue
    console.log(value)
    console.dir(count)
}

document.addEventListener('click', function(e){
    let plusButton = document.getElementById('plus')
    let minusButton = document.getElementById('minus')
    let likeButton = document.getElementById('heart')
    let pauseButton = document.getElementById('pause')
    let submitButton = document.getElementById('submit')


    if (e.target == plusButton){
        incrementTimer()
    }
    else if (e.target == minusButton){
        decrementTimer()
    }
    else if (e.target == likeButton){
        let likesUl = document.getElementsByClassName('likes')
        let count = document.querySelector("#counter")
        let value = parseInt(count.outerText)
        likeCount += 1
        likeStatement.innerText = `${value} has been liked ${likeCount} times`
        likesUl[0].append(likeStatement)
    }
    else if (e.target == pauseButton) {
        if (timerGoing == true) {
            window.clearInterval(timer)
            timerGoing = false
            plusButton.disabled = true
            minusButton.disabled = true
            likeButton.disabled = true
            submitButton.disabled = true
            e.target.innerText = "resume"
        } 
        else if (timerGoing == false) {
            timer = setInterval(incrementTimer, 1000)
            timerGoing = true
            plusButton.disabled = false
            minusButton.disabled = false
            likeButton.disabled = false
            submitButton.disabled = false
            e.target.innerText = 'pause'
        }
        

    }
})
