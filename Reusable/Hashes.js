'use strict';

const phoneBook = {
  'Marcus Aurelius': '+380445554433',
  'Angela Merkel': '+380445554400',
};

const findPhoneByName = name => (
  phoneBook[name] ? phoneBook[name] : 'Contact is not found.'
);

console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Donald Trump'));
