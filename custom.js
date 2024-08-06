const diplayRanNumber = document.querySelector(".otp_dislpay");
document.querySelector(".generate-btn").addEventListener("click", () => {
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    diplayRanNumber.value = randomNumber;
})


const diplayInputNumber = document.querySelector(".submit_display");
let display = "";
const buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "C") {
            display = "";
            diplayInputNumber.value = (display);
        }
        else if (e.target.innerHTML == "←") {
            diplayInputNumber.value = diplayInputNumber.value.slice(0, -1);
            display = diplayInputNumber.value;
        }
        else {
            display = display + button.innerHTML;
            diplayInputNumber.value = Number(display);
        }

    })
})

let num = 3;
document.querySelector(".submit-btn").addEventListener("click", () => {
    if (diplayRanNumber.value == (diplayInputNumber.value)) {
        document.querySelector(".notify_sccess").style.display = "block"
        document.querySelector(".notify_wrong").style.display = "none"
        document.querySelector(".action-left").style.display = "none"
        document.querySelector(".submit-btn").innerHTML = "Done"
        document.querySelector(".submit-btn").style.backgroundColor = "green"
    }
    else {
        document.querySelector(".notify_wrong").style.display = "block";
        document.querySelector(".notify_sccess").style.display = "none";
        num--;
        document.querySelector(".action-left").innerHTML = `${num} try left`;
        if (num <= 0) {
            document.querySelector(".submit-btn").style.display = "none";
        }
    }
    diplayRanNumber.value = "";
    diplayInputNumber.value = "";
    display = "";
})
