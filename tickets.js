const checkout = document.getElementById("main-box");
checkout.innerHTML = `
        <h1>Pay Now!</h1>
        <p>Card Number:</p>
        <input type="number" placeholder="0000 0000 0000 0000" maxlength="16">
        <p>Expiration Date:</p>
        <input type="text" placeholder="MM/YY">
        <p>Card Holder Name:</p>
        <input type="text" placeholder="Name">
        <p>Security Code:</p>
        <input type="number" placeholder="CCV" maxlength="3">
        <p></p>
        <a href="index.html"><button id="payment-btn">Pay Now</button></a>
`;