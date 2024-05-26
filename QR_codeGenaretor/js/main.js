const inputFlied = document.querySelector(".inputFlied");
const qrImg = document.querySelector(".qrImg");
const QrBtn = document.querySelector(".QrBtn");

QrBtn.addEventListener("click", () => {
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputFlied.value}`;
});
