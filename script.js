function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    height = height / 100;

    let bmi = weight / (height * height);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi < 25) {
        category = "Normal";
    }
    else if (bmi < 30) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }

    document.getElementById("result").innerHTML =
        `BMI: ${bmi.toFixed(2)} (${category})`;
}