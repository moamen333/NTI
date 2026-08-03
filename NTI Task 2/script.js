function calculateBMI(){

    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    if(weight <=0 || height <=0){

        document.getElementById("result").innerHTML =
        "Please enter valid numbers.";

        return;
    }

    height = height / 100;

    let bmi = weight / (height * height);

    let status = "";

    if(bmi < 18.5){

        status = "Underweight";

    }
    else if(bmi < 25){

        status = "Normal Weight";

    }
    else if(bmi < 30){

        status = "Overweight";

    }
    else{

        status = "Obese";

    }

    document.getElementById("result").innerHTML =
    `<h4>Your BMI: ${bmi.toFixed(1)}</h4>
     <strong>${status}</strong>`;
}