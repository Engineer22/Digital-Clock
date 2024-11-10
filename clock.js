

function showTime() {
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    
    let updateDate = date.toDateString()

    
  

    console.log( updateDate )

    let time = document.getElementById('time');

    let dateformate = document.getElementById('dateformate');

    dateformate.innerHTML = updateDate


    let updateTime = `${hr} : ${mins} : ${secs}`


    time.innerHTML = updateTime


    console.log(updateTime)

}



setInterval(() => {


    showTime()
}, 1000);




