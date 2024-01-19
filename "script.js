function generateQR() {
    const textInput = document.getElementById("text-input").value;

    if (textInput.trim() === "") {
        alert("Please enter text before generating QR code.");
        return;
    }

    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";

    const qrcode = new QRCode(qrcodeContainer, {
        text: textInput,
        width: 128,
        height: 128,
    });
} 
