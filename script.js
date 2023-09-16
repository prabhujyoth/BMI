function bmiCalculator(){
    var regExp = /[a-zA-Z]/g;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    if (weight=="" || height==""){
        alert("Please enter the details");  
    }
    else if(regExp.test(weight)==true || regExp.test(height)==true)
    {
        alert("Please enter numeric values");
    }
    else
    {
        var bmi = Math.floor(weight/(height*height));
        message = "Your BMI value is "
        document.getElementById("output").innerHTML = message + bmi;
    }

    
}