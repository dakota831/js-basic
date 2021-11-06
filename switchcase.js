//With switch and case you can compare the value of a variable to a number of values.

let role = 'guest'; // role of the user

switch(role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}

if (role === 'guest') {
    console.log('Guest User');
else if (role === 'moderator') {
    console.log('Moderator User');
else console.log('Unknown User');
}
