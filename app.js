var msecond=0 , second=0 , interval , stsp=0 , all=0, list=[], llist , child;
llist=document.getElementById("list");

//puts the current time which is zero waits to start
document.getElementById("timer").textContent=all;

//add eventlistener to buttoms
document.getElementById("st").addEventListener('click',st);
document.getElementById("r").addEventListener('click',rest);
document.getElementById("rc").addEventListener('click',recored);

//add eventListener to make key shourtcut 
document.addEventListener('keypress',keyPressed);


//start the correct function if the correct key pressed 
function keyPressed(e){
    if(e.key=='s'){ st() }
    if(e.key=='r'){ rest() }
    if(e.key=='t'){ recored() }
}

//we add interval and every 100 of 10 milisecond it's second 
//then we print to the screen :)
function timer(){
    interval= setInterval(function(){
    msecond++;
      
    if(msecond==100){
        second++
        msecond=0;
    }
      
    all=second +':'+msecond;
    document.getElementById("timer").textContent = all;
    },10);  
}


// we made an varible to count how number of clicks
// and if 1 click it start 2 stop and rest number of clicks
function st(){
    stsp++;
    if(stsp==1){timer()};
    if(stsp==2){
        clearInterval (interval)
        stsp=0;
    }
}

// it's clear i think :)
function rest(){
    clearInterval(interval);
    second=0; msecond=0; stsp=0; list=[]; all=0;
    document.getElementById("timer").textContent = all;
    document.getElementById("list").textContent = list;
}

//for recored buttom 
//it's add the current time to list array 
//then we create an child element p and add the content 
// we add the last number in the array it's just what we want
//then append it
function recored(){
    list.push(all);
    child = document.createElement('p');
    child.textContent=list[list.length-1];
    llist.appendChild(child);
}