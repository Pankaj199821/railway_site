const form = document.getElementById('ticket-form');
const output = document.getElementById('ticket-output');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Collecting user inputs
    const train = document.getElementById('train').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const seat = document.getElementById('seat').value;

    // Preparing ticket details to display
    const ticketDetails = `
        <h2>Ticket Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Train:</strong> ${train}</p>
        <p><strong>Seat Preference:</strong> ${seat}</p>
    `;

    output.innerHTML = ticketDetails; // Display ticket details dynamically
}); `;