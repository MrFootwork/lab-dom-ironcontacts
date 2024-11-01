// HTML ELEMENTS
const buttonAddRandom = document.querySelector('#btn-add-random');
const tableBody = document.querySelector('tbody#contacts');

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
// const randomIndex = Math.floor(Math.random() * contacts.length);
// const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
// const randomContact = splicedArr[0];

// const exampleRow = document.createElement('tr');
// exampleRow.innerHTML = `
//   <td>
//     <img src="${randomContact.pictureUrl}" />
//   </td>
//   <td> ${randomContact.name} </td>
//   <td> ${randomContact.popularity.toFixed(2)} </td>
//   <td>
//     <button class="btn-delete">Delete</button>
//   </td>
//   <td>
//     <button class="btn-like">
//       <img src="./images/icon.png" alt="like" />
//     </button>
//   </td>
// `;

// tableBody.appendChild(exampleRow);
function renderContact(contact) {
  const tableRow = document.createElement('tr');

  tableRow.innerHTML = /*html*/ `
    <td>
     <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
    `;

  tableBody.appendChild(tableRow);

  const deleteButton = tableRow.querySelector('.btn-delete');

  deleteButton.addEventListener('click', () => {
    tableBody.removeChild(tableRow);
  });

  const likeButton = tableRow.querySelector('.btn-like');

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('selected');
  });
}
// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((contact, i) => {
  renderContact(contact);
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener('click', () => {
  // 1.generate random index for contacts array
  const randomIndex = Math.floor(Math.random() * contacts.length);
  // 2. select a random contact
  const randomContact = contacts[randomIndex];

  renderContact(randomContact);
});

// ITERATION 2 - Delete Buttons
// Your code goes here ...
// const tableRows = document.querySelectorAll('tbody#contacts tr');

// tableRows.forEach((tableRow) => {
//   const deleteButton = tableRow.querySelector('.btn-delete');

//   deleteButton.addEventListener('click', () => {
//     tableBody.removeChild(tableRow);
//   });
// });

// ITERATION 3 - Like Buttons
// Your code goes here ...
// tableRows.forEach((tableRow) => {
//   const likeButton = tableRow.querySelector('.btn-like');

//   likeButton.addEventListener('click', () => {
//     likeButton.classList.toggle('selected');
//   });
// });
