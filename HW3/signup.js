function createNewVisitor(event)    //click on the submit button will activate the function:
{  // ביטול התנהגות דיפולטיבית של שליחת טופס
  // קראו עוד כאן: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  event.preventDefault();

  let newVisitorName = document.getElementById("vname").value;
  if (validateFormInputs()) {
    makeVisitor(newVisitorName); //making new visitor object to the visitors storage
  }
  
  window.location.href="login.html";
}


const validateFormInputs = () => {
// check if the input exists and has a value
  var vnameInput = document.getElementById("vname");
  return vnameInput && vnameInput.value.trim() !== "";
}

// check if the input name is already exists in visitors storage //
const visitorExists = (name) => {
  const found = visitors.find((visitor) => visitor.name === name);
  if (found) return true; // if found === undefined //
  return false;
}

const makeVisitor = (name) => {
  if (!visitorExists(name)) { // making object only if the given name is NOT already exists //
    const visitor = {
      name: name,
      coins: 50
    }
    visitors.push(visitor); // adding new visitor to the visitors array //
    localStorage.setItem("visitors", JSON.stringify(visitors)); // save to local storage
    return visitor;
  }
  else {
    alert("Sorry, this name is already in use. Please enter different name.");

    /********לעשות שהשם שהוא רשם נמחק אחרי שההודעה הזו קופצת */
  
  }
}

/************************************** 
submitting form event listener */
const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}
