const loanAmount = document.querySelector("#loan_amount");
const loanTenure = document.querySelector("#loan_tenure");
const loanRate = document.querySelector("#loan_interest");

const loanEmi = document.querySelector(".loan_emi");
const loanPrincipal = document.querySelector(".loan_principle");
const loanTotal = document.querySelector(".loan_total");
const loanInterest = document.querySelector(".loan_interest_rate");


const submitBtn = document.querySelector(".calculator-btn");
submitBtn.addEventListener("click", function(){
	amount = loanAmount.value;
	tenure = (loanTenure.value)*12;
	rate = (loanRate.value)/12/100;

	emi = ((amount * rate * (1+rate)**tenure)/(((1+rate)**tenure)-1));
	total = emi * tenure;
	interest = total - amount;

	loanEmi.innerHTML = Math.floor(emi);
	loanPrincipal.innerHTML = Math.floor(amount);
	loanTotal.innerHTML = Math.floor(total);
	loanInterest.innerHTML = Math.floor(interest);	

	let xValues = ["Principle","Interest"];
	let yValues = [amount, Math.floor(interest)];
	let barColors = ["#961251", "#000000"];
	new Chart("loanChart",{
		type: "pie",
		data:{
			labels: xValues,
			datasets:[{
				backgroundColor: barColors,
				data:yValues
			}]
		},
		options:{
			title:{
				display: false,
			}
		}
	});

});

















