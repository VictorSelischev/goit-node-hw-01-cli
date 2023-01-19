const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const contactsListJson = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(contactsListJson);
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  try {
    const contactsList = await listContacts();
    return contactsList.find(contact => Number(contact.id) === contactId);
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  try {
    const contactsList = await listContacts();
    const index = contactsList.findIndex(
      contact => Number(contact.id) === contactId
    );
    const contacts = contactsList.splice(index, 1);
    await fs.writeFile(contactsPath, contactsList, 'utf8');
    return contactsList;
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const contactsList = await listContacts();

    const isName = contactsList.some(contact => name === contact.name);
    if (isName) {
      console.error('Error username');
      return;
    }

    const id = Math.floor(Math.random() * 100);
    console.log(`Create id ${id}`);
    const isId = contactsList.some(contact => id === Number(contact.id));
    if (isId) {
      console.log('Такой id существует');
      addContact(name, email, phone);
      return;
    }

    const contact = { id: `${id}`, name, email, phone };
    contactsList.push(contact);
    const arrayBySort = [...contactsList].sort(
      (a, b) => Number(a.id) - Number(b.id)
    );
    return arrayBySort;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
