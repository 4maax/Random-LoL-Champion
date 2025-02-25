
document.addEventListener("DOMContentLoaded", function () {

    let top = topLane;
    let jgl = jungleLane;
    let mid = midLane;
    let adc = adcLane;
    let supp = supportLane;

    let currentList = top;
    let defaultImg = "newlogo.png"

    let lane = document.getElementById("chosenLane");
    let champImage = document.getElementById("champDisplay");
    let champName = document.getElementById("champName");
    lane.textContent = ""; 

    let activeButton = null;

    function handleLaneClick(button, laneList, laneName) {
        if (activeButton) {
            activeButton.classList.remove("active");
        }
        button.classList.add("active");
        activeButton = button;
        currentList = laneList;
        console.log('${laneName} Chosen!');
        lane.textContent = laneName;
        champName.textContent = "";
        champImage.src = defaultImg;
    }


    document.getElementById("top-button").addEventListener("click", () => {
        handleLaneClick(document.getElementById("top-button"), top, "Top");
    })

    document.getElementById("jgl-button").addEventListener("click", () => {
        handleLaneClick(document.getElementById("jgl-button"), jgl, "Jungle");
    })

    document.getElementById("mid-button").addEventListener("click", () => {
        handleLaneClick(document.getElementById("mid-button"), mid, "Mid");
    })

    document.getElementById("adc-button").addEventListener("click", () => {
        handleLaneClick(document.getElementById("adc-button"), adc, "ADC");
    })

    document.getElementById("supp-button").addEventListener("click", () => {
        handleLaneClick(document.getElementById("supp-button"), supp, "Support");
    })



    document.getElementById("shuffle-button").addEventListener("click", getRandomChamp);

    function getRandomChamp() {
        let numChamps = currentList.length
        let interval;
        let duration = 2000;
        let speed = 75;

        champName.textContent = "";

        interval = setInterval(() => {
            let rndIndex = Math.floor(Math.random() * numChamps);
            champImage.src = currentList[rndIndex].img;
        }, speed);

        setTimeout(() => {
            clearInterval(interval);
            let finalIndex = Math.floor(Math.random() * numChamps);
            champImage.src = currentList[finalIndex].img;
            champName.textContent = currentList[finalIndex].name;
        }, duration);
    }

})