// Ràng buộc:
// Email phải có @ => type=email
//- Năm sinh: 2003 trở về trước
// Số điện thoại: là chuỗi số, từ 10 số trở lên => dùng built-in validation: regex pattern=[0-9]{10}
// Số CMND: là chuỗi số, từ 9 số trở lên  => dùng built-in validation: minlength=10
//BHYT để trống, nếu điền thì phải từ 5 ký tự trở lên gồm số hoặc chữ
//Phải check vào mục đồng ý tiêm vaccine

document.addEventListener("DOMContentLoaded", function (event) {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName("needs-validation");
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();

          //custom validate with different feedback of email
          const emailInput = document.getElementById("email");
          if (emailInput.validity.typeMismatch) {
            console.log("email mismatch");
            const emailInvalidFeedback = emailInput.nextElementSibling;
            if (emailInvalidFeedback.classList.contains("invalid-feedback")) {
              emailInvalidFeedback.innerHTML = " Vui lòng nhập email hợp lệ.";
            }
          } else if (emailInput.validity.valueMissing) {
            console.log("email empty");
            const emailInvalidFeedback = emailInput.nextElementSibling;
            if (emailInvalidFeedback.classList.contains("invalid-feedback")) {
              emailInvalidFeedback.innerHTML = " Email không được để trống.";
            }
          }
        }

        //another custom validate for birthday with 18 years old above is valid
        const birthdayInput = document.getElementById("birthday");
        console.log("birthday=" + birthdayInput.value); //2021-12-31
        if (birthdayInput.validity.valueMissing) {
          const invalidFeedback = birthdayInput.nextElementSibling;
          if (invalidFeedback.classList.contains("invalid-feedback")) {
            invalidFeedback.innerHTML =
              "Vui lòng cung cấp ngày, tháng, năm sinh.";
          }
        } else {
          const birthday = birthdayInput.value;
          let year = birthday.substring(0, birthday.indexOf("-"));
          year = parseInt(year);
          console.log("year=" + year);
          let currentYear = new Date().getFullYear();
          console.log("currentYear=" + currentYear);
          if (currentYear - year < 18) {
            birthdayInput.setCustomValidity("!");
            const invalidFeedback = birthdayInput.nextElementSibling;
            if (invalidFeedback.classList.contains("invalid-feedback")) {
              invalidFeedback.innerHTML =
                "Mẫu đăng ký tiêm vaccine này dành cho người trên 18 tuổi trở lên!";
            }
          } else {
            // in case it wrong then they fix -> should make it valid again!
            birthdayInput.setCustomValidity("");
          }
        }

        form.classList.add("was-validated");
        // console.log("Should fetch here!");
      },
      false
    );
  });
});
