class BusMallPictures {

  clicks = 0;
  timesShown = 0; 

 
  constructor(
    nameofPicture,
    imageSrc 
  ) {
    this.nameofPicture = nameofPicture;
    this.imageSrc = imageSrc;
  }
}



let allBusmallPics = [


  new BusMallPictures("bag", "Pictures/bag.jpg"),
  new BusMallPictures("banana", "Pictures/banana.jpg"),
  new BusMallPictures("boots", "Pictures/boots.jpg"),
  new BusMallPictures("breakast", "Pictures/breakfast.jpg"),
  new BusMallPictures("chair", "Pictures/chair.jpg"),
  new BusMallPictures("dragon", "Pictures/dragon.jpg"),
  new BusMallPictures("pen", "Pictures/pen.jpg"),
  new BusMallPictures("shark", "Pictures/shark.jpg"),
  new BusMallPictures("sweep", "Pictures/sweep.png"),
  new BusMallPictures("unicorn", "Pictures/unicorn.jpg"),
];


let leftBusMallPic = null; 

let middleBusMallPic = null;

let rightBusMallPic = null;

let totalClicks = 0; 

const MAX_CLICKS = 5; 

const BUSMALL_HEADER = document.getElementById("busmall-header");
const BUSMALL_SECTION = document.getElementById("all-busmall-section");
const LEFT_BUSMALL_IMAGE = document.getElementById("left-busmall-img");
const LEFT_BUSMALL_TEXT = document.getElementById("left-busmall-text");


const MIDDLE_BUSMALL_IMAGE = document.getElementById("middle-busmall-img");
const MIDDLE_BUSMALL_TEXT = document.getElementById("middle-busmall-text");
const RIGHT_BUSMALL_IMAGE = document.getElementById("right-busmall-img");
const RIGHT_BUSMALL_TEXT = document.getElementById("right-busmall-text");

const FINAL_SCORE = document.getElementById("finalScores");


const RESULTS_BUTTON = document.createElement("button");
RESULTS_BUTTON.className = "btn btn-primary";
RESULTS_BUTTON.innerText = "Click me to see results!";
let randomPhotoClick = function () {

  let randomPhotoLeft = Math.floor(Math.random() * allBusmallPics.length); 
  let randomPhotoMiddle = Math.floor(Math.random() * allBusmallPics.length)
  let randomPhotoRight = Math.floor(Math.random() * allBusmallPics.length);

  

for (i = 0; i < MAX_CLICKS; i++) 
{
  if(randomPhotoLeft === randomPhotoMiddle)
  {
   randomPhotoMiddle = Math.floor(Math.random() * allBusmallPics.length);  

  }
  
  
    else if (randomPhotoRight === randomPhotoLeft)
    {
      randomPhotoLeft = Math.floor(Math.random() * allBusmallPics.length); 
    }
    
    else if (randomPhotoMiddle === randomPhotoRight)
    {
      randomPhotoRight = Math.floor(Math.random() * allBusmallPics.length); 
    }
  

}

  
  LEFT_BUSMALL_IMAGE.src = allBusmallPics[randomPhotoLeft].imageSrc;
  LEFT_BUSMALL_TEXT.innerText = allBusmallPics[randomPhotoLeft].nameofPicture;

  
  MIDDLE_BUSMALL_IMAGE.src = allBusmallPics[randomPhotoMiddle].imageSrc;
  MIDDLE_BUSMALL_TEXT.innerText =
    allBusmallPics[randomPhotoMiddle].nameofPicture;

  
  RIGHT_BUSMALL_IMAGE.src = allBusmallPics[randomPhotoRight].imageSrc;
  RIGHT_BUSMALL_TEXT.innerText = allBusmallPics[randomPhotoRight].nameofPicture;

  
  leftBusMallPic = allBusmallPics[randomPhotoLeft];
  middleBusMallPic = allBusmallPics[randomPhotoMiddle];
  rightBusMallPic = allBusmallPics[randomPhotoRight];

 
};




