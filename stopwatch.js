let hr = 0;
let min = 0;
let sec = 0;
console.log('time interval');
function start(){
const idOfInterval = setInterval(timer,1100);
function timer(){
    sec += 1;
    if(sec === 60)
    {
        min += 1;
        sec = 0;
        if(min < 10)
            document.getElementById('min').innerText = "0"+min;
        else
            document.getElementById('min').innerText = min;
    }
    if(min === 60)
    {
        hr += 1;
        min = 0;
        if(hr < 10)
            document.getElementById('hour').innerText = "0"+hr;
        else
            document.getElementById('hour').innerText = hr;
        
    }
    
    if(sec < 10)
    {
        document.getElementById('sec').innerText = "0"+sec;
    }
    else
        document.getElementById('sec').innerText = sec;

    const stop = document.getElementById('stop');
    stop.addEventListener('click',()=>{
        clearInterval(idOfInterval);
    })

    const reset = document.getElementById('reset');
    reset.addEventListener('click',()=>{
        hr = 0;
    min = 0;
    sec = 0;
        clearInterval(idOfInterval);

    document.getElementById('hour').innerText = "00";
    document.getElementById('min').innerText = "00";
    document.getElementById('sec').innerText = "00";
    })
}

}



