document.getElementById('expense-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;

    const response = await fetch('/api/expense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description, amount, date }),
    });

    const result = await response.json();
    document.getElementById('expense-result').textContent = result.message;
});
