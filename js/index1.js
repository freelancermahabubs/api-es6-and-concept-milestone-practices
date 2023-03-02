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
  hobbies: ['Reading', 'Traveling', 'Programming'],
  getPropertyValue: function(property){
    return this[property]
  }
};



const personContainer = document.getElementById('person-container');
const div = document.createElement('div');
div.innerHTML = ` 
<div class="flex items-center justify-between mb-4">
<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>

<a href="#" data-modal-target="small-modal" data-modal-toggle="small-modal" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
    Hobbies
</a>

<!-- Small Modal -->
<div id="small-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Hobbies
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="small-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
            
          <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                <li>
                  ${person.hobbies[0]}
                </li>
                <li>
                    ${person.hobbies[1]}
                </li>
                <li>
                    ${person.hobbies[2]}
                </li>
          </ul>

            </div>
           
        </div>
    </div>
</div>


<a href="#" data-modal-target="staticModal" data-modal-toggle="staticModal" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
    View all
</a>
</div>
<div class="flow-root">
<ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="${person.photo}" alt="Neil image">
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    ${person.name}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    ${person.email}
                </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                Age: ${person.getPropertyValue('age')}
            </div>
        </div>
    </li>
</ul>
</div>



<!-- Main modal -->
<div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Person Details
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Address:</h2>
           
                <li>
                    <span class="font-semibold text-gray-900 dark:text-white">Street: ${person.address.street}
                </li>
                <li>
                    <span class="font-semibold text-gray-900 dark:text-white">City: ${person.address.city}
                </li>
                <li>
                    <span class="font-semibold text-gray-900 dark:text-white">State: ${person.address.state}
                </li>
                <li>
                    <span class="font-semibold text-gray-900 dark:text-white">Zip Code: ${person.address.zip}
                </li>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="staticModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
            </div>
        </div>
    </div>
</div>
`;

personContainer.appendChild(div)
