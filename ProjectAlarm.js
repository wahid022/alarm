var alarmsound = new Audio();
alarmsound.src = "music.mp3";
let alarm_list = [];
var list = document.querySelector(".alarmlist");


setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    let time = `${hr}:${min}:${sec}`;
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hourstick.style.transform = `rotate(${hr_rotation}deg)`;
    minutestick.style.transform = `rotate(${min_rotation}deg)`;
    secondstick.style.transform = `rotate(${sec_rotation}deg)`;

    for (let i = 0; i < alarm_list.length; i++) {
      
        if (alarm_list[i] === time) {
            initiateAlarm();
           
        }
    }
   
},
    1000);


function initiateAlarm() {
    console.log("alarm ringing")
    alarmsound.play();
    document.getElementById('option').style.display = '';
}
function Snooze() {
    Stop();
    setTimeout(initiateAlarm, 5000);
}
function Stop() {
    alarmsound.pause();
    alarmsound.currentTime = 0;
    document.getElementById('option').style.display = 'none';
}

//shownew_Alarm FUNCTION ADD NEW ALARM IN NEW LIST WITH DELETE BUTTON
function show_new_Alarm(new_Alarm) {
    //     const html = `<li class="time-list">
    //         <span class="time">${new_Alarm}</span>
    //         <button class="deleteAlarm time-control" id="delete-button" onclick="remove(this.value)" >Delete</button>
    //     </li >`;

    //    list.innerHTML+=html;
    console.log(list);
}
function display(alarm_list) {
    list.innerHTML = "";
    for (let i = 0; i < alarm_list.length; i++) {
        const html =
            `<li class="time-list">
        <span class="time" >${alarm_list[i]}     
         <button class="deleteAlarm time-control" id="delete-button" onclick="remove(this.value)" value=${alarm_list[i]} >Delete</button>
        </span> 
         </li>`;
        list.innerHTML += html;

    }

}
function setAlarm() {

    var time = document.getElementById('inputTime').value;
    console.log(time);
    if (time == null) {
        alert('Invalid Time');
        return;
    }
    if (alarm_list.includes(time)) {
        alert('Alarm Already Exists');
        console.log('Alarm Already Exists');
    } else if (!alarm_list.includes(time)) {
        var c = alarm_list.push(time);

        console.log(c);
        display(alarm_list);
    }

}
function remove(value) {


    console.log(value);
    // let new_list = alarm_list.filter((time) =>time!= value);
    // alarm_list.length = 0;  //clear content
    // alarm_list.push.apply(alarm_list, new_list);
    for (let i = 0; i < alarm_list.length; i++) {
        console.log("alarm_list");
        if (alarm_list[i] === value) {
            console.log("under if condn")
            alarm_list.splice(i,1);
            // arr.splice(i, 1); 
        }
    }
    console.log(alarm_list);
    display(alarm_list);
}