
let modal = $('.modal');
modal.css('left', (window.innerWidth - modal.width()) / 2);

let modalWinner = $('.modal-winner');
modalWinner.css('left', (window.innerWidth - modalWinner.width()) / 2);

let modalLoser = $('.modal-loser');
modalLoser.css('left', (window.innerWidth - modalLoser.width()) / 2);

var time = 60
var timer;
var second = document.getElementById('second');
var minutes = document.getElementById('minutes');

function start() {
    $('.start').prop('disabled', true)
    $('.check').prop('disabled', false)
    timer = setInterval(function () {
        if (time >= 1) {
            time -= 1 / 60;
            secondVal = Math.floor(time) - Math.floor(time / 60) * 60;
            minutesVal = Math.floor(time / 60);
            if (secondVal < 10) secondVal = '0' + secondVal;
            if (minutesVal < 10) minutesVal = '0' + minutesVal
            minutes.innerHTML = minutesVal
            second.innerHTML = secondVal
            document.querySelector('p').innerHTML = `You still have time, you sure? ${minutesVal}:${secondVal}`
        }
        else {
            Check()
        }


    }, 1000 / 60);
}



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    if (minutes.innerHTML == 01 && second.innerHTML == 00) {
        start()
    }
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

}

for (let i = 1; i <= 300; i++) {
    k = Math.round(Math.random() * 15)
    if (document.querySelector(`.p${k}`)) {
    }
    else {
        document.querySelector('.puzzle').innerHTML += `<div class="square">
    <div class="p${k}" draggable="true" ondragstart="drag(event)" id="drag${k}"></div>
</div> `}


}

function newGame() {
    document.location.reload()
}

function checkResult() {
    $('.modal-container').css('display', 'block')
    $('.modal').css('display', 'block')

}

function Close() {
    $('.modal-container').css('display', 'none')
    $('.modal').css('display', 'none')

}


function Close2() {
    $('.modal-container').css('display', 'none')
    $('.modal-loser').css('display', 'none')
    $('.modal-winner').css('display', 'none')
    $('.modal').css('display', 'none')
    clearInterval(timer);

}
function Check() {
    clearInterval(timer);
    $('.check').prop('disabled', true)
    let square = document.querySelectorAll('.square2');
    let n = 0;

    for (let i = 0; i < square.length; i++) {
        if (square[i].firstChild) {
            if (square[i].firstChild.className == `p${i}`) {
                n++;
                if (n == 16) {
                    $('.modal-container').css('display', 'block')
                    $('.modal-winner').css('display', 'block')
                }

            } else {
                $('.modal-container').css('display', 'block')
                $('.modal-loser').css('display', 'block')
            }
        }
        else {
            $('.modal-container').css('display', 'block')
            $('.modal-loser').css('display', 'block')
        }

    }

}