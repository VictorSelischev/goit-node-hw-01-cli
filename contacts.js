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

async function addContact(name, email, phone) {
  const contactsList = await listContacts();

  const isName = contactsList.some(contact => name === contact.name);
  if (isName) {
    console.error("Error username");
    return;
  };


  const id = Math.floor(Math.random() * 100);
    console.log(`Create id ${id}`);
  const isId = contactsList.some(contact => id === Number(contact.id));
  if (isId) {
    console.log("Такой id существует");
    addContact(name, email, phone);
    return;
  };

  const contact = { id: `${id}`, name, email, phone };
  // console.log(contact);
  contactsList.push(contact);

  // console.log(contactsList);
  const arrayBySort = [...contactsList].sort((a, b) => Number(a.id) - Number(b.id));
  console.log(arrayBySort);
  return arrayBySort;

}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
