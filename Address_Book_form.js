window.addEventListener("DOMContentLoaded", (event) => {   //UC4
  //UC 7 :::
  validateName();
  validateAddress();
  validatePhoneNumber();
  validatePincode();
});

//UC4 :: Event Listner and Some Validation
//1st validation : User Name
const validateName = () => {
  const name = document.querySelector("#name");
  name.addEventListener ("input", function () {
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
};

//2nd validation : User Home Address
const validateAddress = () => {
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
};

//3rd validation : User Pincode
const validatePincode = () => {
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
};

//4th validation : User phone number
const validatePhoneNumber = () => { 
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
};

// UC 5 :: on click - alert function - Reset button
function resetForm() {
  alert("The form will reset");
}

//on click function - Submit button
const save = () => {     //Added UC-8
  try {
  let contact = createContact();
  createAndUpdateStorage(contact);
  } catch (error) {
  alert(error);
  }
};

//JSON object
const createAndUpdateStorage = (contact) =>{
  let contactList = JSON.parse(localStorage.getItem("contactList"));   //UC8 :: Address Book List
  if (contactList != undefined) {
    contactList.push(contact);
  } else {
    contactList = [contact];
  }
  alert(contact.toString());
  alert("Contacts Created Succesfully");
  localStorage.setItem("contactList", JSON.stringify(contactList));
}

//After Save function
const createContact = () => {
  let contact = new Contact();                      
  contact.id = new Date().getTime();

    try {
      contact.name = getInputValueById("#name");
    } catch (error) {
      setTextValue(".name-error", error);
      throw error;
    }

    try {
      contact.phone = getInputValueById("#phone");
    } catch (error) {
      setTextValue(".phone-error", error);
      throw error;
    }

    try {
      contact.address = getInputValueById("#address");
    } catch (error) {
      setTextValue(".address-error", error);
      throw error;
    }
  
    let city = getInputValueById("#city");
    if (city != "Select City") {
      contact.city = city;
    } else {
      throw "Please select city";
    }

    let state = getInputValueById("#state");
    if (state != "Select State") {
      contact.state = state;
    } else {
      throw "Please select state";
    }

    try {
      contact.pin= getInputValueById("#pin");
    } catch (error) {
      setTextValue(".pin-error", error);
      throw error;
    }

    alert(contact.toString());         //Showing values on pop-up window screen
    return contact;
};

  //setting and declaring the error-output
  const setTextValue = (id, value) => {   
    const element = document.querySelector(id);
    element.textContent = value;
  };

  //Getting values
  const getInputValueById = property => {
    let value = document.querySelector(property).value;
    return value;
  };
