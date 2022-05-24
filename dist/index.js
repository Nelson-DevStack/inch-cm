"use strict";
var inchInput = document.getElementById('inchInput');
var cmInput = document.getElementById('cmInput');
inchInput.addEventListener('input', function (e) {
    var target = e.target;
    var value = parseFloat(target.value);
    var inchToCm = (value * 2.54).toFixed(2);
    cmInput.value = inchToCm;
});
cmInput.addEventListener('input', function (e) {
    var target = e.target;
    var value = parseFloat(target.value);
    var cmToInch = (value / 2.54).toFixed(2);
    inchInput.value = cmToInch;
});
