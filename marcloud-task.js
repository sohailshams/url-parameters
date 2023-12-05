// Access URL parameters 
const URLParameters = window.location.search;

// Parse the raw string
const parsedURLParameters = new URLSearchParams(URLParameters);

// Get values of utm_campaign and utm_source URL parameters 
const utm_campaign = parsedURLParameters.get('utm_campaign');
const utm_source = parsedURLParameters.get('utm_source');

// Create input field for utm_campaign and set related attributes
const campaignInput = document.createElement("input");
campaignInput.type = "hidden"
campaignInput.id= "utm_campaign"
campaignInput.name = "utm_campaign"
campaignInput.value = utm_campaign

// Create input field for utm_source and set related attributes
const sourceInput = document.createElement("input");
sourceInput.type = "hidden"
sourceInput.id= "utm_source"
sourceInput.name = "utm_source"
sourceInput.value = utm_source

// Access the contact form fields by id
const firstName = document.getElementById('formBasicFirstName') 
const lastName = document.getElementById('formBasicLastName')
const email = document.getElementById('formBasicEmail')
const companyName = document.getElementById('formBasicCompany')
const message = document.getElementById('formBasicMessage')

// Go to the parent tag 'form'
const firstNameParent = firstName.parentElement.parentElement.parentElement.tagName.toLocaleLowerCase();
const lastNameParent = lastName.parentElement.parentElement.parentElement.tagName.toLocaleLowerCase();
const emailParent = email.parentElement.parentElement.parentElement.tagName.toLocaleLowerCase();
const companyNameParent = companyName.parentElement.parentElement.parentElement.tagName.toLocaleLowerCase();
const messageParent = message.parentElement.parentElement.parentElement.tagName.toLocaleLowerCase();

// Check if the parent of selected input fields is 'form'
if (firstNameParent === 'form' && lastNameParent === 'form' && emailParent=== 'form' && companyNameParent === 'form' && messageParent === 'form') { 
    // Create input fields container div 
    const inputsContainer = document.createElement('div')

    // Append campaignInput and sourceInput to inputsContainer
    inputsContainer.appendChild(campaignInput)                                                 
    inputsContainer.appendChild(sourceInput)                  
    
    // Append inputsContainer to the form
    firstName.parentElement.parentElement.appendChild(inputsContainer)
}