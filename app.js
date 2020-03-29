document.getElementById("loan-form").addEventListener("submit", function (e) {

    document.getElementById("loading").style.display = "block";
    document.getElementById("results").style.display = "none";


    setTimeout(calculateResult, 2000)


    e.preventDefault();
});

function calculateResult() {

    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");

    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const priciple = parseFloat(amount.value);
    const calculatedinterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedinterest, calculatedPayment);
    //console.log(x);
    const monthly = (priciple * x * calculatedinterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - priciple).toFixed(2);

        document.getElementById("loading").style.display = "none";
        document.getElementById("results").style.display = "block";


    } else {
        //console.log("Error!");
        showError("Please fill the input");

    }

    function showError(error) {
        document.getElementById("loading").style.display = "none";
        document.getElementById("results").style.display = "none";

        const errorDiv = document.createElement("div");
        errorDiv.className = "alert alert-danger"
        errorDiv.appendChild(document.createTextNode(error));
        //console.log(errorDiv);
        const card = document.querySelector(".card");
        const heading = document.querySelector(".heading");

        card.insertBefore(errorDiv, heading);
        setTimeout(clearError, 3000);

    }

    function clearError() {
        document.querySelector(".alert").remove();
    }

}