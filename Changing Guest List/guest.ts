
let guest_list = ['Sana', 'Anaiza', 'Aliana', 'Aliza'];

for(let i=0; i<guest_list.length; i++){
    
    console.log('Dear Mrs.' + guest_list[i] + ',\n\nIt is my pleasure to invite you in the ocassion. \n\n Thank You!\n\n' )
}

// new_invitation
let absent_guest = 'Aliana';

let new_guest = 'Sonya';

guest_list[0] = new_guest ;

for(let i=0; i<guest_list.length; i++){
    
    console.log('Dear Mrs.' + guest_list[i] + ',\n\nIt is my pleasure to invite you in the ocassion. \n\n Thank You!\n\n' )
}


// absent_guest
console.log(`Mrs. ${absent_guest} is not coming to the Ocassion.`)


