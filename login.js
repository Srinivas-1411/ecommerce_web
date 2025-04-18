(function(){
    const fonts = ["cursive","sans-serif","monospace"];
    let captchaValue="";
    function generateCaptcha(){
        let captchaValue=btoa(Math.random()*1000000000);
        value = value.substr(0,5+Math.random()*5);
        captchaValue = value;
    }
    function setCaptcha() {
        let html = captchaValue.split("").map((char)=>{
        const rotate =20+ Math.trunc (Math.random()*30);
        const font = Math.trunc(Math.random()*fonts.length);
        return `<span
        style="
        transform:rotate(${rotate}deg);
        font-family:${fonts[font]}
        "
        >${char}</span>`;
        }).join("");
        document.querySelector(".login-form.captcha.preview").innerHTML = html;
        }
        function initCaptcha() {
        
        document.querySelector(".login-form .captcha .captcha-refresh").addEventListener("click",function(){
        generateCaptcha();
        setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
        }
        initCaptcha();
})();