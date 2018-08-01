// Listen for submit

document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e){
    console.log('calcuating...')
    e.preventDefault();
}