
init = () => {
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbbortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocketImage = document.getElementById("rocket");


    takeOffButton.addEventListener("click", () => {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
    })

    landingButton.addEventListener("click", () => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocketImage.style.left = "0px";
        rocketImage.style.top = "250px";
    })

    missionAbbortButton.addEventListener("click", () => {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocketImage.style.left = "0px";
            rocketImage.style.top = "250px";
        }
    })

    const horizontalPropertyIncrease = (num) => {
        let value = Number(rocketImage.style.left.replace("px", ""));
        value += num;
        if (value >= 230) {
            value = 230
        }
        if (value <= -230) {
            value = -230
        }
        return value + 'px';
        
    };

    const verticalPropertyIncrease = (num) => {
        let value = Number(rocketImage.style.top.replace("px", ""));
        value += num;
        if (value >= 250) {
            value = 250
        }
        if (value <= 0) {
            value = 0
        }
        return value + 'px';
        
    };

    document.getElementById("up").addEventListener("click", () => {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        rocketImage.style.top = verticalPropertyIncrease(-10);
    })

    document.getElementById("down").addEventListener("click", () => {
        if (Number(shuttleHeight.innerHTML) >= 10000 ) {
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
            rocketImage.style.top = verticalPropertyIncrease(10);
        } else {
            shuttleHeight.innerHTML = 0;
        }
    })

    document.getElementById("right").addEventListener("click", () => {
        rocketImage.style.left = horizontalPropertyIncrease(10);
    })
    
    document.getElementById("left").addEventListener("click", () => {
        rocketImage.style.left = horizontalPropertyIncrease(-10);
    })

}

window.addEventListener("load", init);