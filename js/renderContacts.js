//Return the promise:
async function getAllContacts() {
    const res = await fetch('./data/contacts.json')
    const contacts = await res.json();
    return contacts;
}

//Render the contacts visually:
async function renderContacts(props) {
    var validator = require('validator');
    const contacts = await getAllContacts();
    const container = document.createElement('div');
    let markup = '';


    contacts.forEach(contact => {
        //logging to check if validator is functioning properly:
        console.log(validator.isEmail(contact.email));

        //this was legit just a random guess and IT WORKED LET'S GOOOOOOOO
        if (validator.isEmail(contact.email) == true) {
            const template = `<div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${contact.name}</h5>
        </div>
       <small>${contact.email}</small>
      </div>`
            markup += template;
        }
    })

    container.innerHTML = markup;
    return container;

}

export { renderContacts };