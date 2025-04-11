function getMath() {
    let r = document.getElementById("r").value;
    let c = 2 * Math.PI * r
    let s= Number(c*c)/((4)*Math.PI);
    document.getElementById("result1").innerHTML = "Diện tích hình tròn: " + s;
    document.getElementById("result2").innerHTML = "Chu vi hình tròn: " + c;
}
