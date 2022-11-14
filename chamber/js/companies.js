const requestURL = 'https://lcampos9.github.io/2wdd230/data.json';
const cards = document.querySelector('.companycards');

fetch(requestURL)
  .then(function (response) {
    if (!response.ok) {
    } else {
      return response.json();
    }
    
  })
  .then(function (jsonObject) {
    const companies = jsonObject ['companies'];
    companies.forEach(displayCompanies);

  });

  
  function displayCompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let websiteUrl = document.createElement('p');
    let membershipLevel = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the company's name
    h2.innerHTML = `${company.name}`;
    address.innerHTML = `<strong>Address:</strong> ${company.address}`;
    phoneNumber.innerHTML = `<strong>Phone Number:</strong> ${company.phoneNumber}`;
    websiteUrl.innerHTML = `<strong>Website URL:</strong> ${company.websiteUrl}`;
    membershipLevel.innerHTML = `<strong>Membership Level:</strong> ${company.membershipLevel}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', company.imageurl);
    portrait.setAttribute('alt', `Portait of ${company.name}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(websiteUrl);
    card.appendChild(membershipLevel);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }