const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat'); //:not(.occupied)
let count = document.getElementById('count');
const select = document.getElementById('s');
const chairmoney = document.getElementById('price');
let total = +select.value;
const button = document.getElementById('btn');
afterRefreshing();
//methods
function pricecheck(){
    const chairs = document.querySelectorAll('.container .seat.selected');
    const chairslength = chairs.length;
    count.innerText = chairslength;
    const finalPrice = total * chairslength;
    chairmoney.innerText = finalPrice;

    let somearr = [...chairs].map(item => [...seats].indexOf(item));
    localStorage.setItem('selectedSeats', JSON.stringify(somearr));

}

//clear button
function clearbtn(){
    // let btn = document.createElement('button');
    // btn.innerText = "clear";
    // btn.classList.add('clearbtn');
    // priceText.appendChild(btn);

}
// ui population
function afterRefreshing(){
    const data = JSON.parse(localStorage.getItem('selectedSeats'));
    seats.forEach((element, index) => {
        if (data.indexOf(index) > -1) {
            element.classList.add('selected');
            
        }
    });
}
//event listeners
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
       e.target.classList.toggle('selected');
       pricecheck();
    }
});
select.addEventListener('change', (e) => {
    total = +select.value;
    pricecheck();
});
button.addEventListener('click', () => {
    seats.forEach(e => {
        if (e.classList.contains('selected')) {
                e.classList.remove('selected');
        }
    })
})
pricecheck();
