function validateForm(event) {
  event.preventDefault(); // prevent the form from submitting normally

  // const regNum = document.forms['adm-form']['reg-num'].value;
  const regNum = document.getElementById("regNum");

  const regError = document.getElementById("regError");

  let isValid = true; // assume the form is valid

  if (regNum.value.trim() === "") {
    regError.textContent = "بہترین";
    isValid = false;
  } else {
    regError.textContent = "برائے مہربانی اپنا رجسٹریشن نمبر لکھئیے";
  }
  if (isValid) {
    document.getElementById("admForm").submit();
  }
}
