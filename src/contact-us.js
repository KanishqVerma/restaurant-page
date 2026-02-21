export function createContactUs(){
    const content = document.getElementById("content");

    const contactUs = document.createElement("div");
    contactUs.classList.add("contact-us");

    const heading = document.createElement("h2");
    heading.textContent = "Contact Us"

    const subheroText = document.createElement("p");
    subheroText.textContent = "Have a question? Got a deal? Feel free to reach out to us and we will get back to you shortly.";

    const contactInformation = document.createElement("div");
    contactInformation.classList.add("contact-information");

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("address");

    const iframeDiv = document.createElement("iframe-div");
    iframeDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14269.665889326974!2d10.875417982285779!3d63.44446550523404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d16fb3ae6fd6d%3A0x1596b57897c52a6b!2s7517%20Hell%2C%20Norway!5e0!3m2!1sen!2sin!4v1771692764657!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    const addressHeading = document.createElement("h3");
    addressHeading.textContent = "Address:"
    
    const addressInformation = document.createElement("p");
    addressInformation.textContent = "Hell stasjon, 7517 Hell, Norway";

    addressDiv.append(iframeDiv, addressHeading, addressInformation);

    const generalInformation = document.createElement("div");
    generalInformation.classList.add("general-information");

    const phoneNumberHeading = document.createElement("h3");
    phoneNumberHeading.textContent = "Phone Number: "
    const phoneNumber1 = document.createElement("p");
    phoneNumber1.textContent = "+47 1234567890";
    const phoneNumber2 = document.createElement("p");
    phoneNumber2.textContent = "+47 0987654321"
    const lineBreak = document.createElement("br");
    const emailHeading = document.createElement("h3");
    emailHeading.textContent = "Email: ";
    const email1 = document.createElement("p");
    email1.textContent = "dontemailus@noemail.com";
    const email2 = document.createElement("p");
    email2.textContent = "comaplaints@dontsend.com"

    generalInformation.append(phoneNumberHeading, phoneNumber1, phoneNumber2, lineBreak, emailHeading, email1, email2);

    contactInformation.append(addressDiv, generalInformation);

    const information = document.createElement("div");
    information.classList.add("information");
    information.append(contactInformation, generalInformation)

    contactUs.append(heading, subheroText, information);

    content.appendChild(contactUs);
}