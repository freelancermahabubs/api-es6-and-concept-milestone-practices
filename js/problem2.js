const person ={
  name: 'Mahabub',
  age: 21,
  photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
  email: 'info.freelancermahabub@gmail.com',
  address:{
    street: '123 Main st',
    city: 'Netrokona',
    state: 'Mymenshingh',
    zip: '2400'
  },
  hobbies: ['Reading', 'Traveling...', 'Programming'],
  getPropertyValue: function(property){
    return this[property]
  }
};

const personContainer = document.getElementById('person-container');

const personDetails = document.createElement('div');
personDetails.innerHTML = ` 
<p>My Name is ${person.name} I am ${person.age} Years Old. And My State is ${person.address.state} and My Hobbies is ${person.hobbies[1]}</p>

`;

personContainer.appendChild(personDetails)