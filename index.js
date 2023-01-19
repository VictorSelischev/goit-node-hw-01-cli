const argv = require("yargs").argv;

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts.js');


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const getContact = await getContactById(id);
      console.log(getContact);
      break;

    case "add":
      const contactsArr = await addContact(name, email, phone);
      console.log(contactsArr);
      break;

    case "remove":
      const newContactsArr = await removeContact(id);
      console.log(newContactsArr);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: 7 });
// invokeAction({action: "add", name: 'Victor', email: 'victor@gmail.com', phone: '(067) 895-37-44'});
// invokeAction({ action: "remove", id: 2 });


invokeAction(argv);


// const array = async () => { await listContacts() };
// console.log(array);
// console.log(listContacts());
// getContactById(99);
// addContact('Victor', 'victor@gmail.com', '(067) 895-37-44' );
// removeContact(5);
