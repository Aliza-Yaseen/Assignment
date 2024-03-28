let employee = ['aliza', 'sana', 'sania', 'sonya', 'mueza'];

for(let i=1; i<employee.length; i++){
    if(employee[i] == 'sana'){
        console.log('Hello sana, would you like to see a status report?')
    }
    else{
        console.log(`Hello ${employee[i]}`)
    }
}