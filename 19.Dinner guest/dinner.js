"use strict";
let guest_list = ['Sana', 'Anaiza', 'Aliana', 'Aliza'];
// for(let i=0; i<guest_list.length; i++){   
//     console.log('Dear Mrs.' + guest_list[i] + ',\n\nIt is my pleasure to invite you in the ocassion. \n\n Thank You!\n\n' )
// }
// new_invitation
let absent_guest = 'Aliana';
let new_guest = 'Sonya';
guest_list[0] = new_guest;
// for(let i=0; i<guest_list.length; i++){   
//     console.log('Dear Mrs.' + guest_list[i] + ',\n\nIt is my pleasure to invite you in the ocassion. \n\n Thank You!\n\n' )
// }
// absent_guest
console.log(`Mrs. ${absent_guest} is not coming to the Ocassion.`);
// add 3 more guests.
// guest_list.push('Kamran Tessori');
// console.log(guest_list)
// guest_list.push('Sir Zia');
// console.log(guest_list)
// guest_list.push('Sir Hamza');
// console.log(guest_list)
// console.log('We find big table, we invite 3 more guest!');
guest_list.unshift('Sir Zia');
guest_list.splice(2, 0, 'Sir Hamza');
guest_list.push('Kamran Tessori');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mrs.' + guest_list[i] + ',\n\nIt is my pleasure to invite you in the ocassion. \n\n Thank You!\n\n');
}
// new_invitation
// for(let i=0; i<guest_list.length; i++){    
//     console.log('Dear Mrs.' + guest_list[i] + ',\n\nIt is my pleasure to invite you in the ocassion. \n\n Thank You!\n\n' )
// }
// big-table-cancel.
// console.log('\n Sorry we cannot arrange a big table, Only two peoples will be invited in the dinner ');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    // console.log(`Dear mr. ${remove_guest}, You are not invited for dinner.`);
}
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Dear mr. ` + guest_list[i] + `\n You are still invited \n Thank You! \n\n`)
// }
guest_list.splice(0, 2);
console.log(guest_list);
// EXERCISE#19 BEGIN FROM HERE,
// print the message indicating the number of the people you are inviting.
console.log(`Total number of guest are: ${guest_list.length}`);
