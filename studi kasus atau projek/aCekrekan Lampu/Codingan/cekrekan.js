// !ini conoth menggunakan addEventsListener
let tombol1 = document.getElementById("saklar1");
tombol1.addEventListener("click", () => {
  let lampuOn = document.getElementById("lampu1");
  lampuOn.src = "/studi kasus atau projek/aCekrekan Lampu/assets/images/on.png";

});


let tombol2  = document.getElementById('saklar2');
tombol2.addEventListener('click', () => {
    let lampuOff = document.getElementById("lampu1");
    lampuOff.src = "/studi kasus atau projek/aCekrekan Lampu/assets/images/off.png";

})

// !ini pake function biasa
function OnOffLamp(params) {
    console.log(params);
    let lampu1 = document.getElementById('lampu2');
    if (params == "on") {
      lampu1.src = "/studi kasus atau projek/aCekrekan Lampu/assets/images/on.png";
    } else {
      lampu1.src = "/studi kasus atau projek/aCekrekan Lampu/assets/images/off.png";
    }
}













