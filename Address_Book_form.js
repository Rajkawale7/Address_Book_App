window.addEventListener("DOMContentLoaded", (event) => {
    //UC4 :: Event Listner and Some Validation

    //1st validation : User Name
    const name = document.querySelector("#name");
    name.addEventListener("input", function () {
      if (name.value.length == 0) {
        setTextValue(".name-error", "");
        return;
      }
      try {
        new Contact().name = name.value;
        setTextValue(".name-error", "");
      } catch (error) {
        setTextValue(".name-error", error);
      }
    });


    //2nd validation : User Home Address
    const address = document.querySelector("#address");
    address.addEventListener("input", function () {
      if (address.value.length == 0) {
        setTextValue(".address-error", "");
        return;
      }
      try {
        new Contact().address = address.value;
        setTextValue(".address-error", "");
      } catch (error) {
        setTextValue(".address-error", error);
      }
    });


    //3rd validation : User Pincode
    const pin = document.querySelector('#pin');
    pin.addEventListener("input", function () {
      if (pin.value.length == 0){
        setTextValue(".pin-error", " ");
        return;
      }
      try {
        new Contact().pin = pin.value;
        setTextValue(".pin-error", " ");
      } catch (error) {
        setTextValue(".pin-error", error);
      }
    });

    //4th validation : User phone number
    const phone = document.querySelector("#phone");
    phone.addEventListener("input", function() {
      if (phone.value.length == 0){
        setTextValue(".phone-error", " ");
        return;
      }
      try{
        new Contact().phone = phone.value;
        setTextValue(".phone-error", " ");
      } catch (error) {
        setTextValue(".phone-error", error);
      }
    });

    //setting and declaring the error-output
    const setTextValue = (id, value) => {
        const element = document.querySelector(id);
        element.textContent = value;
      };
});
