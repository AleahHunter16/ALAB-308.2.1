const PI = 3.1415;
const radius = 5;
const area = PI * Math.pow(radius, 2); // Area of circle
const ReqSpaceOfPlant = 0.8;
const AmtOfPlants = 20;

const MaxNumberPlants = Math.floor(area / ReqSpaceOfPlant);
console.log(`Max Number of Plants: ${MaxNumberPlants}`);

function Growth(Weeks) {
    let Plants = AmtOfPlants * Math.pow(2, Weeks);
    console.log(`Amount of Plants after ${Weeks} week(s): ${Plants}`);
}