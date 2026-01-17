let wallet = null;

document.getElementById("connectBtn").addEventListener("click", async function () {
    wallet = await connectWallet();
    log("Wallet connected");
});

document.getElementById("sendBtn").addEventListener("click", async function () {
    const to = document.getElementById("toAddress").value;
    const amount = document.getElementById("amount").value;

    if (!wallet || !to || !amount) {
        alert("Missing input");
        return;
    }

    updateStatus("Sending...");
    await sendPayment(wallet, to, amount);
    updateStatus("Done");
});
