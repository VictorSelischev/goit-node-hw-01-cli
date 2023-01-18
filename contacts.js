const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const contactsListJson = await fs.readFile(contactsPath, 'utf8');
    const contactsListArray = JSON.parse(contactsListJson);
    return contactsListArray;
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  const contactsList = await listContacts();
  const getContact = contactsList.find(contact => {
    const Id = Number(contact.id);
    return Id === contactId;
  });
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
};
