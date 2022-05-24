const inchInput = document.getElementById('inchInput') as HTMLInputElement;
const cmInput = document.getElementById('cmInput') as HTMLInputElement;

inchInput.addEventListener('input', (e)=>{
  const target = e.target as HTMLInputElement;
  const value = parseFloat(target.value);
  const inchToCm = (value * 2.54).toFixed(2);
  cmInput.value = inchToCm;
});

cmInput.addEventListener('input', (e)=>{
  const target = e.target as HTMLInputElement;
  const value = parseFloat(target.value);
  const cmToInch = (value / 2.54).toFixed(2);
  inchInput.value = cmToInch;
});