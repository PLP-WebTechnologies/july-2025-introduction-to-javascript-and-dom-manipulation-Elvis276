// ============================================
//  Part 1: Mastering JavaScript Basics
// ============================================

// Variable declaration and conditional logic
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageInput = document.getElementById("ageInput");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
    const age = Number(ageInput.value);

    if (age >= 18) {
        ageResult.textContent = " You are eligible to vote!";
        ageResult.style.color = "green";
    } else if (age > 0) {
        ageResult.textContent = " You are too young to vote.";
        ageResult.style.color = "red";
    } else {
        ageResult.textContent = " Please enter a valid age.";
        ageResult.style.color = "orange";
    }
});

// ============================================
//  Part 2: JavaScript Functions
// ============================================

// Function to calculate total price
function calculateTotal(price, quantity) {
    return price * quantity;
}

const calculateBtn = document.getElementById("calculateBtn");
const priceInput = document.getElementById("priceInput");
const quantityInput = document.getElementById("quantityInput");
const totalResult = document.getElementById("totalResult");

calculateBtn.addEventListener("click", () => {
    const price = Number(priceInput.value);
    const quantity = Number(quantityInput.value);

    if (price > 0 && quantity > 0) {
        const total = calculateTotal(price, quantity);
        totalResult.textContent = ` Total Price: $${total}`;
    } else {
        totalResult.textContent = " Please enter valid numbers.";
    }
});

// Another reusable function
function formatGreeting(name) {
    return `Hello, ${name}! Welcome to JavaScript!`;
}
console.log(formatGreeting("Student")); // Just for console testing

// ============================================
//  Part 3: JavaScript Loops
// ============================================

const showNumbersBtn = document.getElementById("showNumbersBtn");
const numberList = document.getElementById("numberList");

showNumbersBtn.addEventListener("click", () => {
    numberList.innerHTML = ""; // Clear previous numbers

    // Using a for loop
    for (let i = 1; i <= 5; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Number: ${i}`;
        numberList.appendChild(listItem);
    }
});

// ============================================
//  Part 4: Mastering the DOM
// ============================================

const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
    // Toggle visibility using a class
    if (toggleText.style.display === "none") {
        toggleText.style.display = "block";
    } else {
        toggleText.style.display = "none";
    }
});
