let hScore = 0
let gScore = 0
let hScoreEl = document.getElementById("home-score")
let gScoreEl = document.getElementById("guest-score")

function plusOneH() {
    hScore += 1
    hScoreEl.textContent = hScore
}

function plusTwoH() {
    hScore += 2
    hScoreEl.textContent = hScore
}

function plusThreeH() {
    hScore += 3
    hScoreEl.textContent = hScore
}

function plusOneG() {
    gScore += 1
    gScoreEl.textContent = gScore
}

function plusTwoG() {
    gScore += 2
    gScoreEl.textContent = gScore
}

function plusThreeG() {
    gScore += 3
    gScoreEl.textContent = gScore
}

function startOver() {
    hScore = 0
    gScore = 0  
    hScoreEl.textContent = hScore  
    gScoreEl.textContent = gScore
}
