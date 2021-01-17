const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const result = document.getElementById('result');

options = ['rock','paper','scissor']

computerHandler = () =>{
    const num = Math.floor(Math.random()*3);
    return options[num];
}

userHandler = (uChoice) =>{
    //computers turn to play
    const cChoice = computerHandler();
    getWinner(uChoice,cChoice);
}

getWinner = (uChoice,cChoice) =>{
    if(uChoice === cChoice){
        result.innerHTML = `<h2>Its a draw !! You both choosed ${uChoice}</h2>`;
    }
    else if(
        (uChoice=='rock')&&(cChoice=='paper')
    ||((uChoice=='paper')&&(cChoice=='scissor'))
    ||((uChoice=='scissor')&&(cChoice=='rock'))
    ){
        result.innerHTML = `<h2>Computer wins by choosing ${cChoice}</h2>`;
    }
    else{
        result.innerHTML = `<h2>You win :) Computer choosed ${cChoice}</h2>`;
    }
}

getUserChoice = ()=>{
    rock.addEventListener('click',function(){
        userHandler('rock');
    });
    paper.addEventListener('click',function(){
        userHandler('paper');
    });
    scissor.addEventListener('click',function(){
        userHandler('scissor');
    });
    
}
getUserChoice();
