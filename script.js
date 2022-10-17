
let count = 0;
let a_vol = 1;

let aud = document.getElementById('aud');

let btn = document.querySelectorAll('#box-btn');
let dis = document.getElementById('display_result');
let timer = document.getElementById('timer');


let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

let music = document.getElementById('icon-vol');

music.addEventListener('click',()=>{

    if(a_vol%2 ==  0){
        aud.setAttribute('src','');
        music.setAttribute('src','./media/vol-off.png');
        a_vol++;
    }else{
        a_vol++;
        aud.volume = 0.1;
        music.setAttribute('src','./media/vol-on.png');
        aud.setAttribute('src','./media/game-sound.mp3');
       
    }
    

})





function fun(a) {
    if (count <= 9) {
        if (count % 2 == 0) {
            if (a.innerText == "") {
                a.innerText = 'O';
                a.style.background = "#790252";
                a.style.color = "#FFFAE7";
                p1.style.background = '';
                p2.style.background = '#25316D';
                p2.style.color = p1.style.color = '#FFFAE7'
                count++;
            }

        } else if (count % 2 != 0) {
            if (a.innerText == "") {
                a.innerText = 'X';
                a.style.background = "#25316D";
                a.style.color = "#FFFAE7";

                p2.style.background = '';
                p1.style.background = '#790252';
                p2.style.color = p1.style.color = '#FFFAE7'
                
                count++;

            }
        }
        win();
    }
}

let p,flag = 0;


function reset() {

    
    let time = 10;
    
        flag = 1;
        
        if(time == 10){
            p = setInterval(()=>{

               timer.innerHTML = `Game Will auto reset in <h1>${time}</h1>for Instant reset click on reset button`;

                time = time-1;
                if(time < -1){                 
                    instant_reset();
                }
        
            },1000)
            
        }
    

}
function instant_reset() {

    if(flag == 1){
        clearInterval(p);
    }
    
    dis.innerHTML = `Try your Luck once again<br>
    All The Best`;
    dis.style.color = '#100720';
    dis.style.backgroundColor = timer.innerHTML = p2.style.background = p1.style.background = '';
    p1.style.color = p2.style.color =  'black';
    
        
        btn.forEach((e) => {
            e.innerText = '';
            e.style.background = "";
            count = 0;
            flag =0;
        });

}



function win() {

    if ((btn[0].innerText == "O" && btn[1].innerText == 'O' && btn[2].innerText == 'O') ||
        (btn[3].innerText == "O" && btn[4].innerText == 'O' && btn[5].innerText == 'O') ||
        (btn[6].innerText == "O" && btn[7].innerText == 'O' && btn[8].innerText == 'O') ||
        (btn[0].innerText == "O" && btn[3].innerText == 'O' && btn[6].innerText == 'O') ||
        (btn[1].innerText == "O" && btn[4].innerText == 'O' && btn[7].innerText == 'O') ||
        (btn[2].innerText == "O" && btn[5].innerText == 'O' && btn[8].innerText == 'O') ||
        (btn[0].innerText == "O" && btn[4].innerText == 'O' && btn[8].innerText == 'O') ||
        (btn[2].innerText == "O" && btn[4].innerText == 'O' && btn[6].innerText == 'O')
    ) {
        dis.innerHTML  = `<p> Player 1 Won the Game </p>`;
        dis.style.backgroundColor = "#790252";
        aud.setAttribute('src','./media/win-music.mp3');
        dis.style.color = '#FFFAE7';
        p2.style.background = '';
        p1.style.background = '';
        reset();//auto reset with timer

    } else if (
        (btn[0].innerText == "X" && btn[1].innerText == 'X' && btn[2].innerText == 'X') ||
        (btn[3].innerText == "X" && btn[4].innerText == 'X' && btn[5].innerText == 'X') ||
        (btn[6].innerText == "X" && btn[7].innerText == 'X' && btn[8].innerText == 'X') ||
        (btn[0].innerText == "X" && btn[3].innerText == 'X' && btn[6].innerText == 'X') ||
        (btn[1].innerText == "X" && btn[4].innerText == 'X' && btn[7].innerText == 'X') ||
        (btn[2].innerText == "X" && btn[5].innerText == 'X' && btn[8].innerText == 'X') ||
        (btn[0].innerText == "X" && btn[4].innerText == 'X' && btn[8].innerText == 'X') ||
        (btn[2].innerText == "X" && btn[4].innerText == 'X' && btn[6].innerText == 'X')
    ) {
        dis.innerHTML  = `<p> Player 2 Won the Game </p>`;
        aud.setAttribute('src','./media/win-music.mp3');
        dis.style.backgroundColor = "#25316D";
        dis.style.color = '#FFFAE7';
        p2.style.background = '';
        p1.style.background = '';
        reset();

    }
    else if(count == 9){

        dis.innerHTML  = `<p> Game Draw </p>`;
        dis.style.backgroundColor = "#FF1E00";
        p2.style.background = '';
        p1.style.background = '';
        reset();

    }

}











