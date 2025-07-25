const cur1 = document.getElementById('currency_1');
const cur2 = document.getElementById('currency_2');
const amu1 = document.getElementById('input1');
const amu2 = document.getElementById('input2');
const result = document.getElementById('result');
const swap = document.getElementById('swap');

//function
function calculate(){
    fetch(`https://v6.exchangerate-api.com/v6/5baea28f132c75f86f56e823/latest/${cur1.value}`)
        .then(res => res.json())
            .then(data => {
                const rate = data.conversion_rates[cur2.value];
                const finalResult = amu1.value * rate;
                result.innerText = `every 1 ${cur1.value} = ${rate} ${cur2.value}`;
                amu2.value = +finalResult; 
            });
}
function swaping(){
    const temp = cur1.value;
    cur1.value = cur2.value;
    cur2.value = temp;
    calculate();
}

// event listners
cur1.addEventListener('change', calculate);
cur2.addEventListener('change', calculate);
amu1.addEventListener('input', calculate);
amu2.addEventListener('input', calculate);
swap.addEventListener('click', swaping);

calculate();