const handleClickOnPicture = function (evt) {
  
  console.log(`You clicked this target element id ${evt.target.id}`);
  
  if (totalClicks < MAX_CLICKS) {
    

    const thingWeClickedOn = evt.target; 
    const id = thingWeClickedOn.id; 

    
    leftBusMallPic.timesShown++; 
    middleBusMallPic.timesShown++; 
    rightBusMallPic.timesShown++; 

  

    console.log(
      `Left pic ${leftBusMallPic.nameofPicture} has been shown ${leftBusMallPic.timesShown}, middle pic ${middleBusMallPic.nameofPicture} has been shown ${middleBusMallPic.timesShown}, and the right pic ${rightBusMallPic.nameofPicture} has been shown ${rightBusMallPic.timesShown} so far.`
    );

    
    if (
      id === "left-busmall-img" ||
      id === "right-busmall-img" ||
      id === "middle-busmall-img"
    ) {
      

      if (id === "left-busmall-img") {
        
        leftBusMallPic.clicks++; 
        console.log(
          `Left pic ${leftBusMallPic.nameofPicture} has ${leftBusMallPic.clicks} so far`
        );
      }

      if (id === "middle-busmall-img") {
        
        middleBusMallPic.clicks++; 
        console.log(
          `Middle pic ${middleBusMallPic.nameofPicture} has ${middleBusMallPic.clicks} so far`
        );
      }

      if (id === "right-busmall-img") {
        
        rightBusMallPic.clicks++; 
        console.log(
          `Right pic ${rightBusMallPic.nameofPicture} has ${rightBusMallPic.clicks} so far`
        );
      }

      
    }
    randomPhotoClick();
  }


  totalClicks++;
  
  if (totalClicks === MAX_CLICKS) {
    BUSMALL_SECTION.removeEventListener("click", handleClickOnPicture); 
    console.log("You picked 5 pictures, thanks!"); 

    
    BUSMALL_SECTION.appendChild(RESULTS_BUTTON); 
    RESULTS_BUTTON.addEventListener("click", finalResultsTotal); 
    function finalResultsTotal() {
      makeAChart(); 
      updateLocalData();

      
      for (let index = 0; index < allBusmallPics.length; index++) {
  
        let newLiScore = document.createElement("li");
        newLiScore.className = "list-group-item"
        newLiScore.innerText = `${allBusmallPics[index].nameofPicture}: ${allBusmallPics[index].clicks}`; 
        FINAL_SCORE.appendChild(newLiScore); 
      }
    }
  }
};




function makeAChart() {
  
  let storeTheNamesArray = [];
  let storeTheTotalsArray = []; 
  let timesShownArray = [];

  
  for (i = 0; i < allBusmallPics.length; i++) {
    

    storeTheTotalsArray.push(allBusmallPics[i].clicks); 
    storeTheNamesArray.push(allBusmallPics[i].nameofPicture);
    timesShownArray.push(allBusmallPics[i].timesShown); 
  }

  console.log(storeTheNamesArray); 
  console.log(storeTheTotalsArray); 
  console.log(timesShownArray); 
  

  
  const labelsForChart = storeTheNamesArray;
  

  const data = {
    labels: labelsForChart, 
    datasets: [
      {
        label: "Clicks", 
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: storeTheTotalsArray, 
      },
      {
        label: "Times Image Is Shown", 
        backgroundColor: "#99FF99",
        borderColor: "#99FF99",
        data: timesShownArray, 
      },
    ],
  };

  const configTheData = {
    type: "bar",
    data,
    options: {},
  };

  
  let myBusMallChart = new Chart( 
    document.getElementById("myChart"),
    configTheData
  )
}

BUSMALL_SECTION.addEventListener("click", handleClickOnPicture); 
randomPhotoClick(); 


function updateLocalData() {

  const arrayString = JSON.stringify(allBusmallPics); 
  
  localStorage.setItem("allproducts", arrayString); 
}



function getLocalStorage() {
  const oldData = localStorage.getItem("allproducts");

  
  const allProductData = JSON.parse(oldData);

  
  if (allProductData !== null) {
    allBusmallPics = allProductData;
  } else {
    console.log("Local Storage ready...");
  }
}

getLocalStorage(); 


C:\Users\student\Desktop\busmall2\busmallproject