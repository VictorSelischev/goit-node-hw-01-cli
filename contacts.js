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
  try {
    const contactsList = await listContacts();
    const getContact = contactsList.find(contact => {
      const Id = Number(contact.id);
      return Id === contactId;
    });
    return getContact;
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  try {
    const contactsList = await listContacts();
    const index = contactsList.findIndex(contact => {
      const Id = Number(contact.id);
      return Id === contactId;
    });
    contactsList.splice(index, 1);

    return contactsList;
  } catch (error) {
    console.error(error);
  }

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
