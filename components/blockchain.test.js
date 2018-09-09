
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
// bitcoin.createNewBlock(23234, 'FLJFLWEIOR2342WRLE', '342LJERJKLR23LK4FDKSLF');
// bitcoin.createNewTransaction(323224, 'SDFJKLEWFE09EU9F', 'EW0RUW0E9U0EFJLFKE');
// bitcoin.createNewBlock(324324, 'SRGSGRGS4RFSF4F', 'TY45YRERT34RF4T');

const previousHash = 'SDLFJEWOIFJE9W09R03FW0EFU';
const blockData = [
  {
    amount: 242324,
    sender: 'SLDFJWEORIJEWEWOJREI',
    recipient: 'SODF09W4RU09EFUW09ERUFE0'
  },
  {
    amount: 45454634,
    sender: 'HERTWGER4T43TRET34T34T',
    recipient: 'T3443T4RGTERY46434T4'
  },
  {
    amount: 4535345,
    sender: 'BAT4354TGREY3T34T',
    recipient: 'Y345T3TREG54TRWT34'
  }
]

// console.log(bitcoin.proofOfWork(previousHash, blockData));
// console.log(bitcoin.hashBlock(previousHash, blockData, 8218));
console.log(bitcoin);