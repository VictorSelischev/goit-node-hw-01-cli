const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts () {
    try {
        const contactsListJson = await fs.readFile(contactsPath, "utf8");
        const contactsListArray = JSON.parse(contactsListJson);
        console.log(contactsListArray);
        return contactsListArray;
    } catch(error) {
        console.log(error)
    }

    
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}