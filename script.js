document.querySelector("body").addEventListener("mousemove", function eyeball(event) {
    const eyes = document.querySelectorAll(".eyes");
    eyes.forEach(function (eye) {
        let rect = eye.getBoundingClientRect();
        let x = rect.left + rect.width / 2; // Center of the eye horizontally
        let y = rect.top + rect.height / 2; // Center of the eye vertically
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotate = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = "rotate(" + rotate + "deg)";
    });
});
