export default function loadContact() {
    const content = document.getElementById("content");

    let contact = document.createElement("div");
    contact.id = "contact";

    let contactHeader = document.createElement("div");
    contactHeader.classList.add("contact-header");

    let contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";
    let contactSubtitle = document.createElement("p");
    contactSubtitle.textContent = "Reservations, private events, and questions — our team is ready to serve.";

    contactHeader.appendChild(contactTitle);
    contactHeader.appendChild(contactSubtitle);

    let contactGrid = document.createElement("div");
    contactGrid.classList.add("contact-grid");

    let contactDetails = document.createElement("div");
    contactDetails.classList.add("contact-details");

    let detailsTitle = document.createElement("h2");
    detailsTitle.textContent = "Get in touch";
    let detailsText = document.createElement("p");
    detailsText.textContent = "Visit us or send a message and we’ll get back to you shortly.";

    let detailsList = document.createElement("div");
    detailsList.classList.add("details-list");

    const info = [
        { label: "Address", value: "123 Pasta Lane, Flavor Town" },
        { label: "Phone", value: "+1 (555) 123-4567" },
        { label: "Email", value: "hello@stringsrestaurant.com" },
        { label: "Hours", value: "Mon-Sun 11:00 AM - 10:00 PM" }
    ];

    info.forEach(item => {
        let entry = document.createElement("div");
        entry.classList.add("detail-entry");

        let label = document.createElement("span");
        label.classList.add("detail-label");
        label.textContent = item.label;

        let value = document.createElement("span");
        value.classList.add("detail-value");
        value.textContent = item.value;

        entry.appendChild(label);
        entry.appendChild(value);
        detailsList.appendChild(entry);
    });

    contactDetails.appendChild(detailsTitle);
    contactDetails.appendChild(detailsText);
    contactDetails.appendChild(detailsList);

    let contactForm = document.createElement("form");
    contactForm.classList.add("contact-form");

    let formTitle = document.createElement("h2");
    formTitle.textContent = "Send a message";

    const formFields = [
        { tag: "input", type: "text", name: "name", placeholder: "Your name" },
        { tag: "input", type: "email", name: "email", placeholder: "Your email" },
        { tag: "textarea", name: "message", placeholder: "How can we help?" }
    ];

    contactForm.appendChild(formTitle);

    formFields.forEach(field => {
        let fieldWrapper = document.createElement("div");
        fieldWrapper.classList.add("field-group");

        if (field.tag === "input") {
            let input = document.createElement("input");
            input.type = field.type;
            input.name = field.name;
            input.placeholder = field.placeholder;
            input.required = true;
            fieldWrapper.appendChild(input);
        } else {
            let textarea = document.createElement("textarea");
            textarea.name = field.name;
            textarea.placeholder = field.placeholder;
            textarea.rows = 6;
            textarea.required = true;
            fieldWrapper.appendChild(textarea);
        }

        contactForm.appendChild(fieldWrapper);
    });

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Send Message";
    contactForm.appendChild(submitButton);

    contactGrid.appendChild(contactDetails);
    contactGrid.appendChild(contactForm);

    contact.appendChild(contactHeader);
    contact.appendChild(contactGrid);
    content.appendChild(contact);
}
