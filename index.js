let qrText=document.getElementById("qrText");
let imgBox=document.getElementById("imgBox");
let imglr=document.getElementById("imglr");



function showQr(){
    
    imglr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value ;
    imglr.classList.add("showimg");


}