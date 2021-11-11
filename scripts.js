
init = () => {
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbbortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocketImage = document.getElementById("rocket");

    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");

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
    })

    missionAbbortButton.addEventListener("click", () => {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocketImage.style.left = "0px";
        }
    })


    document.getElementById("up").addEventListener("click", () => {
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    })

    document.getElementById("down").addEventListener("click", () => {
        if (Number(shuttleHeight.innerHTML) >= 10000 ) {
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
        } else {
            shuttleHeight.innerHTML = 0;
        }
    })

    const leftPropertyIncrease = (num) => {
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

    document.getElementById("right").addEventListener("click", () => {
        rocketImage.style.left = leftPropertyIncrease(10);
    })
    
    document.getElementById("left").addEventListener("click", () => {
        rocketImage.style.left = leftPropertyIncrease(-10);
    })

}

window.addEventListener("load", init);