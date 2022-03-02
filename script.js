let digitalClock = () => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");
  let time = new Date();
  hours.innerHTML = time.getHours();
  minutes.innerHTML = time.getMinutes();
  seconds.innerHTML = time.getSeconds();
  let h = time.getHours();
  if (h >= 12) {
    ampm.innerHTML = "PM";
  }
};
setInterval(digitalClock, 1000);
let makeDiv = () => {
  let container1 = document.createElement("div");
  container1.id = "dynamicBlock1";
  document.getElementById("showAlarmTime").appendChild(container1);
  let inWakeupvalue1 = document.getElementById("wakeupTime");
  let value1 = inWakeupvalue1.options[inWakeupvalue1.selectedIndex].text;
  document.getElementById(
    "dynamicBlock1"
  ).innerHTML = `Wake Up Time : ${value1}`;
  let container2 = document.createElement("div");
  container2.id = "dynamicBlock2";
  document.getElementById("showAlarmTime").appendChild(container2);
  let inWakeupvalue2 = document.getElementById("lunchtime");
  let value2 = inWakeupvalue2.options[inWakeupvalue2.selectedIndex].text;
  document.getElementById("dynamicBlock2").innerHTML = `Lunch Time : ${value2}`;
  let container3 = document.createElement("div");
  container3.id = "dynamicBlock3";
  document.getElementById("showAlarmTime").appendChild(container3);
  let inWakeupvalue3 = document.getElementById("naptime");
  let value3 = inWakeupvalue3.options[inWakeupvalue3.selectedIndex].text;
  document.getElementById("dynamicBlock3").innerHTML = `Nap Time : ${value3}`;
  let container4 = document.createElement("div");
  container4.id = "dynamicBlock4";
  document.getElementById("showAlarmTime").appendChild(container4);
  let inWakeupvalue4 = document.getElementById("sleeptime");
  let value4 = inWakeupvalue4.options[inWakeupvalue4.selectedIndex].text;
  document.getElementById("dynamicBlock4").innerHTML = `Night Time : ${value4}`;
};
let setTime = () => {
  let i = document.getElementById("wakeupTime").value;
  let l = document.getElementById("lunchtime").value;
  let n = document.getElementById("naptime").value;
  let s = document.getElementById("sleeptime").value;
  let wishShow = document.getElementById("wishShow");
  console.log(s);
  let upperContainerSecond = document.getElementById("upperContainerSecond");
  let hour = new Date().getHours();
  if (i == hour) {
    let upperContainerThird = document.getElementById("upperContainerThird");
    upperContainerThird.style.backgroundImage = "url(./images/Wake.svg)";
    upperContainerSecond.innerHTML = " Good Morning ! have a nice day  ";
    wishShow.innerHTML = "Good Morning!! Wake Up !!";
  }
  if (l == hour) {
    let upperContainerThird = document.getElementById("upperContainerThird");
    upperContainerThird.style.backgroundImage = "url(./images/lunchtime.svg)";
    upperContainerSecond.innerHTML = " let's have some lunch !! ";
    wishShow.innerHTML = "Good Afternoon !! Take Some Sleep";
  }
  if (n == hour) {
    let upperContainerThird = document.getElementById("upperContainerThird");
    upperContainerThird.style.backgroundImage = "url(./images/naptime.jpg)";
    upperContainerSecond.innerHTML = " it's time for a nap. ";
    wishShow.innerHTML = "Good Evening !!";
  }
  if (s == hour) {
    let upperContainerThird = document.getElementById("upperContainerThird");
    upperContainerThird.style.backgroundImage = "url(./images/sleep.png)";
    upperContainerSecond.innerHTML = " close your eyes and go to sleep ";
    wishShow.innerHTML = "Good Evening !!";
  }
  makeDiv();
};
