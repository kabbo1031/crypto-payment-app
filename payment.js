async function sendPayment(wallet, to, amount) {
    const tx = await wallet.sendTransaction({
        to: to,
        value: ethers.utils.parseEther(amount)
    });

    await tx.wait();
}
