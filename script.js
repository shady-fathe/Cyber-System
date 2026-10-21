let MainTargetNumber = document.getElementById("TargetNumber");
let ProssesTargetNumber = document.getElementById("Prosses-Target-Number");
let targetpercint = document.querySelector(".target-percint");
let popuptarget = document.querySelector(".popup-target");
let popupTargetinput = document.querySelector(".popup-target input");
let BtnPopupNumber = document.querySelectorAll(".popup-number");
let PopupBtnDelete = document.querySelector(".popup-btn-delete");
let PopupBtnDeleteAll = document.querySelector(".popup-btn-delete-all");
let btnSetTarget = document.querySelector(".btn-Set-Target");
let MainTarget = localStorage.getItem("Target");
let ProssesTarget = localStorage.getItem("ProssesTarget");
let btnstartTime = document.querySelectorAll(".start");
let timer = document.querySelectorAll(".timer");
let OfflineCountPc = document.getElementById("Offline-pc-count");
let OnlineCountPc = document.getElementById("Online-pc-count");
let OfflineCountPS = document.getElementById("Offline-ps-count");
let OnlineCountPS = document.getElementById("online-ps-count");
/////////////////////
let percint;
let OnlinePC;
let OfflinePC; 
let onlinePS;
let OfflinePS;
/////////////////////
// OnlineCountPc.inner




function updateValues(){
   MainTargetNumber.textContent = "$" + MainTarget;
   if (ProssesTarget === null) {
     ProssesTarget = 0
     // after that the ProssesTarget will be Equal ps + pc + dr Daily money  colected to show A pircent of target 
    }else{
    ProssesTargetNumber.textContent = "$" + ProssesTarget;
  }
  targetpercint.textContent = percint + "%"; 
if (popupTargetinput.value === "") {
  MainTarget = 0;
}

OfflineCountPc.innerHTML = '0'
OnlineCountPc.innerHTML = '0'
OfflineCountPS.innerHTML = '0'
OnlineCountPS.innerHTML = '0'



}

// Target functions
// Function Remove popup
function popupExit() {
  popuptarget.style.opacity = 0;
  popuptarget.style.pointerEvents = "none";
}
// Function To Change the Target

function openPopupTarget() {
  popuptarget.style.opacity = 1;
  popuptarget.style.pointerEvents = "auto";
  popupTargetinput.setAttribute("placeholder", "Type Valid number");
  
}
// add Numbers and Delete in popup target
function addDeleteNm() {
  BtnPopupNumber.forEach((e) => {
    e.addEventListener("click", () => {
      popupTargetinput.value += e.value;
    });
  });
  PopupBtnDelete.onclick = () => {
    if (popupTargetinput.value > 0) {
      popupTargetinput.value -= 1;
    } else if (popupTargetinput.value == 0) {
      popupTargetinput.value = "";
    }
  };
  PopupBtnDeleteAll.onclick = () => {
    popupTargetinput.value = "";
  };
  btnSetTarget.onclick = () => {
    if (popupTargetinput.value === "") {
      popupTargetinput.setAttribute("placeholder", "not valid number");
    } else {
      MainTarget = popupTargetinput.value;
      popupTargetinput.value = "";
      popupTargetinput.setAttribute("placeholder", "done");
      popupTargetinput.style.textAlign = "center";
      JSON.stringify(localStorage.setItem("Target", MainTarget));
      TargetValus();
      popupExit();
    }
  };
}

 function TargetValus() {
  if (JSON.parse(localStorage.getItem("Target") === null)) {
    JSON.stringify(localStorage.setItem("Target", 0));
  } else {
    MainTarget = JSON.parse(localStorage.getItem("Target"));
  }
  percint = Math.floor((ProssesTarget / MainTarget) * 100);
  if (MainTarget === 0 && ProssesTarget === 0) {
    percint = 0;
  } else if (ProssesTarget >= 0 && MainTarget <= 0) {
    percint = "0";
  } else if (MainTarget === "") {
    MainTarget = 0;
  } 
updateValues()
}


updateValues();
addDeleteNm();
TargetValus();
