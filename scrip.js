// ########### for history ############### \\

let historyIcon = document.querySelector("#icon");
let historyBox = document.querySelector(".history-box");

historyIcon.addEventListener("click", () => {
  if (historyIcon.style.transform == "rotate(0deg)") {
    historyIcon.style.transform = "rotate(-180deg)";
    historyBox.style.transform = "translateY(0%)";
  } else {
    historyIcon.style.transform = "rotate(0deg)";
    historyBox.style.transform = "translateY(100%)";
  }
});

// ############# calculator functions ########################## \\

//  ############# use variable for store data ################ \\

let inputValue = "";

const getValue = (value) => {
  inputValue += value;
  document.querySelector("#display").value = inputValue;
};

// ############## for input value clearation ################ \\

const getClear = () => {
  inputValue = "";
  document.querySelector("#display").value = inputValue;
};

// ################ for calculation ################### \\

const getEqualCalculate = () => {
  let result;
  try {
    result = Function('"use strict"; return (' + inputValue + ")")();
    const displayValue = document.querySelector("#display").value;

    // Display the calculation and result in history
    const historyList = document.querySelector("#history");
    const historyEntry = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = displayValue; // Set whatever label you want here
    const p = document.createElement("p");
    p.textContent = result;
    historyEntry.appendChild(span);
    historyEntry.appendChild(p);
    historyList.appendChild(historyEntry);

    // Update display with result
    document.querySelector("#show").innerHTML = `${displayValue}=`;
    document.querySelector("#display").value = result;
    inputValue = result.toString();

    // Store data in localStorage if needed \\ 

    const calculationHistory = localStorage.getItem('calculationHistory') || '';
    localStorage.setItem('calculationHistory', calculationHistory + displayValue + "  " + '|' + result + ',');

  } catch (error) {
    document.querySelector("#display").value = "Error";
    inputValue = "";
  }
};


// ######## for clear top value ############## \\

document.querySelector("#clear").addEventListener("click", () => {
  document.querySelector("#show").innerHTML = "";
});

// ################ function for equalate ################## \\

const deleteData = () => {
  inputValue = document.querySelector("#display").value.slice(0, -1);
  document.querySelector("#display").value = inputValue;
  if (inputValue == "") {
    inputValue = "";
    document.querySelector("#display").value = inputValue;
  }
};
