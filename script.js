// Referral Program
function generateReferral() {
    const name = document.getElementById('userName').value.trim();
    if(name === "") {
        alert("Please enter your name.");
        return;
    }
    const referralCode = name.toLowerCase().replace(/\s+/g, '') + Math.floor(Math.random() * 1000);
    const link = `https://yourwebsite.com/referral/${referralCode}`;
    document.getElementById('referralLink').innerHTML = `Your referral link: <a href="${link}">${link}</a>`;
}

// Email Subscription
function subscribeEmail() {
    const email = document.getElementById('email').value.trim();
    if(email === "") {
        alert("Please enter your email.");
        return;
    }
    // Replace this with your backend or Mailchimp API
    document.getElementById('subscriptionMessage').innerText = `Thanks for subscribing, ${email}!`;
}

// Printing Order Form
document.getElementById('printForm').addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(this);

    // Example: send via fetch to backend (replace URL with your server)
    fetch('https://yourbackend.com/order', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('orderMessage').innerText = "Order submitted successfully!";
        document.getElementById('printForm').reset();
    })
    .catch(error => {
        document.getElementById('orderMessage').innerText = "Error submitting order. Try again!";
        console.error(error);
    });
});
