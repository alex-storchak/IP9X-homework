'use strict';

const phoneBook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Angela Merkel', phone: '+380445554400' },
];

const findPhoneByName = name => {
    let phone = 'Contact is not found.';
    for (const contact of phoneBook) {
        if (contact.name === name) {
            phone = contact.phone;
        }
    }
    return phone;
};

console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Donald Trump'));
