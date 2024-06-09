document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sorter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        let maxNumber = document.getElementById('maxNumber').value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;
        randomNumber = Math.floor(randomNumber + 1);

        document.getElementById('sorted-number').innerText = randomNumber
        document.querySelector('.resultado').style.display = 'block';
    })
})