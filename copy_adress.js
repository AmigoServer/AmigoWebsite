function copyAddress() {
    const address = document.getElementById("server-address").textContent;
    navigator.clipboard.writeText(address).then(() => {
        console.info("Copied")
    }).catch(err => {
        console.error(err);
    });
}