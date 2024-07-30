document.getElementById('panForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const pan = document.getElementById('pan').value.toUpperCase();
    const result = document.getElementById('result');
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (panPattern.test(pan)) {
        result.textContent = 'PAN Card Number is valid.';
        result.style.color = 'green';
    } else {
        result.textContent = 'PAN Card Number is invalid.';
        result.style.color = 'red';
    }
});