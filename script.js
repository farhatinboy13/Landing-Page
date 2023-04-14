// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  
  //membuat objek dengan proprti nilai dari input
const objek = {
  name: name,
  email: email,
  city: city,
  zipCode: zipCode,
  status: status
};

//Mengembalikan objek
return objek;
}

//membuat function isNumber
function isNumber(num) {
return !isNaN(num);
}

//membuat function checkboxIsChecked
function checkboxIsChecked() {
  var status = document.getElementById("status");
  if (status.checked) {
    return true;
  } else {
    return false;
  }
}

//no9
function validateFormData(formData) {
  if (!formData || formData === null) {
    return false;
  }
  if (isNaN(parseInt(formData.zipCode))) {
    return false;
  }
  if (!document.querySelector('#status').checked) {
    return false;
  }
  return true;
}

//no10
function submit() {
const function1 = handleGetFormData();
const hasil = validateFormData(function1);
if(hasil == false) {
document.getElementById("warning").innerText = "Periksa form anda sekali lagi";
} else {
document.getElementById("warning").innerText = "";
}
}