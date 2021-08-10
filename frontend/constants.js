/* LICENSE: Boost Software License 1.0
written by Jeff Gold, .
Googli.ee Notary Javascript.

The purpose of this script is to add users to a file, take the hash from
uploaded files to ipfs. then associate files with users. once assigned each
user must verify the document. Once all signers and witnesses have approved.
All files will then be added to an html script converted into a url and delivered
the user through a weblink and qr code. with option to mint the site to an NFT.
********/


// Const Person
const userId = Person.querySelector('#userId');
const firstName = Person.querySelector('#firstName');
const lastName = Person.querySelector('#lastName');
const dob = Person.querySelector('#dob');
const walletAddress = Person.querySelector('#walletAddress');
const unlockProtocolNFT = Person.querySelector('#unlockProtocolNFT');
const idCheck = Person.querySelector('#idCheck');
const signer = Person.querySelector('#signer');
const signedHash = Person.querySelector('#signedHash');
const witness = Person.querySelector('#witness');
const witnessHash = Person.querySelector('#witnessHash');
const approveFileHash = Person.querySelector('#approveFileHash');
const docRole = Person.querySelector('#docRole');
const verificationLevel = Person.querySelector('#verificationLevel');
const userNonce = Person.querySelector('#userNonce'); 



// const UploadedDocs

const originalFileName = UploadedDocs.querySelector('#originalFileName');
const ipfsHash = UploadedDocs.querySelector('#ipfsHash');
const ipfsLink = UploadedDocs.querySelector('#ipfsLink');
const fCoinAddress = UploadedDocs.querySelector('#fCoinAddress');
const fCoinBackup = UploadedDocs.querySelector('#fCoinBackup');
const uploadedBy = UploadedDocs.querySelector('#uploadedBy');
const signers = UploadedDocs.querySelector('#signers');
const witnesses = UploadedDocs.querySelector('#witnesses');
const encryptedDoc = UploadedDocs.querySelector('#encryptedDoc');