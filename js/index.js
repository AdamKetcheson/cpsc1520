import { renderContacts } from "./renderContacts";

async function appInit() {
    const contacts = await renderContacts();
    console.log(contacts);
    document.querySelector('#contacts').textContent = '';
    document.querySelector('#contacts').appendChild(contacts);
}

appInit();