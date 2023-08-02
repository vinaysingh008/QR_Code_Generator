const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyinput();
});
    
sizes.addEventListener('change', (e)=>{
    size = e.target.value;
    isEmptyinput();
})

downloadBtn.addEventListener('click', ()=> {
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr)
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyinput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }else{
    //     alert("Enter the text or url ")
    // }

    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or url ");  //Ternary operator
}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight: "#fff",
        colorDark:"#000",
    });
}