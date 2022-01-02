setInterval(() => {
    var currTime = new Date()
    if(currTime.getHours()>12){
        document.getElementById('hourHand').style.transform=`rotate(-90deg) rotate(${((currTime.getHours()-12)/12)*360}deg) translateX(50%)`;
        document.getElementById('hourHand').style.transition='all 1s ease-in-out';
    }
    else{
        document.getElementById('hourHand').style.transform=`rotate(-90deg) rotate(${(currTime.getHours()/12)*360}deg) translateX(50%)`;
        document.getElementById('hourHand').style.transition='all 1s ease-in-out';
    }

    document.getElementById('minuteHand').style.transform=`rotate(-90deg) rotate(${(currTime.getMinutes()/60)*360}deg) translateX(50%)`;
    document.getElementById('minuteHand').style.transition='all 1s ease-in-out';

    document.getElementById('secondHand').style.transform=`rotate(-90deg) rotate(${(currTime.getSeconds()/60)*360}deg) translateX(50%)`;
}, 1000);