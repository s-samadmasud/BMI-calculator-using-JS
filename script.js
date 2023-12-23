document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    var bmi = calculate_bmi(weight, height);
    var interpretation = interpret_bmi(bmi);

    document.getElementById("result").innerHTML = "BMI: " + bmi.toFixed(2) + "<br>Interpretation: " + interpretation;
});

function calculate_bmi(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

function interpret_bmi(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}


